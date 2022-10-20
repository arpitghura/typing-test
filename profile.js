const userNameEle = document.getElementById("userName");

const getUserName = () => {
    const name = localStorage.getItem("typerName");
    if (name) {
        userNameEle.innerText = "Full Name: " + `${name}`;
        console.log(`Full Name: ${name}`);
    }
};

getUserName();

// To encode the string
function htmlEncode(str) {
    return String(str).replace(/[^\w. ]/gi, function(c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
  }

let history = [];
let historyArray = [];

// History Saver
const saveHistory = () => {
    history = localStorage.getItem("typerHistory");
    if (history) {
        historyArray = JSON.parse(history);
        historyArray.push({ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000 });
        localStorage.setItem("typerHistory", JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem("typerHistory", JSON.stringify([{ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000 }]));
    }
    showHistory();
}

// History Viewer
const historyBody = document.getElementById("historyTableBody");

const showHistory = () => {
    history = localStorage.getItem("typerHistory");
    userName = localStorage.getItem("typerName");
    if (history != null) {
        document.getElementsByClassName("history")[0].style.display = "block";
        historyArray = JSON.parse(history);
        historyBody.innerHTML = "";
        historyArray.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${htmlEncode(userName)}</td><td>${Math.ceil(item.extracted_words_length / (item.timeTaken / 60))}</td><td>${item.timeTaken}</td>`;
            historyBody.appendChild(row);
        });
        console.log("I am from show History");
    }
    else {
        document.getElementsByClassName("history")[0].style.display = "none";
    }
};

showHistory();

// History Reset Button
const historyResetBtn = document.getElementById("historyResetBtn");
historyResetBtn.addEventListener("click", () => {
    localStorage.removeItem("typerName");
    localStorage.removeItem("typerHistory");
    showHistory();
    window.location.reload();
})