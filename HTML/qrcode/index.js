const qrcode = document.getElementById("qrcode");
const input_text = document.getElementById("input_text");
const input_submit = document.getElementById("input_submit");
const options_error_correction_auto_img = document.getElementById("options_error_correction_auto_img");
const options_error_correction_low = document.getElementById("options_error_correction_low");
const options_error_correction_medium = document.getElementById("options_error_correction_medium");
const options_error_correction_quartile = document.getElementById("options_error_correction_quartile");
const options_error_correction_high = document.getElementById("options_error_correction_high");
const options_error_correction_low_select_img = document.getElementById("options_error_correction_low_select_img");
const options_error_correction_medium_select_img = document.getElementById("options_error_correction_medium_select_img");
const options_error_correction_quartile_select_img = document.getElementById("options_error_correction_quartile_select_img");
const options_error_correction_high_select_img = document.getElementById("options_error_correction_high_select_img");
const options_version_auto_img = document.getElementById("options_version_auto_img");
const options_version_input = document.getElementById("options_version_input");

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

const byteMode = new Map([
	[" ", "00100000"],
	["!", "00100001"],
	['"', "00100010"],
	["#", "00100011"],
	["$", "00100100"],
	["%", "00100101"],
	["&", "00100110"],
	["'", "00100111"],
	["(", "00101000"],
	[")", "00101001"],
	["*", "00101010"],
	["+", "00101011"],
	[",", "00101100"],
	["-", "00101101"],
	[".", "00101110"],
	["/", "00101111"],
	["0", "00110000"],
	["1", "00110001"],
	["2", "00110010"],
	["3", "00110011"],
	["4", "00110100"],
	["5", "00110101"],
	["6", "00110110"],
	["7", "00110111"],
	["8", "00111000"],
	["9", "00111001"],
	[":", "00111010"],
	[";", "00111011"],
	["<", "00111100"],
	["=", "00111101"],
	[">", "00111110"],
	["?", "00111111"],
	["@", "01000000"],
	["A", "01000001"],
	["B", "01000010"],
	["C", "01000011"],
	["D", "01000100"],
	["E", "01000101"],
	["F", "01000110"],
	["G", "01000111"],
	["H", "01001000"],
	["I", "01001001"],
	["J", "01001010"],
	["K", "01001011"],
	["L", "01001100"],
	["M", "01001101"],
	["N", "01001110"],
	["O", "01001111"],
	["P", "01010000"],
	["Q", "01010001"],
	["R", "01010010"],
	["S", "01010011"],
	["T", "01010100"],
	["U", "01010101"],
	["V", "01010110"],
	["W", "01010111"],
	["X", "01011000"],
	["Y", "01011001"],
	["Z", "01011010"],
	["[", "01011011"],
	["\\","01011100"],
	["]", "01011101"],
	["^", "01011110"],
	["_", "01011111"],
	["`", "01100000"],
	["a", "01100001"],
	["b", "01100010"],
	["c", "01100011"],
	["d", "01100100"],
	["e", "01100101"],
	["f", "01100110"],
	["g", "01100111"],
	["h", "01101000"],
	["i", "01101001"],
	["j", "01101010"],
	["k", "01101011"],
	["l", "01101100"],
	["m", "01101101"],
	["n", "01101110"],
	["o", "01101111"],
	["p", "01110000"],
	["q", "01110001"],
	["r", "01110010"],
	["s", "01110011"],
	["t", "01110100"],
	["u", "01110101"],
	["v", "01110110"],
	["w", "01110111"],
	["x", "01111000"],
	["y", "01111001"],
	["z", "01111010"],
	["{", "01111011"],
	["|", "01111100"],
	["}", "01111101"],
	["~", "01111110"],
	["€", "10000000"],
	[",", "10000010"],
	["ƒ", "10000011"],
	["„", "10000100"],
	["…", "10000101"],
	["†", "10000110"],
	["‡", "10000111"],
	["ˆ", "10001000"],
	["‰", "10001001"],
	["Š", "10001010"],
	["‹", "10001011"],
	["Œ", "10001100"],
	["Ž", "10001110"],
	["‘", "10010001"],
	["’", "10010010"],
	["“", "10010011"],
	["”", "10010100"],
	["•", "10010101"],
	["–", "10010110"],
	["—", "10010111"],
	["˜", "10011000"],
	["™", "10011001"],
	["š", "10011010"],
	["›", "10011011"],
	["œ", "10011100"],
	["ž", "10011110"],
	["Ÿ", "10011111"],
	["¡", "10100001"],
	["¢", "10100010"],
	["£", "10100011"],
	["¤", "10100100"],
	["¥", "10100101"],
	["¦", "10100110"],
	["§", "10100111"],
	["¨", "10101000"],
	["©", "10101001"],
	["ª", "10101010"],
	["«", "10101011"],
	["¬", "10101100"],
	["®", "10101110"],
	["¯", "10101111"],
	["°", "10110000"],
	["±", "10110001"],
	["²", "10110010"],
	["³", "10110011"],
	["´", "10110100"],
	["µ", "10110101"],
	["¶", "10110110"],
	["·", "10110111"],
	["¸", "10111000"],
	["¹", "10111001"],
	["º", "10111010"],
	["»", "10111011"],
	["¼", "10111100"],
	["½", "10111101"],
	["¾", "10111110"],
	["¿", "10111111"],
	["À", "11000000"],
	["Á", "11000001"],
	["Â", "11000010"],
	["Ã", "11000011"],
	["Ä", "11000100"],
	["Å", "11000101"],
	["Æ", "11000110"],
	["Ç", "11000111"],
	["È", "11001000"],
	["É", "11001001"],
	["Ê", "11001010"],
	["Ë", "11001011"],
	["Ì", "11001100"],
	["Í", "11001101"],
	["Î", "11001110"],
	["Ï", "11001111"],
	["Ð", "11010000"],
	["Ñ", "11010001"],
	["Ò", "11010010"],
	["Ó", "11010011"],
	["Ô", "11010100"],
	["Õ", "11010101"],
	["Ö", "11010110"],
	["×", "11010111"],
	["Ø", "11011000"],
	["Ù", "11011001"],
	["Ú", "11011010"],
	["Û", "11011011"],
	["Ü", "11011100"],
	["Ý", "11011101"],
	["Þ", "11011110"],
	["ß", "11011111"],
	["à", "11100000"],
	["á", "11100001"],
	["â", "11100010"],
	["ã", "11100011"],
	["ä", "11100100"],
	["å", "11100101"],
	["æ", "11100110"],
	["ç", "11100111"],
	["è", "11101000"],
	["é", "11101001"],
	["ê", "11101010"],
	["ë", "11101011"],
	["ì", "11101100"],
	["í", "11101101"],
	["î", "11101110"],
	["ï", "11101111"],
	["ð", "11110000"],
	["ñ", "11110001"],
	["ò", "11110010"],
	["ó", "11110011"],
	["ô", "11110100"],
	["õ", "11110101"],
	["ö", "11110110"],
	["÷", "11110111"],
	["ø", "11111000"],
	["ù", "11111001"],
	["ú", "11111010"],
	["û", "11111011"],
	["ü", "11111100"],
	["ý", "11111101"],
	["þ", "11111110"],
	["ÿ", "11111111"]
]);

// [version, [L, M, Q, H]]
const maxSizeByteMode = new Map([
	[1, [17, 14, 11, 7]],
	[2, [32, 26, 20, 14]],
	[3, [53, 42, 32, 24]],
	[4, [78, 62, 46, 34]],
	[5, [106, 84, 60, 44]],
	[6, [134, 106, 74, 58]],
	[7, [154, 122, 86, 64]],
	[8, [192, 152, 108, 84]],
	[9, [230, 180, 130, 98]],
	[10, [271, 213, 151, 119]],
	[11, [321, 251, 177, 137]],
	[12, [367, 287, 203, 155]],
	[13, [425, 331, 241, 177]],
	[14, [458, 362, 258, 194]],
	[15, [520, 412, 292, 220]],
	[16, [586, 450, 322, 250]],
	[17, [644, 504, 364, 280]],
	[18, [718, 560, 394, 310]],
	[19, [792, 624, 442, 338]],
	[20, [858, 666, 482, 382]],
	[21, [929, 711, 509, 403]],
	[22, [1003, 779, 565, 439]],
	[23, [1091, 857, 611, 461]],
	[24, [1171, 911, 661, 511]],
	[25, [1273, 997, 715, 535]],
	[26, [1367, 1059, 751, 593]],
	[27, [1465, 1125, 805, 625]],
	[28, [1528, 1190, 868, 658]],
	[29, [1628, 1264, 908, 698]],
	[30, [1732, 1370, 982, 742]],
	[31, [1840, 1452, 1030, 790]],
	[32, [1952, 1538, 1112, 842]],
	[33, [2068, 1628, 1168, 898]],
	[34, [2188, 1722, 1228, 958]],
	[35, [2303, 1809, 1283, 983]],
	[36, [2431, 1911, 1351, 1051]],
	[37, [2563, 1989, 1423, 1093]],
	[38, [2699, 2099, 1499, 1139]],
	[39, [2809, 2213, 1579, 1219]],
	[40, [2953, 2331, 1663, 1273]]
]);

options_version_input.setAttribute("disabled", "true");

let qrcodearray = [];

const height = window.innerHeight;
const padBytes = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1];

let input;
let errorCorrection = 3; // 0 = L, 1 = M, 2 = Q, 3 = L
let errorCorrectionAuto = true;
let version = 5;
let versionAuto = true;
let messageTooBig = false;

// this is made specifically for char count if it want obvious enough from the function
function decimalToBinary(num, mode) {
	let binary;
	if (mode == "byte") {
		if (version < 10) {
			if (num >= 128) {
				binary = "1";
				num -= 128;
			} else {
				binary = "0";
			}
			if (num >= 64) {
				binary += "1";
				num -= 64;
			} else {
				binary += "0";
			}
			if (num >= 32) {
				binary += "1";
				num -= 32;
			} else {
				binary += "0";
			}
			if (num >= 16) {
				binary += "1";
				num -= 16;
			} else {
				binary += "0";
			}
			if (num >= 8) {
				binary += "1";
				num -= 8;
			} else {
				binary += "0";
			}
			if (num >= 4) {
				binary += "1";
				num -= 4;
			} else {
				binary += "0";
			}
			if (num >= 2) {
				binary += "1";
				num -= 2;
			} else {
				binary += "0";
			}
			if (num == 1) {
				binary += "1";
			} else {
				binary += "0";
			}
		} else {
			if (num >= 32768) {
				binary = "1";
				num -= 32768;
			} else {
				binary = "0";
			}
			if (num >= 16384) {
				binary += "1";
				num -= 16384;
			} else {
				binary += "0";
			}
			if (num >= 8192) {
				binary += "1";
				num -= 8192;
			} else {
				binary += "0";
			}
			if (num >= 4096) {
				binary += "1";
				num -= 4096;
			} else {
				binary += "0";
			}
			if (num >= 2048) {
				binary += "1";
				num -= 2048;
			} else {
				binary += "0";
			}
			if (num >= 1024) {
				binary += "1";
				num -= 1024;
			} else {
				binary += "0";
			}
			if (num >= 512) {
				binary += "1";
				num -= 512;
			} else {
				binary += "0";
			}
			if (num >= 256) {
				binary += "1";
				num -= 256
			} else {
				binary += "0";
			}
			if (num == 128) {
				binary += "1";
				num -= 128;
			} else {
				binary += "0";
			}
			if (num >= 64) {
				binary += "1";
				num -= 64;
			} else {
				binary += "0";
			}
			if (num >= 32) {
				binary += "1";
				num -= 32;
			} else {
				binary += "0";
			}
			if (num >= 16) {
				binary += "1";
				num -= 16;
			} else {
				binary += "0";
			}
			if (num >= 8) {
				binary += "1";
				num -= 8;
			} else {
				binary += "0";
			}
			if (num >= 4) {
				binary += "1";
				num -= 4;
			} else {
				binary += "0";
			}
			if (num >= 2) {
				binary += "1";
				num -= 2;
			} else {
				binary += "0";
			}
			if (num == 1) {
				binary += "1";
			} else {
				binary += "0";
			}
		}
	}
	return binary;
}

function calculateVersion(mode, message) {
	version = 1;
	if (mode == "byte") {
		if (errorCorrectionAuto == true) {
			errorCorrection = 3;
			while (true) {
				if (maxSizeByteMode.get(version)[errorCorrection] < message.length) {
					if (version != 40) {
						version++;
					} else {
						if (errorCorrection != 0) {
							errorCorrection--;
						} else {
							messageTooBig = true;
							break;
						}
					}
				} else {
					break;
				}
			}
		} else {
			while (true) {
				if (maxSizeByteMode.get(version)[errorCorrection] < message.length) {
					if (version != 40) {
						version++
					} else {
						messageTooBig = true;
						break;
					}
				} else {
					break;
				}
			}	
		}
	}
}

function calculateErrorCorrection(mode, message) {
	errorCorrection = 3;
	if (mode == "byte") {
		while (true) {
			if (maxSizeByteMode.get(version)[errorCorrection] < message.length) {
				if (errorCorrection != 0) {
					errorCorrection--;
				} else {
					messageTooBig = true;
					break;
				}
			} else {
				break;
			}
		}
	}
}

function calculateMessageLength(mode, message) {
	if (mode == "byte") {
		if (maxSizeByteMode.get(version)[errorCorrection] < message.length) {
			messageTooBig = true;
		}
	}
}

function drawQRCode(trueGrid) {
	let grid = 25 + version * 4;
	let size = (height * 0.8) * 0.99;
	size = size - (size % grid);
	qrcode.style.height = `${size}px`;
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

	for (let i = 0; i < trueGrid; i++) {
		for (let j = 0; j < trueGrid; j++) {
			if (qrcodearray[i][j] == 1) {
				let id = (j + 4) + ((i + 4) * grid);
				document.getElementById(`qrcodediv${id}`).style.backgroundColor = "black";
			}
		}
	}
}

function generateQRCode() {
	messageTooBig = false;
	let temp = input;
	let mode = "byte";
	let message = temp.split("");
	let messageLength = message.length - 1;
	let messageLengthBinary = decimalToBinary(messageLength, mode).split("");
	if (versionAuto == true) {
		calculateVersion(mode, message);
	} else if (errorCorrectionAuto == true) {
		version = parseInt(options_version_input.value);
		calculateErrorCorrection(mode, message);
	} else {
		version = parseInt(options_version_input.value);
		calculateMessageLength(mode, message);
	}
	if (messageTooBig == true) {
		console.log("The message is too big");
		return 0;
	}
	let grid = 17 + version * 4;

	for (let i = 0; i < grid; i++) {
		qrcodearray.push([]);
		for (let j = 0; j < grid; j++) {
			qrcodearray[i].push(0);
		}
	}

	for (let i = 0; i < 7; i++) {
		qrcodearray[0][i] = 1;
		qrcodearray[i][6] = 1;
	}
	for (let i = 6; i >= 0; i--) {
		qrcodearray[6][i] = 1;
		qrcodearray[i][0] = 1;
	}
	for (let i = grid - 1; i >= grid - 7; i--) {
		qrcodearray[0][i] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[i][grid - 7] = 1;
	}
	for (let i = grid - 7; i < grid; i++) {
		qrcodearray[6][i] = 1;
	}
	for (let i = 6; i >= 0; i--) {
		qrcodearray[i][grid - 1] = 1;
	}
	for (let i = grid - 1; i >= grid - 7; i--) {
		qrcodearray[i][0] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[grid - 7][i] = 1;
	}
	for (let i = grid - 7; i < grid; i++) {
		qrcodearray[i][6] = 1;
	}
	for (let i = 0; i < 7; i++) {
		qrcodearray[grid - 1][i] = 1;
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
	for (let i = grid - 3; i > grid - 6; i--) {
		qrcodearray[2][i] = 1;
	}
	for (let i = grid - 3; i > grid - 6; i--) {
		qrcodearray[3][i] = 1;
	}
	for (let i = grid - 3; i > grid - 6; i--) {
		qrcodearray[4][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[grid - 3][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[grid - 4][i] = 1;
	}
	for (let i = 2; i < 5; i++) {
		qrcodearray[grid - 5][i] = 1;
	}
	for (let i = 8; i < grid - 8; i++) {
		if (i % 2 == 0) {
			qrcodearray[6][i] = 1;
			qrcodearray[i][6] = 1;
		}
	}
	let x = grid - 1;
	let y = grid - 3;
	let up = true;
	let preTimingPattern = true;
	for (let i = 0; i < messageLengthBinary.length; i++) {
		qrcodearray[y][x] = messageLengthBinary[i];
		if (x % 2 == 0) {
			x--;
		} else {
			x++;
			y--;
		}
	}
	qrcodearray[grid - 8][8] = 1;
	if (mode == "numeric") {
		qrcodearray[grid - 2][grid - 2] = 1;
	} else if (mode == "alphanumeric") {
		qrcodearray[grid - 2][grid - 1] = 1;
	} else if (mode == "byte") {
		qrcodearray[grid - 1][grid - 2] = 1;
		let messageBinary = "";
		for (let i = 0; i < messageLength; i++) {
			messageBinary += byteMode.get(message[i + 1]);
		}
		if (maxSizeByteMode.get(version)[errorCorrection] * 8 - messageBinary.length > 0) {
			messageBinary += "00000000";
		}
		if (maxSizeByteMode.get(version)[errorCorrection] * 8 - messageBinary.length > 0) {
			temp = 0;
			for (let i = maxSizeByteMode.get(version)[errorCorrection] * 8 - messageBinary.length; i > 0; i--) {
				messageBinary += padBytes[temp];
				if (temp == 15) {
					temp = 0;
				} else {
					temp++;
				}
			}
		}
		for (let i = 0; i < messageBinary.length; i++) {
			qrcodearray[y][x] = messageBinary[i];
			if (x % 2 == 0) {
				if (preTimingPattern == true) {
					x--;
				} else {
					if (up == true) {
						x++;
						y--;
					} else {
						x++;
						y++;
					}				
				}
			} else {
				if (preTimingPattern == true) {
					if (up == true) {
						x++;
						y--;
					} else {
						x++;
						y++;
					}
				} else {
					x--;
				}
			}
			if (y == -1) {
				up = false;
				x -= 2;
				y++;
			}
			if (y == grid) {
				up = true;
				x -= 2;
				y--;
			}
			if (y == 8 && (x <= 8 || x >= grid - 8)) {
				up = false;
				x -= 2;
				y++;
			}
			if (y == grid - 7 && x <= 8) {
				up = true;
				x -= 2;
				y--;
			}
			if (y == 6 && up == true) {
				y--;
			} else if (y == 6 && up == false) {
				y++;
			}
			if (x == 8 && y == grid - 1) {
				y = grid - 8;
			}
			if (x == 8 && y == 7) {
				x = 5;
				y = 8;
				preTimingPattern = false;
			}
			if (version > 1) {
				for (let i = 0; i < alignmentPatterns.get(version).length; i++) {
					for (let j = 0; j < alignmentPatterns.get(version).length; j++) {
						if (x <= alignmentPatterns.get(version)[i] + 2 && x >= alignmentPatterns.get(version)[i] - 2 && y <= alignmentPatterns.get(version)[j] + 2 && y >= alignmentPatterns.get(version)[j] - 2) {
							if (x % 2 == 0) {
								if (preTimingPattern == true) {
									x--;
								} else {
									if (up == true) {
										x++;
										y--;
									} else {
										x++;
										y++;
									}				
								}
							} else {
								if (preTimingPattern == true) {
									if (up == true) {
										x++;
										y--;
									} else {
										x++;
										y++;
									}
								} else {
									x--;
								}
							}
							j--;
						}
					}
				}
			}
		}
	}

	if (version > 1) {
		for (let i = 0; i < (alignmentPatterns.get(version)).length; i++) {
			for (let j = 0; j < (alignmentPatterns.get(version)).length; j++) {
				if ((((alignmentPatterns.get(version))[i] > 7 && (alignmentPatterns.get(version))[i] < grid - 8) || ((alignmentPatterns.get(version))[j] > 7 && (alignmentPatterns.get(version))[j] < grid - 8)) || ((alignmentPatterns.get(version))[i] >= grid - 8 && (alignmentPatterns.get(version))[j] >= grid - 8)) {
					qrcodearray[(alignmentPatterns.get(version))[i]][(alignmentPatterns.get(version))[j]] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 2][(alignmentPatterns.get(version))[j] - 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 2][(alignmentPatterns.get(version))[j] - 1] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 2][(alignmentPatterns.get(version))[j]] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 2][(alignmentPatterns.get(version))[j] + 1] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 2][(alignmentPatterns.get(version))[j] + 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 1][(alignmentPatterns.get(version))[j] + 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i]][(alignmentPatterns.get(version))[j] + 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 1][(alignmentPatterns.get(version))[j] + 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 2][(alignmentPatterns.get(version))[j] + 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 2][(alignmentPatterns.get(version))[j] + 1] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 2][(alignmentPatterns.get(version))[j]] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 2][(alignmentPatterns.get(version))[j] - 1] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 2][(alignmentPatterns.get(version))[j] - 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] + 1][(alignmentPatterns.get(version))[j] - 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i]][(alignmentPatterns.get(version))[j] - 2] = 1;
					qrcodearray[(alignmentPatterns.get(version))[i] - 1][(alignmentPatterns.get(version))[j] - 2] = 1;
				}
			}
		}
	}
	drawQRCode(grid);
}

input_submit.addEventListener("click", function() {
	input = input_text.value;
	generateQRCode();
});

options_error_correction_auto_img.addEventListener("click", function() {
	if (errorCorrectionAuto == true) {
		errorCorrectionAuto = false;
		options_error_correction_auto_img.style.backgroundImage = "url(assets/switch/switch_off.png)";
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_low_text.style.color = "black";
		options_error_correction_medium_text.style.color = "black";
		options_error_correction_quartile_text.style.color = "black";
		options_error_correction_high_text.style.color = "black";
		if (errorCorrection == 0) {
			options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		} else if (errorCorrection == 1) {
			options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		} else if (errorCorrection == 2) {
			options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		} else if (errorCorrection == 3) {
			options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		}
	} else {
		errorCorrectionAuto = true;
		options_error_correction_auto_img.style.backgroundImage = "url(assets/switch/switch_on.png)";
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/select_gray.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/select_gray.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/select_gray.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/select_gray.png)";
		options_error_correction_low_text.style.color = "#c7c7ce";
		options_error_correction_medium_text.style.color = "#c7c7ce";
		options_error_correction_quartile_text.style.color = "#c7c7ce";
		options_error_correction_high_text.style.color = "#c7c7ce";
		if (errorCorrection == 0) {
			options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/selected_gray.png)";
		} else if (errorCorrection == 1) {
			options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/selected_gray.png)";
		} else if (errorCorrection == 2) {
			options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/selected_gray.png)";
		} else if (errorCorrection == 3) {
			options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/selected_gray.png)";
		}
	}
});

options_error_correction_low.addEventListener("click", function() {
	if (errorCorrectionAuto == false) {
		errorCorrection = 0;
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/select.png)";
	}
});

options_error_correction_medium.addEventListener("click", function() {
	if (errorCorrectionAuto == false) {
		errorCorrection = 1;
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/select.png)";
	}
});

options_error_correction_quartile.addEventListener("click", function() {
	if (errorCorrectionAuto == false) {
		errorCorrection = 2;
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/selected.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/select.png)";
	}
});

options_error_correction_high.addEventListener("click", function() {
	if (errorCorrectionAuto == false) {
		errorCorrection = 3;
		options_error_correction_low_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_medium_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_quartile_select_img.style.backgroundImage = "url(assets/select/select.png)";
		options_error_correction_high_select_img.style.backgroundImage = "url(assets/select/selected.png)";
	}
});

options_version_auto_img.addEventListener("click", function() {
	if (versionAuto == true) {
		versionAuto = false;
		options_version_auto_img.style.backgroundImage = "url(assets/switch/switch_off.png)";
		options_version_input.removeAttribute("disabled");
		options_version_input.style.color = "black";
	} else {
		versionAuto = true;
		options_version_auto_img.style.backgroundImage = "url(assets/switch/switch_on.png)";
		options_version_input.setAttribute("disabled", "true");
		options_version_input.style.color = "#c7c7ce";
	}
});
