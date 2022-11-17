const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const userInput = document.getElementById("userInput");
const messageEle = document.getElementById("message");
const speedEle = document.getElementById("speed");
const quoteEle = document.getElementById("quote");
const greetEle = document.getElementById("greetUser");
const levelSelector = document.getElementById("levelSelector");
const easyLvlBtn = document.getElementById("easyLvlBtn");
const interLvlBtn = document.getElementById("interLvlBtn");
const hardLvlBtn = document.getElementById("hardLvlBtn");
const userHeader = document.getElementById("user-header");

const nameModalEle = document.querySelector(".nameModal");
const startInstruction = document.querySelector(".startIns")

levelSelector.style.display = 'none';
timingSessionChoose.style.display = 'none';
nameModalEle.style.display = 'none';
userInputBox.style.display = 'none';
messages.style.display = 'none';
resetBtn.style.display = 'none';
startBtn.style.display = 'none';
startInstruction.style.display = 'none';

let extracted_words = [];
let words = "";
let timeout = false
let wordIndex = 0, extracted_words_length = 0, quoteLength = 0;
let startTime = Date.now();
let selectedDifficultyLevel = "";

// To encode the string
function htmlEncode(str) {
    return String(str).replace(/[^\w. ]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}

// generating words
const makeword = (length, charactersLength, characters) => {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// making the quote from the words
const makequote = () => {
    // const characters = [10,11,12,13,14,16,20,22,25,30,35];
    // quoteLength = characters[Math.floor(Math.random() * characters.length)];
    // quoteLength = Number(quoteLength);
    // console.log(quoteLength);

    if (easyLvlBtn.checked) {
        characters = 'abcdefghijklmnopqrstuvwxyz';
        selectedDifficultyLevel = "Easy";
        length = 4
        quoteLength = 30

    } else if (interLvlBtn.checked) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        selectedDifficultyLevel = "Medium";
        length = 6
        quoteLength = 50
    } else if (hardLvlBtn.checked) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        selectedDifficultyLevel = "Hard";
        length = 8
        quoteLength = 60
    }

    let charactersLength = characters.length;
    for (let i = 0; i < quoteLength; i++) {
        words += makeword(length, charactersLength, characters) + " ";
    }
    words_length = words.length;
    return words;
};

const getTime = () => {
    if (onemin.checked)
        return (1 * 60 * 1000);
    else if (twomin.checked)
        return (2 * 60 * 1000);
    else if (fivemin.checked)
        return (5 * 60 * 1000);
};

const startTimer = (time) => {
    setTimeout(() => {
        timeout = true
    }, time);
}

// start the typing game
startBtn.addEventListener("click", () => {
    userHeader.style.display = "none"
    const quote = makequote();
    const time = getTime();
    extracted_words = quote.split(' ');
    extracted_words_length = extracted_words.length;
    wordIndex = 0;

    levelSelector.style.display = 'none';
    userInputBox.style.display = 'block';
    userInput.style.display = 'inline';
    startBtn.style.display = 'none';
    startInstruction.style.display = 'none';
    timingSessionChoose.style.display = "none";
    resetBtn.style.display = 'inline-block';

    const spanWords = extracted_words.map(word => {
        return `<span>${word} </span>`;
    });
    quoteEle.innerHTML = spanWords.join('');
    quoteEle.childNodes[0].className = 'highlight';
    userInput.innerText = '';
    userInput.focus();
    startTime = new Date().getTime();
    startTimer(time);
});

let char_you_typed = 0
// change the highlight class to the next word on user input
userInput.addEventListener('input', () => {
    const curWord = extracted_words[wordIndex];
    const input = userInput.value;

    if (timeout || (input === curWord && wordIndex === (extracted_words.length - 2))) {
        const timeTaken = (new Date().getTime() - startTime) / 1000; // in seconds
        const speed_word_pm = Math.ceil((char_you_typed / 5) / (timeTaken / 60));
        const message = `Congratulations! You have typed in ${timeTaken} seconds`;
        const speedMessage = `Your speed is ${speed_word_pm} words per minutes`;

        messages.style.display = 'inline';
        messageEle.innerText = message;
        speedEle.innerText = speedMessage;
        userInput.style.display = 'none';
        saveHistory();
    }
    else if (input.endsWith(' ') && input.trim() === curWord) {
        userInput.value = '';
        char_you_typed += curWord.length;
        wordIndex++;
        for (const wordEle of quoteEle.childNodes) {
            wordEle.className = '';
        }
        quoteEle.childNodes[wordIndex].className = 'highlight';
    }
    else if (curWord.startsWith(input)) {
        userInput.className = '';
    }
    else {
        userInput.className = 'error';
    }
});

// Reset the typing game
resetBtn.addEventListener("click", () => {
    levelSelector.style.display = 'block';
    startBtn.style.display = 'block';
    startInstruction.style.display = 'block';
    timingSessionChoose.style.display = "flex";
    userHeader.style.display = "block"
    
    quoteEle.innerText = "";
    timeout = false;
    words = "";
    userInput.value = '';
    
    resetBtn.style.display = 'none';
    userInput.style.display = 'none';
    userInputBox.style.display = 'none';
    messages.style.display = 'none';
})

// Popup to ask for Name of user 
// if not entered before & display name from local Storage

const nameInput = document.getElementById("userName");
const nameSubmitBtn = document.getElementById("nameSubmitBtn");

const getAndSetUserName = () => {
    const name = localStorage.getItem("typerName");
    if (name) {
        greetEle.innerText = `Hello, ${name}!`;
        levelSelector.style.display = "block";
        timingSessionChoose.style.display = "flex";
    }
    else {
        nameModalEle.style.display = "block";
    }
};

nameSubmitBtn.addEventListener("click", () => {
    console.log(nameInput.value);
    if (nameInput.value != null && nameInput.value != "") {
        localStorage.setItem("typerName", nameInput.value);
        nameModalEle.style.display = "none";
        getAndSetUserName();
    }
    else {
        console.log("Enter Username");
    }
})

// Listen for level select
document.getElementById("timingSessionChoose").addEventListener("click", (e) => {
    if (e.target.name === "time-button") {
        startBtn.style.display = 'block';
        startInstruction.style.display = 'block'
    }
})


document.addEventListener('keypress', (e) => {
    if (e.code === "Space") {
        if (startBtn.style.display !== "none")
            startBtn.click();
        else if (userInput.style.display === "none")
            resetBtn.click();
    }
})

nameInput.addEventListener('keypress', (e) => {
    if (e.code === "Enter")
        nameSubmitBtn.click()
})

getAndSetUserName();

let history = [];
let historyArray = [];

// History Saver
const saveHistory = () => {
    history = localStorage.getItem("typerHistory");
    if (history) {
        historyArray = JSON.parse(history);
        historyArray.push({ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000, difficultyLevel: selectedDifficultyLevel });
        localStorage.setItem("typerHistory", JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem("typerHistory", JSON.stringify([{ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000, difficultyLevel: selectedDifficultyLevel }]));
    }
    // showHistory();
}

// // History Viewer
// const historyBody = document.getElementById("historyTableBody");
// const avgHistoryBody = document.getElementById("avgTableBody");

// const showHistory = () => {
//     history = localStorage.getItem("typerHistory");
//     userName = localStorage.getItem("typerName");
//     if (history != null) {
//         document.getElementsByClassName("history")[0].style.display = "block";
//         historyArray = JSON.parse(history);
//         historyBody.innerHTML = "";
//         avgHistoryBody.innerHTML="";
//         const avgRow = document.createElement("tr");
//         let avgSpeed = 0;
//         let avgTime = 0;
//         historyArray.forEach((item) => {
//             const row = document.createElement("tr");
//             let speed = Math.ceil(item.extracted_words_length / (item.timeTaken / 60));
//             let time = item.timeTaken;
//             avgSpeed += speed;
//             avgTime += time;
//             row.innerHTML = `<td>${htmlEncode(userName)}</td><td>${speed}</td><td>${time}</td><td>${item.difficultyLevel}</td>`;
//             historyBody.appendChild(row);
//         });
//         avgSpeed = (avgSpeed / historyArray.length).toFixed(1);
//         avgTime = (avgTime / historyArray.length).toFixed(3);
//         avgRow.innerHTML = `<td>${avgSpeed}</td><td>${avgTime}</td>`;
//         avgHistoryBody.appendChild(avgRow);
//     }
//     else {
//         document.getElementsByClassName("history")[0].style.display = "none";
//     }
// };

// showHistory();

// // History Reset Button
// const historyResetBtn = document.getElementById("historyResetBtn");
// historyResetBtn.addEventListener("click", () => {
//     localStorage.removeItem("typerName");
//     localStorage.removeItem("typerHistory");
//     showHistory();
//     window.location.reload();
// })

// -------- timimg based sessions

min1session = document.getElementById("onemin")
min2session = document.getElementById("twomin")
min5session = document.getElementById("fivemin")

// min1session.addEventListener("click",()=>{
//     console.log("function called");
//     setTimeout(() => {
//         console.log("Session Completed");
//         userInput.disabled = true
//         userInput.style.display="none"
//         userInputBox.style.display="none"
//     }, (3600));
//     min1session.disabled=true
// })