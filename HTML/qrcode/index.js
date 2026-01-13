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

const byteMode = new Map([
	[" ", 00100000],
	["!", 00100001],
	['"', 00100010],
	["#", 00100011],
	["$", 00100100],
	["%", 00100101],
	["&", 00100110],
	["'", 00100111],
	["(", 00101000],
	[")", 00101001],
	["*", 00101010],
	["+", 00101011],
	[",", 00101100],
	["-", 00101101],
	[".", 00101110],
	["/", 00101111],
	["0", 00110000],
	["1", 00110001],
	["2", 00110010],
	["3", 00110011],
	["4", 00110100],
	["5", 00110101],
	["6", 00110110],
	["7", 00110111],
	["8", 00111000],
	["9", 00111001],
	[":", 00111010],
	[";", 00111011],
	["<", 00111100],
	["=", 00111101],
	[">", 00111110],
	["?", 00111111],
	["@", 01000000],
	["A", 01000001],
	["B", 01000010],
	["C", 01000011],
	["D", 01000100],
	["E", 01000101],
	["F", 01000110],
	["G", 01000111],
	["H", 01001000],
	["I", 01001001],
	["J", 01001010],
	["K", 01001011],
	["L", 01001100],
	["M", 01001101],
	["N", 01001110],
	["O", 01001111],
	["P", 01010000],
	["Q", 01010001],
	["R", 01010010],
	["S", 01010011],
	["T", 01010100],
	["U", 01010101],
	["V", 01010110],
	["W", 01010111],
	["X", 01011000],
	["Y", 01011001],
	["Z", 01011010],
	["[", 01011011],
	["\\", 01011100],
	["]", 01011101],
	["^", 01011110],
	["_", 01011111],
	["`", 01100000],
	["a", 01100001],
	["b", 01100010],
	["c", 01100011],
	["d", 01100100],
	["e", 01100101],
	["f", 01100110],
	["g", 01100111],
	["h", 01101000],
	["i", 01101001],
	["j", 01101010],
	["k", 01101011],
	["l", 01101100],
	["m", 01101101],
	["n", 01101110],
	["o", 01101111],
	["p", 01110000],
	["q", 01110001],
	["r", 01110010],
	["s", 01110011],
	["t", 01110100],
	["u", 01110101],
	["v", 01110110],
	["w", 01110111],
	["x", 01111000],
	["y", 01111001],
	["z", 01111010],
	["{", 01111011],
	["|", 01111100],
	["}", 01111101],
	["~", 01111110],
	["€", 10000000],
	[",", 10000010],
	["ƒ", 10000011],
	["„", 10000100],
	["…", 10000101],
	["†", 10000110],
	["‡", 10000111],
	["ˆ", 10001000],
	["‰", 10001001],
	["Š", 10001010],
	["‹", 10001011],
	["Œ", 10001100],
	["Ž", 10001110],
	["‘", 10010001],
	["’", 10010010],
	["“", 10010011],
	["”", 10010100],
	["•", 10010101],
	["–", 10010110],
	["—", 10010111],
	["˜", 10011000],
	["™", 10011001],
	["š", 10011010],
	["›", 10011011],
	["œ", 10011100],
	["ž", 10011110],
	["Ÿ", 10011111],
	["¡", 10100001],
	["¢", 10100010],
	["£", 10100011],
	["¤", 10100100],
	["¥", 10100101],
	["¦", 10100110],
	["§", 10100111],
	["¨", 10101000],
	["©", 10101001],
	["ª", 10101010],
	["«", 10101011],
	["¬", 10101100],
	["®", 10101110],
	["¯", 10101111],
	["°", 10110000],
	["±", 10110001],
	["²", 10110010],
	["³", 10110011],
	["´", 10110100],
	["µ", 10110101],
	["¶", 10110110],
	["·", 10110111],
	["¸", 10111000],
	["¹", 10111001],
	["º", 10111010],
	["»", 10111011],
	["¼", 10111100],
	["½", 10111101],
	["¾", 10111110],
	["¿", 10111111],
	["À", 11000000],
	["Á", 11000001],
	["Â", 11000010],
	["Ã", 11000011],
	["Ä", 11000100],
	["Å", 11000101],
	["Æ", 11000110],
	["Ç", 11000111],
	["È", 11001000],
	["É", 11001001],
	["Ê", 11001010],
	["Ë", 11001011],
	["Ì", 11001100],
	["Í", 11001101],
	["Î", 11001110],
	["Ï", 11001111],
	["Ð", 11010000],
	["Ñ", 11010001],
	["Ò", 11010010],
	["Ó", 11010011],
	["Ô", 11010100],
	["Õ", 11010101],
	["Ö", 11010110],
	["×", 11010111],
	["Ø", 11011000],
	["Ù", 11011001],
	["Ú", 11011010],
	["Û", 11011011],
	["Ü", 11011100],
	["Ý", 11011101],
	["Þ", 11011110],
	["ß", 11011111],
	["à", 11100000],
	["á", 11100001],
	["â", 11100010],
	["ã", 11100011],
	["ä", 11100100],
	["å", 11100101],
	["æ", 11100110],
	["ç", 11100111],
	["è", 11101000],
	["é", 11101001],
	["ê", 11101010],
	["ë", 11101011],
	["ì", 11101100],
	["í", 11101101],
	["î", 11101110],
	["ï", 11101111],
	["ð", 11110000],
	["ñ", 11110001],
	["ò", 11110010],
	["ó", 11110011],
	["ô", 11110100],
	["õ", 11110101],
	["ö", 11110110],
	["÷", 11110111],
	["ø", 11111000],
	["ù", 11111001],
	["ú", 11111010],
	["û", 11111011],
	["ü", 11111100],
	["ý", 11111101],
	["þ", 11111110],
	["ÿ", 11111111]
]);
let qrcodearray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],];

const height = window.innerHeight;

let input;

function drawQRCode() {
	let temp = parseInt(input);
	let version = temp;
	let grid = 25 + version * 4;
	let trueGrid = 17 + version * 4;
	let size = (height * 0.8) * 0.99;

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
	if (version > 1) {
		for (let i = 0; i < (alignmentPatterns.get(version)).length; i++) {
			for (let j = 0; j < (alignmentPatterns.get(version)).length; j++) {
				if ((((alignmentPatterns.get(version))[i] > 7 && (alignmentPatterns.get(version))[i] < trueGrid - 8) || ((alignmentPatterns.get(version))[j] > 7 && (alignmentPatterns.get(version))[j] < trueGrid - 8)) || ((alignmentPatterns.get(version))[i] >= trueGrid - 8 && (alignmentPatterns.get(version))[j] >= trueGrid - 8)) {
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
					qrcodearray[(alignmentPatterns.get(version))[i] - 1][(alignmentPatterns.get(version))[j] - 1] = 1;
				}
			}
		}
	}

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
