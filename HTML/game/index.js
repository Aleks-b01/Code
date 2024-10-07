document.addEventListener('DOMContentLoaded', function()     {
document.addEventListener("keydown", handleMovement);
document.addEventListener("keyup", handleStop);

const body = document.getElementById("html");
const player = document.getElementById("player");
const pointer = document.getElementById("pointer");

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
let aim = 1;

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
	} else if (event.key === "ArrowUp" && (event.key !== "ArrowLeft" || event.key !== "ArrowRight")) {
		event.preventDefault();
		aim = 1;
		aimPointer();
	} else if (event.key === "ArrowDown" && (event.key !== "ArrowLeft" || event.key !== "ArrowRight")) {
		event.preventDefault();
		aim = 3;
		aimPointer();
	} else if (event.key === "ArrowLeft" && (event.key !== "ArrowUp" || event.key !== "ArrowDown")) {
		event.preventDefault();
		aim = 4;
		aimPointer();
	} else if (event.key === "ArrowRight" && (event.key !== "ArrowUp" || event.key !== "ArrowDown")) {
		event.preventDefault();
		aim = 2;
		aimPointer();
	} else if (event.key === "ArrowUp" && event.key === "ArrowRight") {
		event.preventDefault();
		aim = 5;
		aimPointer();
	} else if (event.key === "ArrowDown" && event.key === "ArrowRight") {
		event.preventDefault();
		aim = 6;
		aimPointer();
	} else if (event.key === "ArrowDown" && event.key === "ArrowLeft") {
		event.preventDefault();
		aim = 7;
		aimPointer();
	} else if (event.key === "ArrowUp" && event.key === "ArrowLeft") {
		event.preventDefault();
		aim = 8;
		aimPointer();
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
		aimPointer();
	}
};

function moveDown() {
	if (up < height && s == true) {
		up += 1;
		player.style.top = up + "px";
		aimPointer();
	}
};

function moveLeft() {
	if (left > 0 && a == true) {
		left -= 1;
		player.style.left = left + "px";
		aimPointer();
	}
};

function moveRight() {
	if (left < width && d == true) {
		left += 1;
		player.style.left = left + "px";
		aimPointer();
	}
};

function aimPointer() {
	if (aim == 1) {
		pointer.style.rotate = "0deg";
		pointer.style.top = (up - 50) + "px";
		pointer.style.left = (left + 23) + "px";
	} else if (aim == 2) {
		pointer.style.rotate = "90deg";
		pointer.style.top = (up + 15) + "px";
		pointer.style.left = (left + 85) + "px";
	} else if (aim == 3) {
		pointer.style.rotate = "0deg";
		pointer.style.top = (up + 80) + "px";
		pointer.style.left = (left + 23) + "px";
	} else if (aim == 4) {
		pointer.style.rotate = "90deg";
		pointer.style.top = (up + 15) + "px";
		pointer.style.left = (left - 45) + "px";
	} else if (aim == 5) {
		pointer.style.rotate = "45deg";
		pointer.style.top = (up - 50) + "px";
		pointer.style.left = (left + 85) + "px";
	}	else if (aim == 6) {
		pointer.style.rotate = "135deg";
		pointer.style.top = (up + 80) + "px";
		pointer.style.left = (left + 85) + "px";
	}	else if (aim == 7) {
		pointer.style.rotate = "45deg";
		pointer.style.top = (up + 80) + "px";
		pointer.style.left = (left - 45) + "px";
	} else if (aim == 8) {
		pointer.style.rotate = "135deg";
		pointer.style.top = (up - 50) + "px";
		pointer.style.left = (left - 45) + "px";
	}
};

});
