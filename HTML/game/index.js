document.addEventListener('DOMContentLoaded', function()     {
document.addEventListener("keydown", handleMovement);
document.addEventListener("keyup", handleStop);

const player = document.getElementById("player");
const pointer = document.getElementById("pointer");
const projectile = document.getElementsByClassName("projectile");
const projectile1 = document.getElementById("projectile1");
const projectile2 = document.getElementById("projectile2");
const projectile3 = document.getElementById("projectile3");
const game = document.getElementById("game");

const height = window.innerHeight;
const width = window.innerWidth;
let up = 0;
let left = 0;
let upProjectile1 = 0;
let leftProjectile1 = 0;
let upProjectile2 = 0;
let leftProjectile2 = 0;
let upProjectile3 = 0;
let leftProjectile3 = 0;
let w = false;
let s = false;
let a = false;
let d = false;
let f = false;
let aup = false;
let aright = false;
let adown = false;
let aleft = false;
let speed = setInterval(function() {
	moveUp();
	moveDown();
	moveLeft();
	moveRight()
	}
	, 3);
let shootingSpeed = setInterval(shoot, 300);
let aim = 1;
let whichFire = 1;
let projectileSpeed = setInterval(function() {
	fire1();
	fire2();
	fire3();
	}
	, 1);
let fireProjectile1 = false;
let fireProjectile2 = false;
let fireProjectile3 = false;
let aim1 = 0;
let aim2 = 0;
let aim3 = 0;

function handleMovement(event) {
	if (game.style.display = "inline") {
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
		} else if ((event.key === "f" || event.key === "F")) {
			event.preventDefault();
			f = true;
			shoot();
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			aup = true;
			if (aleft == false && aright == false) {
				event.preventDefault();
				aim = 1;
				aimPointer();
			} else if (aright == true && aup == true) {
				event.preventDefault();
				aim = 5;
				aimPointer();
			} else if (aleft == true && aup == true) {
				event.preventDefault();
				aim = 8;
				aimPointer();
			}
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			aright = true;
			if (aup == false && adown == false) {
				event.preventDefault();
				aim = 2;
				aimPointer();
			} else if (aright == true && aup == true) {
				event.preventDefault();
				aim = 5;
				aimPointer();
			} else if (aright == true && adown == true) {
				event.preventDefault();
				aim = 6;
				aimPointer();
			} 
		} else if (event.key === "ArrowDown") {
			event.preventDefault();
			adown = true;
			if (aleft == false && aright == false) {
				event.preventDefault();
				aim = 3;
				aimPointer();
			} else if (aright == true && adown == true) {
				event.preventDefault();
				aim = 6;
				aimPointer();
			} else if (aleft == true && adown == true) {
				event.preventDefault();
				aim = 7;
				aimPointer();
			}
		} else if (event.key === "ArrowLeft") {
			event.preventDefault();
			aleft = true;
			if (aup == false && adown == false) {
				aim = 4;
				aimPointer();
			} else if (aleft == true && aup == true) {
				event.preventDefault();
				aim = 8;
				aimPointer();
			} else if (aleft == true && adown == true) {
				event.preventDefault();
				aim = 7;
				aimPointer();
			}
		}
	}
};

function handleStop(event) {
	if ((event.key === "w" || event.key === "W")) {
		event.preventDefault();
		w = false;
	} else if (event.key === "s" || event.key === "S") {
		event.preventDefault();
		s = false;
	} else if ((event.key === "a" || event.key === "A")) {
		event.preventDefault();
		a = false;
	} else if ((event.key === "d" || event.key === "D")) {
		event.preventDefault();
		d = false;
	} else if ((event.key === "f" || event.key === "F")) {
		event.preventDefault();
		f = false;
	} else if (event.key === "ArrowUp") {
		event.preventDefault();
		aup = false;
	} else if (event.key === "ArrowRight") {
		event.preventDefault();
		aright = false;
	} else if (event.key === "ArrowDown") {
		event.preventDefault();
		adown = false;
	} else if (event.key === "ArrowLeft") {
		event.preventDefault();
		aleft = false;
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

function projectileIsFired() {
	if (fireProjectile1 === false) {
		whichFire = 1;
	} else if (fireProjectile2 === false) {
		whichFire = 2;
	} else if (fireProjectile3 === false) {
		whichFire = 3;
	} else {
		whichFire = 0;
	}
};

function shoot() {
	if (f == true) {
		projectileIsFired();
		switch (aim) {
			case 1:
				if (whichFire == 1) {
					projectile1.style.top = (up - 50) + "px";
					projectile1.style.left = (left + 23) + "px";
					upProjectile1 = up - 50;
					leftProjectile1 = left + 23;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up - 50) + "px";
					projectile2.style.left = (left + 23) + "px";
					upProjectile2 = up - 50;
					leftProjectile2 = left + 23;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up - 50) + "px";
					projectile3.style.left = (left + 23) + "px";
					upProjectile3 = up - 50;
					leftProjectile3 = left + 23;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 2:
				if (whichFire == 1) {
					projectile1.style.top = (up + 15) + "px";
					projectile1.style.left = (left + 85) + "px";
					upProjectile1 = up + 15;
					leftProjectile1 = left + 85;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up + 15) + "px";
					projectile2.style.left = (left + 85) + "px";
					upProjectile2 = up + 15;
					leftProjectile2 = left + 85;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up + 15) + "px";
					projectile3.style.left = (left + 85) + "px";
					upProjectile3 = up + 15;
					leftProjectile3 = left + 85;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 3:
				if (whichFire == 1) {
					projectile1.style.top = (up + 80) + "px";
					projectile1.style.left = (left + 23) + "px";
					upProjectile1 = up + 80;
					leftProjectile1 = left + 23;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up + 80) + "px";
					projectile2.style.left = (left + 23) + "px";
					upProjectile2 = up + 80;
					leftProjectile2 = left + 23;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up + 80) + "px";
					projectile3.style.left = (left + 23) + "px";
					upProjectile3 = up + 80;
					leftProjectile3 = left + 23;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 4:
				if (whichFire == 1) {
					projectile1.style.top = (up + 15) + "px";
					projectile1.style.left = (left - 45) + "px";
					upProjectile1 = up + 15;
					leftProjectile1 = left - 45;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up + 15) + "px";
					projectile2.style.left = (left - 45) + "px";
					upProjectile2 = up + 15;
					leftProjectile2 = left - 45;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up + 15) + "px";
					projectile3.style.left = (left - 45) + "px";
					upProjectile3 = up + 15;
					leftProjectile3 = left - 45;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 5:
				if (whichFire == 1) {
					projectile1.style.top = (up - 50) + "px";
					projectile1.style.left = (left + 85) + "px";
					upProjectile1 = up - 50;
					leftProjectile1 = left + 85;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up - 50) + "px";
					projectile2.style.left = (left + 85) + "px";
					upProjectile2 = up - 50;
					leftProjectile2 = left + 85;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up - 50) + "px";
					projectile3.style.left = (left + 85) + "px";
					upProjectile3 = up - 50;
					leftProjectile3 = left + 85;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 6:
				if (whichFire == 1) {
					projectile1.style.top = (up + 80) + "px";
					projectile1.style.left = (left + 85) + "px";
					upProjectile1 = up + 80;
					leftProjectile1 = left + 85;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up - 80) + "px";
					projectile2.style.left = (left + 85) + "px";
					upProjectile2 = up + 80;
					leftProjectile2 = left + 85;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up - 80) + "px";
					projectile3.style.left = (left + 85) + "px";
					upProjectile3 = up + 80;
					leftProjectile3 = left + 85;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 7:
				if (whichFire == 1) {
					projectile1.style.top = (up + 80) + "px";
					projectile1.style.left = (left - 45) + "px";
					upProjectile1 = up + 80;
					leftProjectile1 = left - 45;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up + 80) + "px";
					projectile2.style.left = (left - 45) + "px";
					upProjectile2 = up + 80;
					leftProjectile2 = left - 45;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up + 80) + "px";
					projectile3.style.left = (left - 45) + "px";
					upProjectile3 = up + 80;
					leftProjectile3 = left - 45;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
			case 8:
				if (whichFire == 1) {
					projectile1.style.top = (up - 50) + "px";
					projectile1.style.left = (left - 45) + "px";
					upProjectile1 = up - 50;
					leftProjectile1 = left - 45;
					projectile1.style.visibility = "visible";
					fireProjectile1 = true;
					aim1 = aim;
					fire1();
				} else if (whichFire == 2) {
					projectile2.style.top = (up - 50) + "px";
					projectile2.style.left = (left - 45) + "px";
					upProjectile2 = up - 50;
					leftProjectile2 = left - 45;
					projectile2.style.visibility = "visible";
					fireProjectile2 = true;
					aim2 = aim;
					fire2();
				} else if (whichFire == 3) {
					projectile3.style.top = (up - 50) + "px";
					projectile3.style.left = (left - 45) + "px";
					upProjectile3 = up - 50;
					leftProjectile3 = left - 45;
					projectile3.style.visibility = "visible";
					fireProjectile3 = true;
					aim3 = aim;
					fire3();
				}
				break;
		}
	}
};

function fire1() {
	if (fireProjectile1 == true) {
		switch (aim1) {
			case 1:
				if (upProjectile1 > 0) {
					upProjectile1 -= 2;
					projectile1.style.top = upProjectile1 + "px";
				} else if (upProjectile1 <= 0) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 2:
				if (leftProjectile1 < width) {
					leftProjectile1 += 2;
					projectile1.style.left = leftProjectile1 + "px";
				} else if (leftProjectile1 >= width) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 3:
				if (upProjectile1 < height) {
					upProjectile1 += 2;
					projectile1.style.top = upProjectile1 + "px";
				} else if (upProjectile1 >= height) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 4:
				if (leftProjectile1 > 0) {
					leftProjectile1 -= 2;
					projectile1.style.left = leftProjectile1 + "px";
				} else if (leftProjectile1 <= 0) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 5:
				if (upProjectile1 > 0 && leftProjectile1 < width) {
					upProjectile1 -= 2;
					leftProjectile1 += 2;
					projectile1.style.top = upProjectile1 + "px";
					projectile1.style.left = leftProjectile1 + "px";
				} else if (upProjectile1 <= 0 || leftProjectile1 >= width) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 6:
				if (upProjectile1 < height && leftProjectile1 < width) {
					upProjectile1 += 2;
					leftProjectile1 += 2
					projectile1.style.top = upProjectile1 + "px";
					projectile1.style.left = leftProjectile1 + "px";
				} else if (upProjectile1 >= height || leftProjectile1 >= width) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 7:
				if (upProjectile1 < height && leftProjectile1 > 0) {
					upProjectile1 += 2;
					leftProjectile1 -= 2;
					projectile1.style.top = upProjectile1 + "px";
					projectile1.style.left = leftProjectile1 + "px";
				} else if (upProjectile1 >= height || leftProjectile1 <= 0) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
			case 8:
				if (upProjectile1 > 0 && leftProjectile1 > 0) {
					upProjectile1 -= 2;
					leftProjectile1 -= 2;
					projectile1.style.top = upProjectile1 + "px";
					projectile1.style.left = leftProjectile1 + "px";
				} else if (upProjectile1 <= 0 || leftProjectile1 <= 0) {
					projectile1.style.visibility = "hidden";
					fireProjectile1 = false;
					upProjectile1 = 0;
					leftProjectile1 = 0;
				}
				break;
		}
	}
};

function fire2() {
	if (fireProjectile2 == true) {
		switch (aim2) {
			case 1:
				if (upProjectile2 > 0) {
					upProjectile2 -= 2;
					projectile2.style.top = upProjectile2 + "px";
				} else if (upProjectile2 <= 0) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 2:
				if (leftProjectile2 < width) {
					leftProjectile2 += 2;
					projectile2.style.left = leftProjectile2 + "px";
				} else if (leftProjectile2 >= width) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 3:
				if (upProjectile2 < height) {
					upProjectile2 += 2;
					projectile2.style.top = upProjectile2 + "px";
				} else if (upProjectile2 >= height) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 4:
				if (leftProjectile2 > 0) {
					leftProjectile2 -= 2;
					projectile2.style.left = leftProjectile2 + "px";
				} else if (leftProjectile2 <= 0) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 5:
				if (upProjectile2 > 0 && leftProjectile2 < width) {
					upProjectile2 -= 2;
					leftProjectile2 += 2;
					projectile2.style.top = upProjectile2 + "px";
					projectile2.style.left = leftProjectile2 + "px";
				} else if (upProjectile2 <= 0 || leftProjectile2 >= width) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 6:
				if (upProjectile2 < height && leftProjectile2 < width) {
					upProjectile2 += 2;
					leftProjectile2 += 2
					projectile2.style.top = upProjectile2 + "px";
					projectile2.style.left = leftProjectile2 + "px";
				} else if (upProjectile2 >= height || leftProjectile2 >= width) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 7:
				if (upProjectile2 < height && leftProjectile2 > 0) {
					upProjectile2 += 2;
					leftProjectile2 -= 2;
					projectile2.style.top = upProjectile2 + "px";
					projectile2.style.left = leftProjectile2 + "px";
				} else if (upProjectile2 >= height || leftProjectile2 <= 0) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
			case 8:
				if (upProjectile2 > 0 && leftProjectile2 > 0) {
					upProjectile2 -= 2;
					leftProjectile2 -= 2;
					projectile2.style.top = upProjectile2 + "px";
					projectile2.style.left = leftProjectile2 + "px";
				} else if (upProjectile2 <= 0 || leftProjectile2 <= 0) {
					projectile2.style.visibility = "hidden";
					fireProjectile2 = false;
					upProjectile2 = 0;
					leftProjectile2 = 0;
				}
				break;
		}
	}
};

function fire3() {
	if (fireProjectile3 == true) {
		switch (aim3) {
			case 1:
				if (upProjectile3 > 0) {
					upProjectile3 -= 2;
					projectile3.style.top = upProjectile3 + "px";
				} else if (upProjectile3 <= 0) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 2:
				if (leftProjectile3 < width) {
					leftProjectile3 += 2;
					projectile3.style.left = leftProjectile3 + "px";
				} else if (leftProjectile3 >= width) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 3:
				if (upProjectile3 < height) {
					upProjectile3 += 2;
					projectile3.style.top = upProjectile3 + "px";
				} else if (upProjectile3 >= height) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 4:
				if (leftProjectile3 > 0) {
					leftProjectile3 -= 2;
					projectile3.style.left = leftProjectile3 + "px";
				} else if (leftProjectile3 <= 0) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 5:
				if (upProjectile3 > 0 && leftProjectile3 < width) {
					upProjectile3 -= 2;
					leftProjectile3 += 2;
					projectile3.style.top = upProjectile3 + "px";
					projectile3.style.left = leftProjectile3 + "px";
				} else if (upProjectile3 <= 0 || leftProjectile3 >= width) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 6:
				if (upProjectile3 < height && leftProjectile3 < width) {
					upProjectile3 += 2;
					leftProjectile3 += 2
					projectile3.style.top = upProjectile3 + "px";
					projectile3.style.left = leftProjectile3 + "px";
				} else if (upProjectile3 >= height || leftProjectile3 >= width) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 7:
				if (upProjectile3 < height && leftProjectile3 > 0) {
					upProjectile3 += 2;
					leftProjectile3 -= 2;
					projectile3.style.top = upProjectile3 + "px";
					projectile3.style.left = leftProjectile3 + "px";
				} else if (upProjectile3 >= height || leftProjectile3 <= 0) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
			case 8:
				if (upProjectile3 > 0 && leftProjectile3 > 0) {
					upProjectile3 -= 2;
					leftProjectile3 -= 2;
					projectile3.style.top = upProjectile3 + "px";
					projectile3.style.left = leftProjectile3 + "px";
				} else if (upProjectile3 <= 0 || leftProjectile3 <= 0) {
					projectile3.style.visibility = "hidden";
					fireProjectile3 = false;
					upProjectile3 = 0;
					leftProjectile3 = 0;
				}
				break;
		}
	}
};
});
