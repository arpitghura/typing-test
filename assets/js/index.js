const links = document.querySelector(".navigation");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

function displayFunction() {
    if (links.style.display === "block") {
        links.style.display = "none";
        mobileNav.classList.remove("change");
        
    } else {
        links.style.display = "block";
        mobileNav.classList.add("change");
    }
}

function display() {
    let w = window.innerWidth;

    if (w >= 525) {
        document.querySelector(".navigation").style.display = "block";
    } else if (mobileNav.classList.contains("change") ) {
        document.querySelector(".navigation").style.display = "block";
    } else {
        document.querySelector(".navigation").style.display = "none";
    }
}

mobileNav.addEventListener("click", displayFunction);
body.addEventListener("onresize", display);