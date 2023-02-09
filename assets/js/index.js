
// get navbar elements and body element
const links = document.querySelector(".navigation");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

function displayFunction() {
    // if navigation links are displayed, hide them and remove change class from mobile navigation 
    // else display navigation links and add change class to mobile navigation
    if (links.style.display === "block") {
        links.style.display = "none";
        mobileNav.classList.remove("change");
    } else {
        links.style.display = "block";
        mobileNav.classList.add("change");
    }
}

function display() {
    // get window width
    let w = window.innerWidth;

    // if window width is greater than 525px, display navigation links else show mobile navigation
    if (w >= 525) {
        document.querySelector(".navigation").style.display = "block";
    } else if (mobileNav.classList.contains("change") ) {
        document.querySelector(".navigation").style.display = "block";
    } else {
        document.querySelector(".navigation").style.display = "none";
    }
}

// add event listeners for click and resize of window
mobileNav.addEventListener("click", displayFunction);
body.addEventListener("onresize", display);