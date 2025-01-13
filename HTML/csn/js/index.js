document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("keydown", keybinds);

const tabIndicatorSlots = document.getElementById("tabIndicatorSlots");
const tabIndicatorTable = document.getElementById("tabIndicatorTable");
const tabIndicatorVirtual = document.getElementById("tabIndicatorVirtual");
const chipsDisplay = document.getElementById("chipsDisplay");
const LeftArrow = document.getElementById("LeftArrow");
const RightArrow = document.getElementById("RightArrow");
const tabSlots = document.getElementById("tabSlots");
const tabTable = document.getElementById("tabTable");
const tabVirtual = document.getElementById("tabVirtual");
const blackjack = document.getElementById("blackjack");
const blackjackGame = document.getElementById("blackjackGame");

let currentTab = 1;
let centerLeft = tabSlots.getBoundingClientRect();
let chips = 5000;

function keybinds(event) {
	if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
		event.preventDefault();
		pageLeft();
	} else if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
		event.preventDefault();
		pageRight();
	}
};

function pageLeft() {
	switch (currentTab) {
		case 1:
			currentTab = 3;
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 1)";
			tabSlots.style.display = "none";
			tabVirtual.style.display = "flex";
			break;
		case 2:
			currentTab = 1;
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 1)";
			tabTable.style.display = "none";
			tabSlots.style.display = "flex";
			break;
		case 3:
			currentTab = 2;
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 1)";
			tabVirtual.style.display = "none";
			tabTable.style.display = "flex";
			break;
	}
};

function pageRight() {
	switch (currentTab) {
		case 1:
			currentTab = 2;
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 1)";
			tabSlots.style.display = "none";
			tabTable.style.display = "flex";
			break;
		case 2:
			currentTab = 3;
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 1)";
			tabTable.style.display = "none";
			tabVirtual.style.display = "flex";
			break;
		case 3:
			currentTab = 1;
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 1)";
			tabVirtual.style.display = "none";
			tabSlots.style.display = "flex";
			break;
	}
};

blackjack.onclick = function() {
	blackjackGame.style.display = "flex";
};

LeftArrow.onclick = function() {
	pageLeft();
};

RightArrow.onclick = function() {
	pageRight();
};
});
