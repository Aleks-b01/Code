// This file is dedicated to only the main menu functionality
document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const menu = document.getElementById('menu');
const calcBtn = document.getElementById('calcBtn');
const calc = document.getElementById('calc');
const scrambleBtn = document.getElementById('scrambleBtn');
const scramble = document.getElementById('scramble');
const algsBtn = document.getElementById('algsBtn');
const algs = document.getElementById('algs');
const helpersBtn = document.getElementById('helpersBtn');
const helpers = document.getElementById('helpers');
const competitiongroups = document.getElementById('competitiongroups');
const wcalive = document.getElementById('wcalive');
const settingsBtn = document.getElementById('settingsBtn');
const settings = document.getElementById('settings');
const calcMenuBtn = document.getElementById('calcMenuBtn');
const scrambleMenuBtn = document.getElementById('scrambleMenuBtn');
const algsMenuBtn = document.getElementById('algsMenuBtn');
const helpersMenuBtn = document.getElementById('helpersMenuBtn');
const settingsMenuBtn = document.getElementById('settingsMenuBtn');
const css = document.getElementsByTagName('link');
const lxa = document.getElementById('lxa');
const bgColor = document.getElementById('bgColor');

const screenwidth = screen.width;

let lxam = 1;

window.onload = function() {
	if (screenwidth > 600) {
		css[0].setAttribute('href', 'index.css');
	} else if (screenwidth <= 600) {
		css[0].setAttribute('href', 'mobile.css');
	}
};

function handleShortcut(event) {
	if (event.key === "Escape" && calc.style.display === 'flex') {
		event.preventDefault();
		exitCalc();
	} else if (event.key === "Escape" && scramble.style.display === 'flex') {
		event.preventDefault();
		exitScramble();
	} else if (event.key === "Escape" && algs.style.display === 'flex') {
		event.preventDefault();
		exitAlgs();
	} else if (event.key === "Escape" && helpersdiv.style.display === 'flex') {
		event.preventDefault();
		exitHelper();
	} else if (event.key === "Escape" && settings.style.display === 'flex') {
		event.preventDefault();
		exitSettings();
	}
};

lxa.onclick = function() {
	if (lxam == 1) {
		bgColor.style.backgroundColor = 'white';
		lxa.innerText = 'L';
		lxam = 2;
	} else if (lxam == 2) {
		bgColor.style.backgroundColor = 'rgb(47, 52, 56)';
		lxa.innerText = 'D';
		lxam = 1;
	}
}

calcBtn.onclick = function() {
	menu.style.display = 'none';
	headerDiv.style.display = 'none';
	calc.style.display = 'flex';
	settingsBtn.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

scrambleBtn.onclick = function() {
	menu.style.display = 'none';
	headerDiv.style.display = 'none';
	scramble.style.display = 'flex';
	settingsBtn.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

algsBtn.onclick = function() {
	menu.style.display = 'none';
	headerDiv.style.display = 'none';
	algs.style.display = 'flex';
	settingsBtn.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

helpersBtn.onclick = function() {
	menu.style.display = 'none';
	headerDiv.style.display = 'none';
	helpers.style.display = 'inline'; // will def change this when I'll actually build helpersdiv
	settingsBtn.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

competitiongroups.onclick = function() {
	window.open("https://www.competitiongroups.com/", "_blank");
};

wcalive.onclick = function() {
	window.open("https://live.worldcubeassociation.org/", "_blank");
};

settingsBtn.onclick = function() {
	menu.style.display = 'none';
	headerDiv.style.display = 'none';
	settings.style.display = 'inline'; // will also change this when i build the settings
	settingsMenuBtn.style.visibility = 'visible';
	settingsBtn.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

calcMenuBtn.onclick = function() {
	exitCalc();
};

function exitCalc() {
	menu.style.display = 'flex';
	headerDiv.style.display = 'flex';
	calc.style.display = 'none';
	settingsBtn.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

scrambleMenuBtn.onclick = function() {
	exitScramble();
};

function exitScramble() {
	menu.style.display = 'flex';
	headerDiv.style.display = 'flex';
	scramble.style.display = 'none';
	settingsBtn.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};
/*
algsMenuBtn.onclick = function() {
	exitAlgs();
};

function exitAlgs() {
	menu.style.display = 'flex';
	headerDiv.style.display = 'flex';
	algsBtn.style.display = 'none';
	settingsBtn.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

helpersMenuBtn.onclick = function() {
	exitHelper();
};

function exitHelper() {
	menu.style.display = 'flex';
	headerDiv.style.display = 'flex';
	helpers.style.display = 'none';
	settingsBtn.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};
*/
settingsMenuBtn.onclick = function() {
	exitSettings();
};

function exitSettings() {
	menu.style.display = 'flex';
	headerDiv.style.display = 'flex';
	settings.style.display = 'none';
	settingsMenuBtn.style.visibility = 'collapse';
	settingsBtn.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};
});
