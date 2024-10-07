document.addEventListener('DOMContentLoaded', function()     {
document.addEventListener("keydown", handleMovement);
document.addEventListener("keyup", handleStop);

const body = document.getElementById("html");
const player = document.getElementById("player");

const height = screen.height;
const width = screen.width;
let up = 0;
let left = 0;
let w = false;
let s = false;
let a = false;
let d = false;
let speed = setInterval(function() {
	moveUp();
	moveDown();
	moveLeft();
	moveRight()
	}
	, 5);

function handleMovement(event) {
	if ((event.key === "w" || event.key === "W")) {
		event.preventDefault();
		w = true;
		moveUp();
	} else if ((event.key === "s" || event.key === "S")) {
		event.preventDefault();
		s = true;
		moveDown();
	}	else if ((event.key === "a" || event.key === "A")) {
		event.preventDefault();
		a = true;
		moveLeft();
	} else if ((event.key === "d" || event.key === "D")) {
		event.preventDefault();
		d = true;
		moveRight();
	}
};

function handleStop(event) {
	if ((event.key === "w" || event.key === "W")) {
		event.preventDefault();
		w = false;
	} else if ((event.key === "s" || event.key === "S")) {
		event.preventDefault();
		s = false;
	} else if ((event.key === "a" || event.key === "A")) {
		event.preventDefault();
		a = false;
	} else if ((event.key === "d" || event.key === "D")) {
		d = false;
	}
};

function moveUp() {
	if (up > 0 && w == true) {
		up -= 1;
		player.style.top = up + "px";
	}
};

function moveDown() {
	if (up < height && s == true) {
		up += 1;
		player.style.top = up + "px";
	}
};

function moveLeft() {
	if (left > 0 && a == true) {
		left -= 1;
		player.style.left = left + "px";
	}
};

function moveRight() {
	if (left < width && d == true) {
		left += 1;
		player.style.left = left + "px";
	}
};
});
