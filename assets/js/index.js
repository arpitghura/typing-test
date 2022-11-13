const links = document.querySelector(".navigation");
const mobileNav = document.querySelector(".mobile-nav");

function displayFunction() {
    if (links.style.display === "block") {
        links.style.display = "none";
        mobileNav.classList.remove("change");
    } else {
        links.style.display = "block";
        mobileNav.style.display = "block";
        mobileNav.classList.add("change");
    }
}

mobileNav.addEventListener("click", displayFunction);