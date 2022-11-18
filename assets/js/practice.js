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
const onemin = document.getElementById("onemin");
const twomin = document.getElementById("twomin");
const fivemin = document.getElementById("fivemin");

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
let selectedTime = 0;
let char_you_typed = 0

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
    // setting up difficulty level 
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
    // making word and returning it 
    let charactersLength = characters.length;
    for (let i = 0; i < quoteLength; i++) {
        words += makeword(length, charactersLength, characters) + " ";
    }
    words_length = words.length;
    return words;
};

// getting time choosed by user
const getTime = () => {
    if (onemin.checked){
        selectedTime = 1
        return (1 * 60 * 1000);
    }
    else if (twomin.checked){
        selectedTime = 2
        return (2 * 60 * 1000);
    }
    else if (fivemin.checked){
        selectedTime = 5
        return (5 * 60 * 1000);
    }
};

// flag after time goes off
const startTimer = (time) => {
    setTimeout(() => {
        timeout = true
        completedSession();
    }, time);
}

// start the typing game
startBtn.addEventListener("click", () => {
    const quote = makequote();
    const time = getTime();
    extracted_words = quote.split(' ');
    extracted_words_length = extracted_words.length;
    wordIndex = 0;
    
    userHeader.style.display = "none";
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

// function to call when the session is completed 
// either by writting all words or time goes off
const completedSession = () => {
    const timeTaken = ((new Date().getTime() - startTime) / 1000).toFixed(2); // in seconds
    const speed_word_pm = Math.ceil((char_you_typed / 5) / (timeTaken / 60)); // formula taken from google
    const message = `Congratulations! You have typed in ${timeTaken} seconds`;
    const speedMessage = `Your speed is ${speed_word_pm} words per minutes`;

    messages.style.display = 'inline';
    messageEle.innerText = message;
    speedEle.innerText = speedMessage;
    userInput.style.display = 'none';
    saveHistory();
}

// working when user types in the input box ( typing the highlighted word ) 
userInput.addEventListener('input', () => {
    const curWord = extracted_words[wordIndex];
    const input = userInput.value;

    // wrote all words or time out then complete the session
    if (timeout || (input === curWord && wordIndex === (extracted_words.length - 2))) {
        completedSession();
    } 
    // moving to the next word
    else if (input.endsWith(' ') && input.trim() === curWord) {
        userInput.value = '';
        char_you_typed += curWord.length;
        wordIndex++;
        for (const wordEle of quoteEle.childNodes) {
            wordEle.className = '';
        }
        quoteEle.childNodes[wordIndex].className = 'highlight';
    }
    // remove all classes if user is typing correctly
    else if (curWord.startsWith(input)) {
        userInput.className = '';
    }
    // error showing if user mistyped
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

// getting and setting username in localStorage
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

// Function to save username to localStorage
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

// Listen for timer select
document.getElementById("timingSessionChoose").addEventListener("click", (e) => {
    if (e.target.name === "time-button" && (easyLvlBtn.checked || interLvlBtn.checked || hardLvlBtn.checked)) {
        startBtn.style.display = 'block';
        // startInstruction.style.display = 'block'
    }
})
// listen for level select
document.getElementById("levelSelector").addEventListener("click", (e) => {
    if (e.target.name === "radio-button" && (onemin.checked || twomin.checked || fivemin.checked)) {
        startBtn.style.display = 'block';
        startInstruction.style.display = 'block'
    }
})

// // function to start typing session after pressing space key 
// document.addEventListener('keypress', (e) => {
//     if (e.code === "Space") {
//         if (startBtn.style.display !== "none")
//             startBtn.click();
//         else if (userInput.style.display === "none")
//             resetBtn.click();
//     }
// })

// function to automatically click on submit button with Enter key
nameInput.addEventListener('keypress', (e) => {
    if (e.code === "Enter")
        nameSubmitBtn.click()
})

getAndSetUserName();

let history = [];
let historyArray = [];

// Saving History of typing sessions to localStorage
const saveHistory = () => {
    history = localStorage.getItem("typerHistory");
    if (history) {
        historyArray = JSON.parse(history);
        historyArray.push({ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime });
        localStorage.setItem("typerHistory", JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem("typerHistory", JSON.stringify([{ extracted_words_length, words_length, timeTaken: (new Date().getTime() - startTime) / 1000, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime }]));
    }
}
