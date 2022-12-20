function toggleLightDarkMode() {
    var body = document.body;
    var element = document.querySelector("#element");
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        element.classList.remove("light-modalName")
        element.classList.add("dark-modalName");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        element.classList.remove("dark-modalName");
        element.classList.add("light-modalName");
    }
}
