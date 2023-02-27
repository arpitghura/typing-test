// get element from DOM
const userNameEle = document.getElementById("userName");
const navigateEle = document.getElementById("navigate-user-text");

// Navigate to practice.html if no data in local storage
const checkIfUserData = (msg) => {
    const name = localStorage.getItem("typerName");
    if(!name){
        const linktoprofile = document.createElement('a');
        linktoprofile.innerText = "Click here";
        linktoprofile.href = "./practice.html";
        navigateEle.innerText = `${msg}`;
        navigateEle.insertAdjacentElement('afterbegin', linktoprofile);
    }else{
        const linktoprofile = document.createElement('a');
        linktoprofile.innerText = "Click here";
        linktoprofile.href = "./practice.html";
        navigateEle.innerText = "practice again";
        navigateEle.insertAdjacentElement('afterbegin', linktoprofile);
    }
}

// Function to get username from localStorage
const getUserName = () => {
    const name = localStorage.getItem("typerName");
    if (name) {
        userNameEle.innerText = "User Name: " + `${name}`;
    }else{
        //checkIfUserData();
        userNameEle.innerText = "";
    }
};

// call the function
getUserName();

// To encode the string
// function htmlEncode(str) {
//     return String(str).replace(/[^\w. ]/gi, function(c) {
//         return '&#' + c.charCodeAt(0) + ';';
//     });
//   }

let history = [];
// let historyArray = [];

// History Saver
// const saveHistory = () => {
//     history = localStorage.getItem("typerHistory");
//     if (history) {
//         historyArray = JSON.parse(history);
//         historyArray.push({ speed:speed_word_pm, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime  });
//         localStorage.setItem("typerHistory", JSON.stringify(historyArray));
//     }
//     else {
//         localStorage.setItem("typerHistory", JSON.stringify([{ speed:speed_word_pm, difficultyLevel: selectedDifficultyLevel, timeSession: selectedTime  }]));
//     }
//     showHistory();
// }

// Get History Table Elements
const historyBody = document.getElementById("historyTableBody");
const avgHistoryBody = document.getElementById("avgTableBody");

// Show History Function
const showHistory = () => {
    // Get History from Local Storage
    history = localStorage.getItem("typerHistory");
    userName = localStorage.getItem("typerName");
    // If History is not null, display the history table and add history to table
    if (history != null) {
        // Display History Table
        document.getElementsByClassName("history")[0].style.display = "block";
        // Parse the history string to array
        historyArray = JSON.parse(history);

        // Clear the table
        historyBody.innerHTML = "";
        avgHistoryBody.innerHTML="";
        const avgRow = document.createElement("tr");

        // initialize variables
        let avgSpeed = 0;
        let avgTime = 0;

        // Add history to table row by row
        historyArray.forEach((item) => {
            // Create a new row
            const row = document.createElement("tr");
            // Calculate Speed and Averages
            speed = Math.ceil((item.char / 5) / (item.timeSession));
            avgSpeed += speed;
            avgTime += item.timeSession;
            // Add data to row and append to table
            row.innerHTML = `<td>${speed}</td><td>${item.timeSession} Minutes</td><td>${item.difficultyLevel}</td>`;
            historyBody.appendChild(row);
        });
        // Add Averages to table
        avgSpeed = (avgSpeed / historyArray.length).toFixed(1);
        avgTime = (avgTime / historyArray.length).toFixed(2);
        avgRow.innerHTML = `<td>${avgSpeed}</td><td>${avgTime}</td>`;
        avgHistoryBody.appendChild(avgRow);
    }
    else {
        document.getElementsByClassName("history")[0].style.display = "none";
    }
};

// Call showHistory function
showHistory();

// History Reset Button
const historyResetBtn = document.getElementById("historyResetBtn");
historyResetBtn.addEventListener("click", () => {
    //localStorage.removeItem("typerName");
    localStorage.removeItem("typerHistory");
    showHistory();
   // window.location.reload();
   //to show msg after delete data
   checkIfUserData(" to practice again")
})

//after click on delete username button 
const deleteUserName=document.querySelector(".reset-userName")
  deleteUserName.addEventListener("click",(e)=>{
    localStorage.removeItem("typerName");
    e.target.style.display="none"
    checkIfUserData(" to set up your name and practice again")
    getUserName()
})


//hide username 
const usernamefromLocal = localStorage.getItem("typerName");
if(usernamefromLocal==null){
    deleteUserName.style.display="none"
    checkIfUserData(" to set up your name and practice again")

}



