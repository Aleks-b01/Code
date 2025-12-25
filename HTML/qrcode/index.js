const qrcode = document.getElementById("qrcode");
const input_text = document.getElementById("input_text");
const input_submit = document.getElementById("input_submit");

const alignmentPatterns = new Map([
	[2, [6, 18]],
	[3, [6, 22]],
	[4, [6, 26]],
	[5, [6, 30]],
	[6, [6, 34]],
	[7, [6, 22, 38]],
	[8, [6, 24, 42]],
	[9, [6, 26, 46]],
	[10, [6, 28, 50]],
	[11, [6, 30, 54]],
	[12, [6, 32, 58]],
	[13, [6, 34, 62]],
	[14, [6, 26, 46, 66]],
	[15, [6, 26, 48, 70]],
	[16, [6, 26, 50, 74]],
	[17, [6, 30, 54, 78]],
	[18, [6, 30, 56, 82]],
	[19, [6, 30, 58, 86]],
	[20, [6, 34, 62, 90]],
	[21, [6, 28, 50, 72, 94]],
	[22, [6, 26, 50, 74, 98]],
	[23, [6, 30, 54, 78, 102]],
	[24, [6, 28, 54, 80, 106]],
	[25, [6, 32, 58, 84, 110]],
	[26, [6, 30, 58, 86, 114]],
	[27, [6, 34, 62, 90, 118]],
	[28, [6, 26, 50, 74, 98, 112]],
	[29, [6, 30, 54, 78, 102, 126]],
	[30, [6, 26, 52, 78, 104, 130]],
	[31, [6, 30, 56, 82, 108, 134]],
	[32, [6, 34, 60, 86, 112, 138]],
	[33, [6, 30, 58, 86, 114, 142]],
	[34, [6, 34, 62, 90, 118, 146]],
	[35, [6, 30, 54, 78, 102, 126, 150]],
	[36, [6, 24, 50, 76, 102, 128, 154]],
	[37, [6, 28, 54, 80, 106, 132, 158]],
	[38, [6, 32, 58, 84, 110, 136, 162]],
	[39, [6, 26, 54, 82, 110, 138, 166]],
	[40, [6, 30, 58, 86, 114, 142, 170]]
]);

// let qrcodearray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],];

const height = window.innerHeight;

let input;

function drawQRCode() {
	let temp = parseInt(input);
	let version = temp;
	let grid = 25 + version * 4;
	let trueGrid = 17 + version * 4;
	let size = (height * 0.8) * 0.99;
	size = size - (size % grid);
	qrcode.style.height = `${size}pz`;
	qrcode.style.width = `${size}px`;
	qrcode.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
	qrcode.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
	let counter = 0;
	for (let i = 0; i < grid; i++) {
		for (let j = 0; j < grid; j++) {
			let element = document.createElement("div");
			qrcode.appendChild(element);
			element.setAttribute("id", `qrcodediv${counter}`);
			element.style.width = "100%";
			element.style.height = "100%";
			counter++;
		}
	}
	for (let i = grid * 4 + 4; i != grid * 4 + 10; i++) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 4 + 10; i != grid * 10 + 10; i += grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 10 + 10; i != grid * 10 + 4; i--) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 10 + 4; i != grid * 4 + 4; i -= grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 5 - 5; i != grid * 5 - 11; i--) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 5 - 11; i != grid * 11 - 11; i += grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 11 - 11; i != grid * 11 - 5; i++) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 11 - 5; i != grid * 5 - 5; i -= grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * (grid - 11) + 4; i != grid * (grid - 11) + 10; i++) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * (grid - 11) + 10; i != grid * (grid - 5) + 10; i += grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * (grid - 5) + 10; i != grid * (grid - 5) + 4; i--) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * (grid - 5) + 4; i != grid * (grid - 11) + 4; i -= grid) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
	}
	for (let i = grid * 6 + 6; i != grid * 8 + 9; i++) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
		if (i == (grid * 6) + 8) {
			i = (grid * 7) + 5;
		} else if (i == (grid * 7) + 8) {
			i = (grid * 8) + 5;
		}
	}
	for (let i = grid * 7 - 7; i != grid * 9 - 10; i--) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
		if (i == (grid * 7) - 9) {
			i = (grid * 8) - 6;
		} else if (i == (grid * 8) - 9) {
			i = (grid * 9) - 6;
		}
	}
	for (let i = grid * (grid - 9) + 6; i != grid * (grid - 7) + 9; i++) {
		document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
		if (i == (grid * (grid - 9)) + 8) {
			i = (grid * (grid - 8)) + 5;
		} else if (i == (grid * (grid - 8)) + 8) {
			i = (grid * (grid - 7)) + 5;
		}
	}
	counter = 0;
	for (let i = grid * 10 + 12; i != grid * 11 - 12; i++) {
		if (counter % 2 == 0) {
			document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
		}
		counter++;
	}
	counter = 0;
	for (let i = grid * 12 + 10; i != grid * (grid - 12) + 10; i += grid) {
		if (counter % 2 == 0) {
			document.getElementById(`qrcodediv${i}`).style.backgroundColor = "black";
		}
		counter++;
	}
	document.getElementById(`qrcodediv${grid * (grid - 12) + 12}`).style.backgroundColor = "black";
	if (version > 1) {
		for (let i = 0; i < (alignmentPatterns.get(version)).length; i++) {
			for (let j = 0; j < (alignmentPatterns.get(version)).length; j++) {
				if ((((alignmentPatterns.get(version))[i] > 7 && (alignmentPatterns.get(version))[i] < trueGrid - 8) || ((alignmentPatterns.get(version))[j] > 7 && (alignmentPatterns.get(version))[j] < trueGrid - 8)) || ((alignmentPatterns.get(version))[i] >= trueGrid - 8 && (alignmentPatterns.get(version))[j] >= trueGrid - 8)) {
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 4) * grid + (alignmentPatterns.get(version))[i] + 4}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 2) * grid + (alignmentPatterns.get(version))[i] + 2}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 2) * grid + (alignmentPatterns.get(version))[i] + 3}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 2) * grid + (alignmentPatterns.get(version))[i] + 4}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 2) * grid + (alignmentPatterns.get(version))[i] + 5}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 2) * grid + (alignmentPatterns.get(version))[i] + 6}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 3) * grid + (alignmentPatterns.get(version))[i] + 6}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 4) * grid + (alignmentPatterns.get(version))[i] + 6}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 5) * grid + (alignmentPatterns.get(version))[i] + 6}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 6) * grid + (alignmentPatterns.get(version))[i] + 6}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 6) * grid + (alignmentPatterns.get(version))[i] + 5}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 6) * grid + (alignmentPatterns.get(version))[i] + 4}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 6) * grid + (alignmentPatterns.get(version))[i] + 3}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 6) * grid + (alignmentPatterns.get(version))[i] + 2}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 5) * grid + (alignmentPatterns.get(version))[i] + 2}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 4) * grid + (alignmentPatterns.get(version))[i] + 2}`).style.backgroundColor = "black";
					document.getElementById(`qrcodediv${((alignmentPatterns.get(version))[j] + 3) * grid + (alignmentPatterns.get(version))[i] + 2}`).style.backgroundColor = "black";
				}
			}
		}
	}
}

input_submit.addEventListener("click", function() {
	input = input_text.value;
	drawQRCode();
});

// for making the qr code into an array, not needed now, currently does finder-, timing patterns and dark square
//array initialization is also commented out
/*
	for (let i = 0; i < 7; i++) {
		qrcodearray[0][i] = 1;
		qrcodearray[i][6] = 1;
	}
	for (let i = 6; i >= 0; i--) {
		qrcodearray[6][i] = 1;
		qrcodearray[i][0] = 1;
	}
	for (let i = trueGrid - 1; i >= trueGrid - 7; i--) {
		qrcodearray[0][i] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[i][trueGrid - 7] = 1;
	}
	for (let i = trueGrid - 7; i < trueGrid; i++) {
		qrcodearray[6][i] = 1;
	}
	for (let i = 6; i >= 0; i--) {
		qrcodearray[i][trueGrid - 1] = 1;
	}
	for (let i = trueGrid - 1; i >= trueGrid - 7; i--) {
		qrcodearray[i][0] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[trueGrid - 7][i] = 1;
	}
	for (let i = trueGrid - 7; i < trueGrid; i++) {
		qrcodearray[i][6] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[trueGrid - 1][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[2][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[3][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[4][i] = 1;
	}
	for (let i = trueGrid - 3; i > trueGrid - 6; i--) {
		qrcodearray[2][i] = 1;
	}
	for (let i = trueGrid - 3; i > trueGrid - 6; i--) {
		qrcodearray[3][i] = 1;
	}
	for (let i = trueGrid - 3; i > trueGrid - 6; i--) {
		qrcodearray[4][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[trueGrid - 3][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[trueGrid - 4][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[trueGrid - 5][i] = 1;
	}
	for (let i = 8; i < trueGrid - 8; i++) {
		if (i % 2 == 0) {
			qrcodearray[6][i] = 1;
			qrcodearray[i][6] = 1;
		}
	}
	qrcodearray[trueGrid - 8][8] = 1;
*/
