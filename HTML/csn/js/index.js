document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("keydown", keybinds);

const tabIndicatorSlots = document.getElementById("tabIndicatorSlots");
const tabIndicatorCards = document.getElementById("tabIndicatorCards");
const tabIndicatorVirtual = document.getElementById("tabIndicatorVirtual");
const chipsCounter = document.getElementById("chipsCounter");
const LeftArrow = document.getElementById("LeftArrow");
const RightArrow = document.getElementById("RightArrow");
const tabSlots = document.getElementById("tabSlots");
const tabTable = document.getElementById("tabTable");
const tabVirtual = document.getElementById("tabVirtual");

let currentTab = 1;
let centerLeft = tabSlots.getBoundingClientRect();

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
			console.log(centerLeft.left);
			break;
		case 2:

			break;
		case 3:

			break;
	}
};

function pageRight() {
	switch (currentTab) {
		case 1:

			break;
		case 2:

			break;
		case 3:

			break;
	}
};
});
