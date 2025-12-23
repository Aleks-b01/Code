const qrcode = document.getElementById("qrcode");
const input_text = document.getElementById("input_text");
const input_submit = document.getElementById("input_submit");

const height = window.innerHeight;

let input;

function drawQRCode() {
	let temp = parseInt(input);
	let grid = 25 + (temp * 4);
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
}

input_submit.addEventListener("click", function() {
	input = input_text.value;
	drawQRCode();
});
