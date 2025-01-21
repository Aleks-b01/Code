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
const exitBlackjack = document.getElementById("exitBlackjack");

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
	} else if (event.key === "Escape" && blackjackGame.style.display == "flex") {
		event.preventDefault();
		ExitBlackjack();
	}
};

function pageLeft() {
	switch (currentTab) {
		case 1:
			currentTab = 3;
			break;
		case 2:
			currentTab = 1;
			break;
		case 3:
			currentTab = 2;
			break;
	}
	pageCurrent();
};

function pageRight() {
	switch (currentTab) {
		case 1:
			currentTab = 2;
			break;
		case 2:
			currentTab = 3;
			break;
		case 3:
			currentTab = 1;
			break;
	}
	pageCurrent();
};

function pageCurrent() {
	switch (currentTab) {
		case 1:
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 1)";
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 0.3)";
			tabSlots.style.display = "flex";
			tabTable.style.display = "none";
			tabVirtual.style.display = "none";
			break;
		case 2:
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 1)";
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 0.3)";
			tabTable.style.display = "flex";
			tabSlots.style.display = "none";
			tabVirtual.style.display = "none";
			break;
		case 3:
			tabIndicatorVirtual.style.background = "rgba(255, 255, 255, 1)";
			tabIndicatorSlots.style.background = "rgba(255, 255, 255, 0.3)";
			tabIndicatorTable.style.background = "rgba(255, 255, 255, 0.3)";
			tabVirtual.style.display = "flex";
			tabSlots.style.display = "none";
			tabTable.style.display = "none";
			break;
	}
};

blackjack.onclick = function() {
	blackjackGame.style.display = "flex";
};

exitBlackjack.onclick = function() {
	ExitBlackjack();
};

function ExitBlackjack() {
	currentTab = 2;
	pageCurrent();
	blackjackGame.style.display = "none";
};

LeftArrow.onclick = function() {
	pageLeft();
};

RightArrow.onclick = function() {
	pageRight();
};
});
