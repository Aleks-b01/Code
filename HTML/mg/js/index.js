document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", keyBinds);

const mainMenu = document.getElementById('mainMenu');
const startMenu = document.getElementById('startMenu');
const settingsMenu = document.getElementById('settingsMenu');

const css = document.getElementsByTagName('link');

const screenwidth = screen.width

window.onload = function() {
	if (screenwidth > 600) {
		css[0].setAttribute('href', 'index.css');
	} else if (screenwidth <= 600) {
		css[0].setAttribute('href', 'mobile.css');
	}
};

function keyBinds(event) {
	if (event.key === '' && mainMenu.style.display == "flex") {

	} else if (event.key === '' && startMenu.style.display == "flex") {

	}
};

function loadGame() {

};

});
