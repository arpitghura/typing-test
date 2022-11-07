const links = document.querySelector(".navigation");
const mobileNav = document.querySelector(".bx-menu");


function displayFunction() {
    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
        mobileNav.style.display = "block";
    }
}

mobileNav.addEventListener("click", displayFunction);