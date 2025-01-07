document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const scrambleEvent = document.getElementsByClassName('scrambleEvent');
const nextScramble = document.getElementById('nextScramble');
const scrambleSelect = document.getElementById('scrambleSelect');
const scrambleSelectBtn = document.getElementById('scrambleSelectBtn');
const e222 = document.getElementById('e222');
const e333 = document.getElementById('e333');
const e444 = document.getElementById('e444');
const e555 = document.getElementById('e555');
const e666 = document.getElementById('e666');
const e777 = document.getElementById('e777');
const e3oh = document.getElementById('e3oh');
const e3bld = document.getElementById('e3bld');
const e3fm = document.getElementById('e3fm');
const e3mbld = document.getElementById('e3mbld');
const epyra = document.getElementById('epyra');
const eskewb = document.getElementById('eskewb');
const esq1 = document.getElementById('esq1');
const emgmx = document.getElementById('emgmx');
const eclock = document.getElementById('eclock');
const e4bld = document.getElementById('e4bld');
const e5bld = document.getElementById('e5bld');

let currentEvent = 3; // NxN = N | 3OH, 3BLD, 3FM, 3MBLD = 33, 333, 3333, 33333 | Pyra, Skewb, Sq1, Mega, Clock = 10, 11, 12, 13, 14 | 4BLD, 5BLD = 444, 555
let currentScramble;
let temp;
let len;
let m1; // 1, 2 ,3 ,4 ,5 ,6 = U, D, R, L, F, B
let m2; // 1, 2, 3 = Normal, ', 2

function handleShortcut(event) {
	if ((event.key === " " || event.key === "Enter")) {
		event.preventDefault();
		scramble();
	}
};

function scramble2() {
	len = Math.floor(Math.random() * 4) + 8;
	m1 = Math.floor(Math.random() * 3) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 == 1 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 3) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 == 1) {
		currentScramble = "R";
	} else if (m1 == 2 && m2 == 2) {
		currentScramble = "R'";
	} else if (m1 == 2 && m2 == 3) {
		currentScramble = "R2";
	} else if (m1 == 3 && m2 == 1) {
		currentScramble = "F";
	} else if (m1 == 3 && m2 == 2) {
		currentScramble = "F'";
	} else if (m1 == 3 && m2 == 3) {
		currentScramble = "F2";
	}
	len--;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 2) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " R";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " R'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " R2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " F";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " F'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " F2";
					m1 = 3;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 2) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " F";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " F'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " F2";
					m1 = 3;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 2) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble3() {
	len = Math.floor(Math.random() * 5) + 17;
	m1 = Math.floor(Math.random() * 6) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 == 1 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 3) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 == 1) {
		currentScramble = "D";
	} else if (m1 == 2 && m2 == 2) {
		currentScramble = "D'";
	} else if (m1 == 2 && m2 == 3) {
		currentScramble = "D2";
	} else if (m1 == 3 && m2 == 1) {
		currentScramble = "R";
	} else if (m1 == 3 && m2 == 2) {
		currentScramble = "R'";
	} else if (m1 == 3 && m2 == 3) {
		currentScramble = "R2";
	} else if (m1 == 4 && m2 == 1) {
		currentScramble = "L";
	} else if (m1 == 4 && m2 == 2) {
		currentScramble = "L'";
	} else if (m1 == 4 && m2 == 3) {
		currentScramble = "L2";
	} else if (m1 == 5 && m2 == 1) {
		currentScramble = "F";
	} else if (m1 == 5 && m2 == 2) {
		currentScramble = "F'";
	} else if (m1 == 5 && m2 == 3) {
		currentScramble = "F2";
	} else if (m1 == 6 && m2 == 1) {
		currentScramble = "B";
	} else if (m1 == 6 && m2 == 2) {
		currentScramble = "B'";
	} else if (m1 == 6 && m2 == 3) {
		currentScramble = "B2";
	}
	len--;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble3DR() {
	len = Math.floor(Math.random() * 2) + 8;
	m1 = Math.floor(Math.random() * 6) + 1;
	m2 = Math.floor(Math.random() * 7) + 1;
	if (m1 == 1 && m2 < 4) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 < 7 && m2 > 3) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 7) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 < 4) {
		currentScramble = "D";
	} else if (m1 == 2 && m2 < 7 && m2 > 3) {
		currentScramble = "D'";
	} else if (m1 == 2 && m2 == 7) {
		currentScramble = "D2";
	} else if (m1 == 3) {
		currentScramble = "R2";
	} else if (m1 == 4) {
		currentScramble = "L2";
	} else if (m1 == 5) {
		currentScramble = "F2";
	} else if (m1 == 6) {
		currentScramble = "B2";
	}
	while (len > 0) {
		m2 = Math.floor(Math.random() * 7) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " U2";
				} else if (m1 == 2) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 < 4) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 < 7 && m2 > 3) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 7) {
					currentScramble += " D2";
				} else if (m1 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 < 4) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 < 7 && m2 > 3) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 7) {
					currentScramble += " D2";
				} else if (m1 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 < 4) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 < 7 && m2 > 3) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 7) {
					currentScramble += " D2";
				} else if (m1 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4) {
					currentScramble += " L2";
				} else if (m1 == 5) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 < 4) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 < 7 && m2 > 3) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 7) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 < 4) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 < 7 && m2 > 3) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 7) {
					currentScramble += " D2";
				} else if (m1 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4) {
					currentScramble += " L2";
				} else if (m1 == 5) {
					currentScramble += " F2";
				}
				break;
		}
		len--;
	}
	len = Math.floor(Math.random() * 5) + 8;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble3ADR() {
	len = Math.floor(Math.random() * 2) + 8;
	m1 = Math.floor(Math.random() * 6) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	temp = Math.floor(Math.random() * 3) + 1;
	if (temp == 1) {
		if (m1 == 1 && m2 < 4) {
			currentScramble = "U";
		} else if (m1 == 1 && m2 < 7 && m2 > 3) {
			currentScramble = "U'";
		} else if (m1 == 1 && m2 == 7) {
			currentScramble = "U2";
		} else if (m1 == 2 && m2 < 4) {
			currentScramble = "D";
		} else if (m1 == 2 && m2 < 7 && m2 > 3) {
			currentScramble = "D'";
		} else if (m1 == 2 && m2 == 7) {
			currentScramble = "D2";
		} else if (m1 == 3) {
			currentScramble = "R2";
		} else if (m1 == 4) {
			currentScramble = "L2";
		} else if (m1 == 5) {
			currentScramble = "F2";
		} else if (m1 == 6) {
			currentScramble = "B2";
		}
		while (len > 0) {
			m2 = Math.floor(Math.random() * 7) + 1;
			switch (m1) {
				case 1:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " D";
						m1 = 2;
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " D'";
						m1 = 2;
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " D2";
						m1 = 2;
					} else if (m1 == 2) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 2:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " U";
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " U'";
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 3:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " U";
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " U'";
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " U2";
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " D";
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " D'";
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 4:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " U";
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " U'";
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " U2";
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " D";
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " D'";
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 5:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " U";
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " U'";
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " U2";
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " D";
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " D'";
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " L2";
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 6:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1 && m2 < 4) {
						currentScramble += " U";
					} else if (m1 == 1 && m2 < 7 && m2 > 3) {
						currentScramble += " U'";
					} else if (m1 == 1 && m2 == 7) {
						currentScramble += " U2";
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " D";
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " D'";
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " L2";
					} else if (m1 == 5) {
						currentScramble += " F2";
					}
					break;
			}
			len--;
		}
	} else if (temp == 2) {
		if (m1 == 1) {
			currentScramble = "U2";
		} else if (m1 == 2) {
			currentScramble = "D2";
		} else if (m1 == 3 && m2 < 4) {
			currentScramble = "R";
		} else if (m1 == 3 && m2 < 7 && m2 > 3) {
			currentScramble = "R'";
		} else if (m1 == 3 && m2 == 7) {
			currentScramble = "R2";
		} else if (m1 == 4 && m2 < 4) {
			currentScramble = "L";
		} else if (m1 == 4 && m2 < 7 && m2 > 3) {
			currentScramble = "L'";
		} else if (m1 == 4 && m2 == 7) {
			currentScramble = "L2";
		} else if (m1 == 5) {
			currentScramble = "F2";
		} else if (m1 == 6) {
			currentScramble = "B2";
		}
		while (len > 0) {
			m2 = Math.floor(Math.random() * 7) + 1;
			switch (m1) {
				case 1:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " D2";
						m1 = 2;
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " R";
						m1 = 3;
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " R'";
						m1 = 3;
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " L";
						m1 = 4;
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " L'";
						m1 = 4;
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m2 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 2:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2 && m2 < 4) {
						currentScramble += " R";
						m1 = 3;
					} else if (m1 == 2 && m2 < 7 && m2 > 3) {
						currentScramble += " R'";
						m1 = 3;
					} else if (m1 == 2 && m2 == 7) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " L";
						m1 = 4;
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " L'";
						m1 = 4;
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m2 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 3:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " L";
						m1 = 4;
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " L'";
						m1 = 4;
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4) {
						currentScramble += " F2";
						m2 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 4:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " R";
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " R'";
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " F2";
						m2 = 5;
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 5:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " R";
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " R'";
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " R2";
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " L";
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " L'";
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " L2";
					} else if (m1 == 5) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 6:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3 && m2 < 4) {
						currentScramble += " R";
					} else if (m1 == 3 && m2 < 7 && m2 > 3) {
						currentScramble += " R'";
					} else if (m1 == 3 && m2 == 7) {
						currentScramble += " R2";
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " L";
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " L'";
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " L2";
					} else if (m1 == 5) {
						currentScramble += " F2";
					}
					break;
			}
			len--;
		}
	} else if (temp == 3) {
		if (m1 == 1) {
			currentScramble = "U2";
		} else if (m1 == 2) {
			currentScramble = "D2";
		} else if (m1 == 3) {
			currentScramble = "R2";
		} else if (m1 == 4) {
			currentScramble = "L2";
		} else if (m1 == 5 && m2 < 4) {
			currentScramble = "F";
		} else if (m1 == 5 && m2 < 7 && m2 > 3) {
			currentScramble = "F'";
		} else if (m1 == 5 && m2 == 7) {
			currentScramble = "F2";
		} else if (m1 == 6 && m2 < 4) {
			currentScramble = "B";
		} else if (m1 == 6 && m2 < 7 && m2 > 3) {
			currentScramble = "B'";
		} else if (m1 == 6 && m3 == 7) {
			currentScramble = "B2";
		}
		while (len > 0) {
			m2 = Math.floor(Math.random() * 7) + 1;
			switch (m1) {
				case 1:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " D2";
						m1 = 2;
					} else if (m1 == 2) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " F";
						m1 = 5;
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " F'";
						m1 = 5;
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " B";
						m1 = 6;
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " B'";
						m1 = 6;
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 2:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " R2";
						m1 = 3;
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " F";
						m1 = 5;
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " F'";
						m1 = 5;
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " B";
						m1 = 6;
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " B'";
						m1 = 6;
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 3:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " L2";
						m1 = 4;
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " F";
						m1 = 5;
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " F'";
						m1 = 5;
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " B";
						m1 = 6;
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " B'";
						m1 = 6;
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
					case 4:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4 && m2 < 4) {
						currentScramble += " F";
						m1 = 5;
					} else if (m1 == 4 && m2 < 7 && m2 > 3) {
						currentScramble += " F'";
						m1 = 5;
					} else if (m1 == 4 && m2 == 7) {
						currentScramble += " F2";
						m1 = 5;
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " B";
						m1 = 6;
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " B'";
						m1 = 6;
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
					case 5:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " L2";
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " B";
						m1 = 6;
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " B'";
						m1 = 6;
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " B2";
						m1 = 6;
					}
					break;
				case 6:
					m1 = Math.floor(Math.random() * 5) + 1;
					if (m1 == 1) {
						currentScramble += " U2";
					} else if (m1 == 2) {
						currentScramble += " D2";
					} else if (m1 == 3) {
						currentScramble += " R2";
					} else if (m1 == 4) {
						currentScramble += " L2";
					} else if (m1 == 5 && m2 < 4) {
						currentScramble += " F";
					} else if (m1 == 5 && m2 < 7 && m2 > 3) {
						currentScramble += " F'";
					} else if (m1 == 5 && m2 == 7) {
						currentScramble += " F2";
					}
					break;
			}
			len--;
		}
	}
	len = Math.floor(Math.random() * 5) + 8;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble4() {
	len = Math.floor(Math.random() * 3) + 12;
	m1 = Math.floor(Math.random() * 6) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 == 1 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 3) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 == 1) {
		currentScramble = "D";
	} else if (m1 == 2 && m2 == 2) {
		currentScramble = "D'";
	} else if (m1 == 2 && m2 == 3) {
		currentScramble = "D2";
	} else if (m1 == 3 && m2 == 1) {
		currentScramble = "R";
	} else if (m1 == 3 && m2 == 2) {
		currentScramble = "R'";
	} else if (m1 == 3 && m2 == 3) {
		currentScramble = "R2";
	} else if (m1 == 4 && m2 == 1) {
		currentScramble = "L";
	} else if (m1 == 4 && m2 == 2) {
		currentScramble = "L'";
	} else if (m1 == 4 && m2 == 3) {
		currentScramble = "L2";
	} else if (m1 == 5 && m2 == 1) {
		currentScramble = "F";
	} else if (m1 == 5 && m2 == 2) {
		currentScramble = "F'";
	} else if (m1 == 5 && m2 == 3) {
		currentScramble = "F2";
	} else if (m1 == 6 && m2 == 1) {
		currentScramble = "B";
	} else if (m1 == 6 && m2 == 2) {
		currentScramble = "B'";
	} else if (m1 == 6 && m2 == 3) {
		currentScramble = "B2";
	}
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 5) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				}
				break;
		}
		len--;
	}
	len = Math.floor(Math.random() * 5) + 27;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " D";
					m1 = 2;
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " D'";
					m1 = 2;
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " D2";
					m1 = 2;
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 2:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " R";
					m1 = 3;
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " R'";
					m1 = 3;
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " R2";
					m1 = 3;
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 3:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " L";
					m1 = 4;
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " L'";
					m1 = 4;
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " L2";
					m1 = 4;
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 4:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " F";
					m1 = 5;
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " F'";
					m1 = 5;
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " F2";
					m1 = 5;
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 5:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " B";
					m1 = 6;
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " B'";
					m1 = 6;
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " B2";
					m1 = 6;
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 6:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 7;
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 7;
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 7;
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 7:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " B";
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " B'";
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 8;
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 8;
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 8;
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 8:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " B";
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " B'";
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Uw";
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Uw'";
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Uw2";
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 9;
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 9;
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 9;
				}
				break;
			case 9:
				m1 = Math.floor(Math.random() * 8) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 == 1 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 == 1 && m2 == 3) {
					currentScramble += " U2";
				} else if (m1 == 2 && m2 == 1) {
					currentScramble += " D";
				} else if (m1 == 2 && m2 == 2) {
					currentScramble += " D'";
				} else if (m1 == 2 && m2 == 3) {
					currentScramble += " D2";
				} else if (m1 == 3 && m2 == 1) {
					currentScramble += " R";
				} else if (m1 == 3 && m2 == 2) {
					currentScramble += " R'";
				} else if (m1 == 3 && m2 == 3) {
					currentScramble += " R2";
				} else if (m1 == 4 && m2 == 1) {
					currentScramble += " L";
				} else if (m1 == 4 && m2 == 2) {
					currentScramble += " L'";
				} else if (m1 == 4 && m2 == 3) {
					currentScramble += " L2";
				} else if (m1 == 5 && m2 == 1) {
					currentScramble += " F";
				} else if (m1 == 5 && m2 == 2) {
					currentScramble += " F'";
				} else if (m1 == 5 && m2 == 3) {
					currentScramble += " F2";
				} else if (m1 == 6 && m2 == 1) {
					currentScramble += " B";
				} else if (m1 == 6 && m2 == 2) {
					currentScramble += " B'";
				} else if (m1 == 6 && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 7 && m2 == 1) {
					currentScramble += " Uw";
				} else if (m1 == 7 && m2 == 2) {
					currentScramble += " Uw'";
				} else if (m1 == 7 && m2 == 3) {
					currentScramble += " Uw2";
				} else if (m1 == 8 && m2 == 1) {
					currentScramble += " Rw";
				} else if (m1 == 8 && m2 == 2) {
					currentScramble += " Rw'";
				} else if (m1 == 8 && m2 == 3) {
					currentScramble += " Rw2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble4RM() {
	len = Math.floor(Math.random() * 6) + 39;
	m1 = Math.floor(Math.random() * 15) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 < 3 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 < 3 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 < 3 && m2 == 3) {
		currentScramble = "U2";
	} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
		currentScramble = "D";
	} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
		currentScramble = "D'";
	} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
		currentScramble = "D2";
	} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
		currentScramble = "R";
	} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
		currentScramble = "R'";
	} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
		currentScramble = "R2";
	} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
		currentScramble = "L";
	} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
		currentScramble = "L'";
	} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
		currentScramble = "L2";
	} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
		currentScramble = "F";
	} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
		currentScramble = "F'";
	} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
		currentScramble = "F2";
	} else if ((m1 == 11 || m1 == 12) && m2 == 1) {
		currentScramble = "B";
	} else if ((m1 == 11 || m1 == 12) && m2 == 2) {
		currentScramble = "B'";
	} else if ((m1 == 11 || m1 == 12) && m2 == 3) {
		currentScramble = "B2";
	} else if (m1 == 13 && m2 == 1) {
		currentScramble = "Uw";
	} else if (m1 == 13 && m2 == 2) {
		currentScramble = "Uw'";
	} else if (m1 == 13 && m2 == 3) {
		currentScramble = "Uw2";
	} else if (m1 == 14 && m2 == 1) {
		currentScramble = "Rw";
	} else if (m1 == 14 && m2 == 2) {
		currentScramble = "Rw'";
	} else if (m1 == 14 && m2 == 3) {
		currentScramble = "Rw2";
	} else if (m1 == 15 && m2 == 1) {
		currentScramble = "Fw";
	} else if (m1 == 15 && m2 == 2) {
		currentScramble = "Fw'";
	} else if (m1 == 15 && m2 == 3) {
		currentScramble = "Fw2";
	}
	len--;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
			case 2:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " D";
					m1 = 3;
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " D'";
					m1 = 3;
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " D2";
					m1 = 3;
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " R";
					m1 = 5;
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " R'";
					m1 = 5;
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " R2";
					m1 = 5;
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " L";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " L'";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " L2";
					m1 = 7;
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " F";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " F'";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " F2";
					m1 = 9;
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " B";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " B'";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " B2";
					m1 = 11;
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 3:
			case 4:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " R";
					m1 = 5;
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " R'";
					m1 = 5;
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " R2";
					m1 = 5;
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " L";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " L'";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " L2";
					m1 = 7;
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " F";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " F'";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " F2";
					m1 = 9;
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " B";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " B'";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " B2";
					m1 = 11;
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 5:
			case 6:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " L";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " L'";
					m1 = 7;
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " L2";
					m1 = 7;
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " F";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " F'";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " F2";
					m1 = 9;
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " B";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " B'";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " B2";
					m1 = 11;
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 7:
			case 8:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " F";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " F'";
					m1 = 9;
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " F2";
					m1 = 9;
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " B";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " B'";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " B2";
					m1 = 11;
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 9:
			case 10:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " L";
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " L'";
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " L2";
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " B";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " B'";
					m1 = 11;
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " B2";
					m1 = 11;
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 11:
			case 12:
				m1 = Math.floor(Math.random() * 13) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " L";
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " L'";
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " L2";
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " F";
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " F'";
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " F2";
				} else if (m1 == 11 && m2 == 1) {
					currentScramble += " Uw";
					m1 = 13;
				} else if (m1 == 11 && m2 == 2) {
					currentScramble += " Uw'";
					m1 = 13;
				} else if (m1 == 11 && m2 == 3) {
					currentScramble += " Uw2";
					m1 = 13;
				} else if (m1 == 12 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 12 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 12 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 13:
				m1 = Math.floor(Math.random() * 14) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " L";
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " L'";
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " L2";
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " F";
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " F'";
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " F2";
				} else if ((m1 == 11 || m1 == 12) && m2 == 1) {
					currentScramble += " B";
				} else if ((m1 == 11 || m1 == 12) && m2 == 2) {
					currentScramble += " B'";
				} else if ((m1 == 11 || m1 == 12) && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Rw";
					m1 = 14;
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Rw'";
					m1 = 14;
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Rw2";
					m1 = 14;
				} else if (m1 == 14 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 14 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 14 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 14:
				m1 = Math.floor(Math.random() * 14) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " L";
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " L'";
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " L2";
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " F";
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " F'";
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " F2";
				} else if ((m1 == 11 || m1 == 12) && m2 == 1) {
					currentScramble += " B";
				} else if ((m1 == 11 || m1 == 12) && m2 == 2) {
					currentScramble += " B'";
				} else if ((m1 == 11 || m1 == 12) && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Uw";
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Uw'";
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Uw2";
				} else if (m1 == 14 && m2 == 1) {
					currentScramble += " Fw";
					m1 = 15;
				} else if (m1 == 14 && m2 == 2) {
					currentScramble += " Fw'";
					m1 = 15;
				} else if (m1 == 14 && m2 == 3) {
					currentScramble += " Fw2";
					m1 = 15;
				}
				break;
			case 15:
				m1 = Math.floor(Math.random() * 14) + 1;
				if (m1 < 3 && m2 == 1) {
					currentScramble += " U";
				} else if (m1 < 3 && m2 == 2) {
					currentScramble += " U'";
				} else if (m1 < 3 && m2 == 3) {
					currentScramble += " U2";
				} else if ((m1 == 3 || m1 == 4) && m2 == 1) {
					currentScramble += " D";
				} else if ((m1 == 3 || m1 == 4) && m2 == 2) {
					currentScramble += " D'";
				} else if ((m1 == 3 || m1 == 4) && m2 == 3) {
					currentScramble += " D2";
				} else if ((m1 == 5 || m1 == 6) && m2 == 1) {
					currentScramble += " R";
				} else if ((m1 == 5 || m1 == 6) && m2 == 2) {
					currentScramble += " R'";
				} else if ((m1 == 5 || m1 == 6) && m2 == 3) {
					currentScramble += " R2";
				} else if ((m1 == 7 || m1 == 8) && m2 == 1) {
					currentScramble += " L";
				} else if ((m1 == 7 || m1 == 8) && m2 == 2) {
					currentScramble += " L'";
				} else if ((m1 == 7 || m1 == 8) && m2 == 3) {
					currentScramble += " L2";
				} else if ((m1 == 9 || m1 == 10) && m2 == 1) {
					currentScramble += " F";
				} else if ((m1 == 9 || m1 == 10) && m2 == 2) {
					currentScramble += " F'";
				} else if ((m1 == 9 || m1 == 10) && m2 == 3) {
					currentScramble += " F2";
				} else if ((m1 == 11 || m1 == 12) && m2 == 1) {
					currentScramble += " B";
				} else if ((m1 == 11 || m1 == 12) && m2 == 2) {
					currentScramble += " B'";
				} else if ((m1 == 11 || m1 == 12) && m2 == 3) {
					currentScramble += " B2";
				} else if (m1 == 13 && m2 == 1) {
					currentScramble += " Uw";
				} else if (m1 == 13 && m2 == 2) {
					currentScramble += " Uw'";
				} else if (m1 == 13 && m2 == 3) {
					currentScramble += " Uw2";
				} else if (m1 == 14 && m2 == 1) {
					currentScramble += " Rw";
				} else if (m1 == 14 && m2 == 2) {
					currentScramble += " Rw'";
				} else if (m1 == 14 && m2 == 3) {
					currentScramble += " Rw2";
				}
				break;
		}
		len--;
	}
	scrambleText.innerText = currentScramble;
};

function scramble5() {
	len = Math.floor(Math.random() * 6) + 59;
	m1 = Math.floor(Math.random() * 12) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 == 1 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 3) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 == 1) {
		currentScramble = "D";
	} else if (m1 == 2 && m2 == 2) {
		currentScramble = "D'";
	} else if (m1 == 2 && m2 == 3) {
		currentScramble = "D2";
	} else if (m1 == 3 && m2 == 1) {
		currentScramble = "R";
	} else if (m1 == 3 && m2 == 2) {
		currentScramble = "R'";
	} else if (m1 == 3 && m2 == 3) {
		currentScramble = "R2";
	} else if (m1 == 4 && m2 == 1) {
		currentScramble = "L";
	} else if (m1 == 4 && m2 == 2) {
		currentScramble = "L'";
	} else if (m1 == 4 && m2 == 3) {
		currentScramble = "L2";
	} else if (m1 == 5 && m2 == 1) {
		currentScramble = "F";
	} else if (m1 == 5 && m2 == 2) {
		currentScramble = "F'";
	} else if (m1 == 5 && m2 == 3) {
		currentScramble = "F2";
	} else if (m1 == 6 && m2 == 1) {
		currentScramble = "B";
	} else if (m1 == 6 && m2 == 2) {
		currentScramble = "B'";
	} else if (m1 == 6 && m2 == 3) {
		currentScramble = "B2";
	} else if (m1 == 7 && m2 == 1) {
		currentScramble = "Uw";
	} else if (m1 == 7 && m2 == 2) {
		currentScramble = "Uw'";
	} else if (m1 == 7 && m2 == 3) {
		currentScramble = "Uw2";
	} else if (m1 == 8 && m2 == 1) {
		currentScramble = "Dw";
	} else if (m1 == 8 && m2 == 2) {
		currentScramble = "Dw'";
	} else if (m1 == 8 && m2 == 3) {
		currentScramble = "Dw2";
	} else if (m1 == 9 && m2 == 1) {
		currentScramble = "Rw";
	} else if (m1 == 9 && m2 == 2) {
		currentScramble = "Rw'";
	} else if (m1 == 9 && m2 == 3) {
		currentScramble = "Rw2";
	} else if (m1 == 10 && m2 == 1) {
		currentScramble = "Lw";
	} else if (m1 == 10 && m2 == 2) {
		currentScramble = "Lw'";
	} else if (m1 == 10 && m2 == 3) {
		currentScramble = "Lw2";
	} else if (m1 == 11 && m2 == 1) {
		currentScramble = "Fw";
	} else if (m1 == 11 && m2 == 2) {
		currentScramble = "Fw'";
	} else if (m1 == 11 && m2 == 3) {
		currentScramble = "Fw2";
	} else if (m1 == 12 && m2 == 1) {
		currentScramble = "Bw";
	} else if (m1 == 12 && m2 == 2) {
		currentScramble = "Bw'";
	} else if (m1 == 12 && m2 == 3) {
		currentScramble = "Bw2";
	}
	len--;
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
				m1 = Math.floor(Math.random() * 11) + 1;
				
		}
	}
};

function scramble() {
	switch (currentEvent) {
		case 2:
			scramble2();
			break;
		case 3:
			scramble3();
			break;
		case 4:
			scramble4();
			break;
		case 5:
			scramble5();
			break;
		case 6:
			scramble6();
			break;
		case 7:
			scramble7();
			break;
		case 33:
			scramble3();
			break;
		case 333:
			scramble3BLD();
			break;
		case 3333:
			scramble3FM();
			break;
		case 33333:
			scrambleMBLD();
			break;
		case 10:
			scramblePyra();
			break;
		case 11:
			scrambleSkewb();
			break;
		case 12:
			scrambleSq1();
			break;
		case 13:
			scrambleMega();
			break;
		case 14:
			scrambleClock();
			break;
		case 44:
			scramble4BLD();
			break;
		case 55:
			scramble5BLD();
			break;
	}
};

e222.onclick = function() {
	currentEvent = 2;
	scramble();
	scrambleSelect.style.display = "none";
};

e333.onclick = function() {
	currentEvent = 3;
	scramble();
	scrambleSelect.style.display = "none";
};

e444.onclick = function() {
	currentEvent = 4;
	scramble();
	scrambleSelect.style.display = "none";
};

e555.onclick = function() {
	currentEvent = 5;
	scramble();
	scrambleSelect.style.display = "none";
};

e666.onclick = function() {
	currentEvent = 6;
	scramble();
	scrambleSelect.style.display = "none";
};

e777.onclick = function() {
	currentEvent = 7;
	scramble();
	scrambleSelect.style.display = "none";
};

e3oh.onclick = function() {
	currentEvent = 33;
	scramble();
	scrambleSelect.style.display = "none";
};

e3bld.onclick = function() {
	currentEvent = 333;
	scramble();
	scrambleSelect.style.display = "none";
};

e3fm.onclick = function() {
	currentEvent = 3333;
	scramble();
	scrambleSelect.style.display = "none";
};

e3mbld.onclick = function() {
	currentEvent = 33333;
	scramble();
	scrambleSelect.style.display = "none";
};

epyra.onclick = function() {
	currentEvent = 10;
	scramble();
	scrambleSelect.style.display = "none";
};

eskewb.onclick = function() {
	currentEvent = 11;
	scramble();
	scrambleSelect.style.display = "none";
};

esq1.onclick = function() {
	currentEvent = 12;
	scramble();
	scrambleSelect.style.display = "none";
};

emgmx.onclick = function() {
	currentEvent = 13;
	scramble();
	scrambleSelect.style.display = "none";
};

eclock.onclick = function() {
	currentEvent = 14;
	scramble();
	scrambleSelect.style.display = "none";
};

e4bld.onclick = function() {
	currentEvent = 44;
	scramble();
	scrambleSelect.style.display = "none";
};

e5bld.onclick = function() {
	currentEvent = 55;
	scramble();
	scrambleSelect.style.display = "none";
};

scrambleSelectBtn.onclick = function() {
	scrambleSelect.style.display = "flex";
};

});
