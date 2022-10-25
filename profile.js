const userNameEle = document.getElementById("userName");
const navigateEle = document.getElementById("navigate-user-text");

// Navigate to practice.html if no data in local storage
const checkIfUserData = () => {
    const name = localStorage.getItem("typerName");
    if(!name){
        const linktoprofile = document.createElement('a');
        linktoprofile.innerText = "Click here";
        linktoprofile.href = "./practice.html";
        navigateEle.innerText = " to set up your profile";
        navigateEle.insertAdjacentElement('afterbegin', linktoprofile);
    }
}

const getUserName = () => {
    const name = localStorage.getItem("typerName");
    if (name) {
        userNameEle.innerText = "Full Name: " + `${name}`;
    }else{
        checkIfUserData();
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
