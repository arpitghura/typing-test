// get elements from DOM
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
// const userInput = document.getElementById("userInput");
let userInput = document.getElementById('inputOne');
let userInputBox  = document.querySelector('.user-input-box-one');
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
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const userInputBox1 = document.querySelector('.user-input-box-one');
const userInputBox2 = document.querySelector('.user-input-box-two');

// import functions
import { makeSentence } from './sentence.mjs'

// get elements from DOM
const nameModalEle = document.querySelector(".nameModal");
const startInstruction = document.querySelector(".startIns")

// hiding elements in DOM
levelSelector.style.display = 'none';
timingSessionChoose.style.display = 'none';
nameModalEle.style.display = 'none';
userInputBox.style.display = 'none';
messages.style.display = 'none';
resetBtn.style.display = 'none';
startBtn.style.display = 'none';
startInstruction.style.display = 'none';

// initializing variables
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

    // get time chosen by the user
    const time = getTime();

    // if the user has no history, i.e., new user
    if (wpm === 0) {
        // setting up default difficulty level for a new user
        if (easyLvlBtn.checked) {
            selectedDifficultyLevel = "easy";
            quoteLength = 70 * time;
        } else if (interLvlBtn.checked) {
            selectedDifficultyLevel = "medium";
            quoteLength = 55 * time;
        } else if (hardLvlBtn.checked) {
            selectedDifficultyLevel = "hard";
            quoteLength = 40 * time;
        }
    } else {
        // setting up difficulty level according to user's wpm
        if (easyLvlBtn.checked) {
            selectedDifficultyLevel = "easy";
            quoteLength = (wpm + 8) * time;
        } else if (interLvlBtn.checked) {
            selectedDifficultyLevel = "medium";
            quoteLength = (wpm + 4) * time;
        } else if (hardLvlBtn.checked) {
            selectedDifficultyLevel = "hard";
            quoteLength = (wpm + 2) * time;
        }
    }

    // generate sentences
    const sentences = Array.from({ length: 5 }, () => makeSentence(selectedDifficultyLevel, quoteLength));

    // join sentences with line breaks
    const formattedQuote = sentences.join('<br>');

    return formattedQuote;
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
    // getting quote and time
    const quote = makequote()
    
    // get time choosed by user and convert it into milliseconds
    const time = getTime() * 60 * 1000;

    // splitting quote into words
    extracted_words = quote.split(' ');
    extracted_words_length = extracted_words.length;
    wordIndex = 0;

    // making the quote in span tags
    const spanWords = extracted_words.map(word => {
        return `<span>${word} </span>`;
    });

    // setting up the quote in DOM
    quoteEle.innerHTML = spanWords.join('');
    quoteEle.childNodes[0].className = 'highlight';
    userInput.innerText = '';
    userInput.focus();

    const dynamicTextBox = document.querySelector('.dynamic-text-box');
    // Get the viewport height
    const viewportHeight = window.innerHeight;
    // Get the height of the dynamic-text-box
    const dynamicTextBoxHeight = dynamicTextBox.offsetHeight;
    // Calculate 80% of the viewport height
    const eightyPercentViewportHeight = 0.8 * viewportHeight;

    // Compare the dynamic-text-box height with 80% of the viewport height
    if (dynamicTextBoxHeight < eightyPercentViewportHeight) {
        // Perform actions if the dynamic-text-box height is less than 80% of the viewport height
        console.log("Dynamic text box height is less than 80% of viewport height.");
        
        userInput = inputOne;
        userInputBox = userInputBox1;
    } else {
        // Perform actions if the dynamic-text-box height is greater than or equal to 80% of the viewport height
        console.log("Dynamic text box height is greater than or equal to 80% of viewport height.");
        
        userInput = inputTwo;
        userInputBox = userInputBox2;
    }
    // hiding and showing elements in DOM
    userHeader.style.display = "none";
    levelSelector.style.display = 'none';
    userInputBox.style.display = 'block';
    userInput.style.display = 'inline'; 
    startBtn.style.display = 'none';
    startInstruction.style.display = 'none';
    timingSessionChoose.style.display = "none";
    resetBtn.style.display = 'inline-block';

    // setting up the timer
    startTime = new Date().getTime();
    startTimer(time);
});

// function to call when the session is completed 
// either by writting all words or time goes off
const completedSession = () => {
    // calculating speed
    const timeTaken = ((new Date().getTime() - startTime) / 1000).toFixed(2); // in seconds
    const speed_word_pm = Math.ceil((char_you_typed / 5) / (timeTaken / 60)); // formula taken from google
    const message = `Congratulations! You have typed in ${timeTaken} seconds`;
    const speedMessage = `Your speed is ${speed_word_pm} words per minutes`;

    // display results
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
    // hiding and showing elements in DOM
    levelSelector.style.display = 'block';
    startBtn.style.display = 'block';
    startInstruction.style.display = 'block';
    timingSessionChoose.style.display = "flex";
    userHeader.style.display = "block"

    // resetting variables
    quoteEle.innerText = "";
    timeout = false;
    words = "";
    userInput.value = '';

    // hiding elements
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
        // greet user
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
    // check if history is already present
    // if yes then parse the history and push the new session
    // else create a new history
    if (history) {
        // parse the history and push the new session
        historyArray = JSON.parse(history);
        historyArray.push({ char:char_you_typed, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime });
        localStorage.setItem("typerHistory", JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem("typerHistory", JSON.stringify([{ char:char_you_typed, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime }]));
    }
}
