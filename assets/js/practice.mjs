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

import { makeSentence } from './sentence.mjs'

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
let characters;

const getwpm = () => {
    // access history from local storage
    history = localStorage.getItem("typerHistory");
    if (history != null) {
        // parse history into array
        historyArray = JSON.parse(history);
        // initialize variables
        let highestSpeed = 0;
        let speed = 0;
        // loop through history array to find highest speed
        historyArray.forEach((item) => {
            speed =  Math.ceil((item.char / 5) / (item.timeSession));
            // if speed is higher than highest speed, set it as highest speed
            if (speed > highestSpeed) {
                highestSpeed = speed;
            }
        });
        return highestSpeed;
    } else {
        // if user has no history, return 0
        return 0;
        
    }
};


// making the quote from the words
const makequote = () => {
    // get highest wpm of user
    let wpm = getwpm();

    // get time choosed by user
    const time = getTime();

    // if user has no history ie. new user
    if (wpm == 0) {
        // setting up default difficulty level for new user
        if (easyLvlBtn.checked) {
            selectedDifficultyLevel = "easy";
            quoteLength = 70
        } else if (interLvlBtn.checked) {
            selectedDifficultyLevel = "medium";
            quoteLength = 60
        } else if (hardLvlBtn.checked) {
            selectedDifficultyLevel = "hard";
            quoteLength = 50
        }
    }
    else {
        // setting up difficulty level according to user's wpm
        if (easyLvlBtn.checked) {
            selectedDifficultyLevel = "easy";
            quoteLength = wpm + 12
        } else if (interLvlBtn.checked) {
            selectedDifficultyLevel = "medium";
            quoteLength = wpm + 9
        } else if (hardLvlBtn.checked) {
            selectedDifficultyLevel = "hard";
            quoteLength = wpm + 6
        }
    }
    return makeSentence(selectedDifficultyLevel,quoteLength);
};

// getting time choosed by user
const getTime = () => {
    if (onemin.checked){
        selectedTime = 1
        return selectedTime;
    }
    else if (twomin.checked){
        selectedTime = 2
        return selectedTime;
    }
    else if (fivemin.checked){
        selectedTime = 5
        return selectedTime;
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
    const quote = makequote()
    
    // get time choosed by user
    var time = getTime();

    // convert into seconds
    time = time * 60 * 1000;

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
    if (timeout || (input === curWord && wordIndex === (extracted_words.length - 1))) {
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
        historyArray.push({ char:char_you_typed, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime });
        localStorage.setItem("typerHistory", JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem("typerHistory", JSON.stringify([{ char:char_you_typed, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime }]));
    }
}
