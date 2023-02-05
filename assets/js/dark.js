// Changes icon of dark mode button to sun when dark mode is enabled and moon when dark mode is disabled

function change (iconID){
	if(document.getElementById(iconID).className=="bx bx-moon dark-btn"){
		document.getElementById(iconID).className = "bx bx-sun dark-btn";
	}else{
		document.getElementById(iconID).className = "bx bx-moon dark-btn";
	}
}

function toggleLightDarkMode() {
	// get the body element
	var body = document.body;
	var element = document.querySelector("#element");
	// if body class is light mode, then change to dark mode, else change to light mode
	if (body.classList.contains("light-mode")) {
		change('icon1');
		body.classList.remove("light-mode");
		body.classList.add("dark-mode");
		element.classList.remove("light-modalName")
		element.classList.add("dark-modalName");
	} else { 
		change('icon1');
		body.classList.remove("dark-mode");
		body.classList.add("light-mode");
		element.classList.remove("dark-modalName");
		element.classList.add("light-modalName");
	}
}
