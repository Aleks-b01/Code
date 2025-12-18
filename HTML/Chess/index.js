document.addEventListener("mousemove", moveCursorPiece);

const body = document.getElementsByTagName("body")[0];
const a8 = document.getElementById("a8");
const b8 = document.getElementById("b8");
const c8 = document.getElementById("c8");
const d8 = document.getElementById("d8");
const e8 = document.getElementById("e8");
const f8 = document.getElementById("f8");
const g8 = document.getElementById("g8");
const h8 = document.getElementById("h8");
const a7 = document.getElementById("a7");
const b7 = document.getElementById("b7");
const c7 = document.getElementById("c7");
const d7 = document.getElementById("d7");
const e7 = document.getElementById("e7");
const f7 = document.getElementById("f7");
const g7 = document.getElementById("g7");
const h7 = document.getElementById("h7");
const a6 = document.getElementById("a6");
const b6 = document.getElementById("b6");
const c6 = document.getElementById("c6");
const d6 = document.getElementById("d6");
const e6 = document.getElementById("e6");
const f6 = document.getElementById("f6");
const g6 = document.getElementById("g6");
const h6 = document.getElementById("h6");
const a5 = document.getElementById("a5");
const b5 = document.getElementById("b5");
const c5 = document.getElementById("c5");
const d5 = document.getElementById("d5");
const e5 = document.getElementById("e5");
const f5 = document.getElementById("f5");
const g5 = document.getElementById("g5");
const h5 = document.getElementById("h5");
const a4 = document.getElementById("a4");
const b4 = document.getElementById("b4");
const c4 = document.getElementById("c4");
const d4 = document.getElementById("d4");
const e4 = document.getElementById("e4");
const f4 = document.getElementById("f4");
const g4 = document.getElementById("g4");
const h4 = document.getElementById("h4");
const a3 = document.getElementById("a3");
const b3 = document.getElementById("b3");
const c3 = document.getElementById("c3");
const d3 = document.getElementById("d3");
const e3 = document.getElementById("e3");
const f3 = document.getElementById("f3");
const g3 = document.getElementById("g3");
const h3 = document.getElementById("h3");
const a2 = document.getElementById("a2");
const b2 = document.getElementById("b2");
const c2 = document.getElementById("c2");
const d2 = document.getElementById("d2");
const e2 = document.getElementById("e2");
const f2 = document.getElementById("f2");
const g2 = document.getElementById("g2");
const h2 = document.getElementById("h2");
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");
const e1 = document.getElementById("e1");
const f1 = document.getElementById("f1");
const g1 = document.getElementById("g1");
const h1 = document.getElementById("h1");
const square = document.getElementsByClassName("square");
const cursor_piece = document.getElementById("cursor_piece");
const chessboard = document.getElementById("chessboard");

const whitePieces = new Map([
	["P", 1],
	["N", 3],
	["B", 5],
	["R", 7],
	["Q", 9],
	["K", 11]
]);

const blackPieces = new Map([
	["P", 2],
	["N", 4],
	["B", 6],
	["R", 8],
	["Q", 10],
	["K", 12]
]);

const arrayToPiecePath = new Map([
	[1, "url(assets/pieces/pawn_white.png)"],
	[2, "url(assets/pieces/pawn_black.png)"],
	[3, "url(assets/pieces/knight_white.png)"],
	[4, "url(assets/pieces/knight_black.png)"],
	[5, "url(assets/pieces/bishop_white.png)"],
	[6, "url(assets/pieces/bishop_black.png)"],
	[7, "url(assets/pieces/rook_white.png)"],
	[8, "url(assets/pieces/rook_black.png)"],
	[9, "url(assets/pieces/queen_white.png)"],
	[10, "url(assets/pieces/queen_black.png)"],
	[11, "url(assets/pieces/king_white.png)"],
	[12, "url(assets/pieces/king_black.png)"]
]);

const squareIndex = new Map([
	["a8", 0],
	["b8", 1],
	["c8", 2],
	["d8", 3],
	["e8", 4],
	["f8", 5],
	["g8", 6],
	["h8", 7],
	["a7", 8],
	["b7", 9],
	["c7", 10],
	["d7", 11],
	["e7", 12],
	["f7", 13],
	["g7", 14],
	["h7", 15],
	["a6", 16],
	["b6", 17],
	["c6", 18],
	["d6", 19],
	["e6", 20],
	["f6", 21],
	["g6", 22],
	["h6", 23],
	["a5", 24],
	["b5", 25],
	["c5", 26],
	["d5", 27],
	["e5", 28],
	["f5", 29],
	["g5", 30],
	["h5", 31],
	["a4", 32],
	["b4", 33],
	["c4", 34],
	["d4", 35],
	["e4", 36],
	["f4", 37],
	["g4", 38],
	["h4", 39],
	["a3", 40],
	["b3", 41],
	["c3", 42],
	["d3", 43],
	["e3", 44],
	["f3", 45],
	["g3", 46],
	["h3", 47],
	["a2", 48],
	["b2", 49],
	["c2", 50],
	["d2", 51],
	["e2", 52],
	["f2", 53],
	["g2", 54],
	["h2", 55],
	["a1", 56],
	["b1", 57],
	["c1", 58],
	["d1", 59],
	["e1", 60],
	["f1", 61],
	["g1", 62],
	["h1", 63]
]);

const boardIndex = new Map([
	["a8", "00"],
	["b8", "01"],
	["c8", "02"],
	["d8", "03"],
	["e8", "04"],
	["f8", "05"],
	["g8", "06"],
	["h8", "07"],
	["a7", "10"],
	["b7", "11"],
	["c7", "12"],
	["d7", "13"],
	["e7", "14"],
	["f7", "15"],
	["g7", "16"],
	["h7", "17"],
	["a6", "20"],
	["b6", "21"],
	["c6", "22"],
	["d6", "23"],
	["e6", "24"],
	["f6", "25"],
	["g6", "26"],
	["h6", "27"],
	["a5", "30"],
	["b5", "31"],
	["c5", "32"],
	["d5", "33"],
	["e5", "34"],
	["f5", "35"],
	["g5", "36"],
	["h5", "37"],
	["a4", "40"],
	["b4", "41"],
	["c4", "42"],
	["d4", "43"],
	["e4", "44"],
	["f4", "45"],
	["g4", "46"],
	["h4", "47"],
	["a3", "50"],
	["b3", "51"],
	["c3", "52"],
	["d3", "53"],
	["e3", "54"],
	["f3", "55"],
	["g3", "56"],
	["h3", "57"],
	["a2", "60"],
	["b2", "61"],
	["c2", "62"],
	["d2", "63"],
	["e2", "64"],
	["f2", "65"],
	["g2", "66"],
	["h2", "67"],
	["a1", "70"],
	["b1", "71"],
	["c1", "72"],
	["d1", "73"],
	["e1", "74"],
	["f1", "75"],
	["g1", "76"],
	["h1", "77"]
]);

let board = [
	[8, 4, 6, 10, 12, 6, 4, 8],
	[2, 2, 2, 2, 2, 2, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[7, 3, 5, 9, 11, 5, 3, 7]
];

let legalMoves = new Map();
let enPassant = new Map();

let currentSquareOver = "none";
let pickedSquare = "none";
let move = 0; // 0 == white to move, 1 == black to move
let whiteShortCastle = true;
let whiteLongCastle = true;
let blackShortCastle = true;
let blackLongCastle = true;

window.onload = function() {
	drawBoard();
	cursor_piece.style.width = a8.offsetWidth + "px";
	cursor_piece.style.height = a8.offsetHeight + "px";
};

function moveCursorPiece(event) {
	cursor_piece.style.left = (event.clientX - (a8.offsetWidth / 2)) + "px";
	cursor_piece.style.top = (event.clientY - (a8.offsetHeight / 2)) + "px";
};

function drawBoard() {
	let currentSquare = 0;
	checkLegalMoves();
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] > 0) {
				square[currentSquare].style.backgroundImage = arrayToPiecePath.get(board[i][j]);
			} else {
				square[currentSquare].style.backgroundImage = "none";
			}
			currentSquare++;
		}
	}
};

function checkPawn(index1, index2) {
	let moves = [];
	let tempIndex = "";
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	if (board[index1][index2] % 2 != 0) {
		if (board[index1 - 1][index2] == 0) {
			pushIndex = "" + (index1 - 1) + index2;
			moves.push(pushIndex);
			if (index1 == 6 && board[4][index2] == 0) {
				pushIndex = "4" + index2;
				moves.push(pushIndex);
			}
		}
		if (board[index1 - 1][index2 + 1] % 2 == 0 && board[index1 - 1][index2 + 1] != 0) {
			pushIndex = "" + (index1 - 1) + (index2 + 1);
			moves.push(pushIndex);
		}
		if (board[index1 - 1][index2 - 1] % 2 == 0 && board[index1 - 1][index2 - 1] != 0) {
			pushIndex = "" + (index1 - 1) + (index2 - 1);
			moves.push(pushIndex);
		}
		if (board[index1][index2 + 1] == 2) {
			tempIndex = index1 + (index2 + 1);
			if (enPassant.has(tempIndex)) {
				pushIndex = "" + (index1 - 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
		if (board[index1][index2 - 1] == 2) {
			tempIndex = index1 + (index2 - 1);
			if (enPassant.has(tempIndex)) {
				pushIndex = "" + (index1 - 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	} else {
		if (board[index1 + 1][index2] == 0) {
			pushIndex = "" + (index1 + 1) + index2;
			moves.push(pushIndex);
			if (index1 == 1 && board[3][index2] == 0) {
				pushIndex = "3" + index2;
				moves.push(pushIndex);
			}
		}
		if (board[index1 + 1][index2 + 1] % 2 != 0 && index2 + 1 != 8) {
			pushIndex = "" + (index1 + 1) + (index2 + 1);
			moves.push(pushIndex);
		}
		if (board[index1 + 1][index2 - 1] % 2 != 0 && index2 - 1 != -1) {
			pushIndex = "" + (index1 + 1) + (index2 - 1);
			moves.push(pushIndex);
		}
		if (board[index1][index2 + 1] == 1) {
			tempIndex = index1 + (index2 + 1);
			if (enPassant.has(tempIndex)) {
				pushIndex = "" + (index1 + 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
		if (board[index1][index2 - 1] == 1) {
			tempIndex = index1 + (index2 - 1);
			if (enPassant.has(tempIndex)) {
				pushIndex = "" + (index1 + 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		}	
	}
	legalMoves.set(index, moves);
};

function checkKnight(index1, index2) {
	let moves = [];
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	if (index1 - 2  >= 0 && index2 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 2][index2 + 1] % 2 == 0) {
				pushIndex = "" + (index1 - 2) + (index2 + 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 2][index2 + 1] == 0 || board[index1 - 2][index2 + 1] % 2 != 0) {
				pushIndex = "" + (index1 - 2) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 - 1  >= 0 && index2 + 2 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 1][index2 + 2] % 2 == 0) {
				pushIndex = "" + (index1 - 1) + (index2 + 2);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 1][index2 + 2] == 0 || board[index1 - 1][index2 + 2] % 2 != 0) {
				pushIndex = "" + (index1 - 1) + (index2 + 2);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 1 < 8 && index2 + 2 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 1][index2 + 2] % 2 == 0) {
				pushIndex = "" + (index1 + 1) + (index2 + 2);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 1][index2 + 2] == 0 || board[index1 + 1][index2 + 2] % 2 != 0) {
				pushIndex = "" + (index1 + 1) + (index2 + 2);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 2 < 8 && index2 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 2][index2 + 1] % 2 == 0) {
				pushIndex = "" + (index1 + 2) + (index2 + 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 2][index2 + 1] == 0 || board[index1 + 2][index2 + 1] % 2 != 0) {
				pushIndex = "" + (index1 + 2) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 2 < 8 && index2 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 2][index2 - 1] % 2 == 0) {
				pushIndex = "" + (index1 + 2) + (index2 - 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 2][index2 - 1] == 0 || board[index1 + 2][index2 - 1] % 2 != 0) {
				pushIndex = "" + (index1 + 2) + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 1 < 8 && index2 - 2 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 1][index2 - 2] % 2 == 0) {
				pushIndex = "" + (index1 + 1) + (index2 - 2);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 1][index2 - 2] == 0 || board[index1 + 1][index2 - 2] % 2 != 0) {
				pushIndex = "" + (index1 + 1) + (index2 - 2);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 - 1 >= 0 && index2 - 2 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 1][index2 - 2] % 2 == 0) {
				pushIndex = "" + (index1 - 1) + (index2 - 2);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 1][index2 - 2] == 0 || board[index1 - 1][index2 - 2] % 2 != 0) {
				pushIndex = "" + (index1 - 1) + (index2 - 2);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 - 2 >= 0 && index2 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 2][index2 - 1] % 2 == 0) {
				pushIndex = "" + (index1 - 2) + (index2 - 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 2][index2 - 1] == 0 || board[index1 - 2][index2 - 1] % 2 != 0) {
				pushIndex = "" + (index1 - 2) + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	}
	legalMoves.set(index, moves);
};

function checkBishop(index1, index2) {
	let moves = [];
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	let j = index2 + 1;
	for (let i = index1 - 1; (i >= 0 && j < 8); i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j++;
	}
	j = index2 + 1;
	for (let i = index1 + 1; (i < 8 && j < 8); i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j++;
	}
	j = index2 - 1;
	for (let i = index1 + 1; (i < 8 && j >= 0); i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j--;
	}
	j = index2 - 1;
	for (let i = index1 - 1; (i >= 0 && j >= 0); i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j--;
	}
	legalMoves.set(index, moves);
};

function checkRook(index1, index2) {
	let moves = [];
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	for (let i = index1 - 1; i >= 0; i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 != 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index2 + 1; i < 8; i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 != 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index1 + 1; i < 8; i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 != 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index2 - 1; i >= 0; i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 != 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	legalMoves.set(index, moves);
};

function checkQueen(index1, index2) {
	let moves = [];
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	for (let i = index1 - 1; i >= 0; i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 != 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index2 + 1; i < 8; i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 != 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index1 + 1; i < 8; i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[i][index2] == 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
			} else if (board[i][index2] % 2 != 0) {
				pushIndex = "" + i + index2;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	for (let i = index2 - 1; i >= 0; i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		} else {
			if (board[index1][i] == 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
			} else if (board[index1][i] % 2 != 0) {
				pushIndex = "" + index1 + i;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
	}
	let j = index2 + 1;
	for (let i = index1 - 1; (i >= 0 && j < 8); i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j++;
	}
	j = index2 + 1;
	for (let i = index1 + 1; (i < 8 && j < 8); i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j++;
	}
	j = index2 - 1;
	for (let i = index1 + 1; (i < 8 && j >= 0); i++) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j--;
	}
	j = index2 - 1;
	for (let i = index1 - 1; (i >= 0 && j >= 0); i--) {
		if (board[index1][index2] % 2 != 0) {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}		
		} else {
			if (board[i][j] == 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
			} else if (board[i][j] % 2 != 0) {
				pushIndex = "" + i + j;
				moves.push(pushIndex);
				break;
			} else {
				break;
			}
		}
		j--;
	}
	legalMoves.set(index, moves);
};

function checkKing(index1, index2) {
	let moves = [];
	let pushIndex = "";
	let index = "";
	index = "" + index1 + index2;
	if (index1 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 1][index2] % 2 == 0) {
				pushIndex = "" + (index1 - 1) + index2;
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 1][index2] == 0 || board[index1 - 1][index2] % 2 != 0) {
				pushIndex = "" + (index1 - 1) + index2;
				moves.push(pushIndex);
			}
		}
	}
	if (index1 - 1 >= 0 && index2 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 1][index2 + 1] % 2 == 0) {
				pushIndex = "" + (index1 - 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 1][index2 + 1] == 0 || board[index1 - 1][index2 + 1] % 2 != 0) {
				pushIndex = "" + (index1 - 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index2 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][index2 + 1] % 2 == 0) {
				pushIndex = "" + index1 + (index2 + 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1][index2 + 1] == 0 || board[index1][index2 + 1] % 2 != 0) {
				pushIndex = "" + index1 + (index2 + 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 1 < 8 && index2 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 1][index2 + 1] % 2 == 0) {
				pushIndex = "" + (index1 + 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 1][index2 + 1] == 0 || board[index1 + 1][index2 + 1] % 2 != 0) {
				pushIndex = "" + (index1 + 1) + (index2 + 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 1 < 8) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 1][index2] % 2 == 0) {
				pushIndex = "" + (index1 + 1) + index2;
				moves.push(pushIndex);
					}
		} else {
			if (board[index1 + 1][index2] == 0 || board[index1 + 1][index2] % 2 != 0) {
				pushIndex = "" + (index1 + 1) + index2;
				moves.push(pushIndex);
			}
		}
	}
	if (index1 + 1 < 8 && index2 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 + 1][index2 - 1] % 2 == 0) {
				pushIndex = "" + (index1 + 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 + 1][index2 - 1] == 0 || board[index1 + 1][index2 - 1] % 2 != 0) {
				pushIndex = "" + (index1 + 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index2 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1][index2 - 1] % 2 == 0) {
				pushIndex = "" + index1 + (index2 - 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1][index2 - 1] == 0 || board[index1][index2 - 1] % 2 != 0) {
				pushIndex = "" + index1 + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	}
	if (index1 - 1 >= 0 && index2 - 1 >= 0) {
		if (board[index1][index2] % 2 != 0) {
			if (board[index1 - 1][index2 - 1] % 2 == 0) {
				pushIndex = "" + (index1 - 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		} else {
			if (board[index1 - 1][index2 - 1] == 0 || board[index1 - 1][index2 - 1] % 2 != 0) {
				pushIndex = "" + (index1 - 1) + (index2 - 1);
				moves.push(pushIndex);
			}
		}
	}
	if (board[index1][index2] % 2 != 0) {
		if (whiteShortCastle == true) {
			if (board[index1][index2 + 1] == 0 && board[index1][index2 + 2] == 0) {
				pushIndex = "" + index1 + (index2 + 2);
				moves.push(pushIndex);
			}
		}
		if (whiteLongCastle == true) {
			if (board[index1][index2 - 1] == 0 && board[index1][index2 - 2] == 0 && board[index1][index2 - 3] == 0) {
				pushIndex = "" + index1 + (index2 - 2);
				moves.push(pushIndex);
			}
		}
	} else {
		if (blackShortCastle == true) {
			if (board[index1][index2 + 1] == 0 && board[index1][index2 + 2] == 0) {
				pushIndex = "" + index1 + (index2 + 2);
				moves.push(pushIndex);
			}
		}
		if (blackLongCastle == true) {
			if (board[index1][index2 - 1] == 0 && board[index1][index2 - 2] == 0 && board[index1][index2 - 3] == 0) {
				pushIndex = "" + index1 + (index2 - 2);
				moves.push(pushIndex);
			}
		}
	}
	legalMoves.set(index, moves);
};

function checkLegalMoves() {
	legalMoves.clear();
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i][j] == 1 || board[i][j] == 2) {
				checkPawn(i, j);
			} else if (board[i][j] == 3 || board[i][j] == 4) {
				checkKnight(i, j);
			} else if (board[i][j] == 5 || board[i][j] == 6) {
				checkBishop(i, j);
			} else if (board[i][j] == 7 || board[i][j] == 8) {
				checkRook(i, j);
			} else if (board[i][j] == 9 || board[i][j] == 10) {
				checkQueen(i, j);
			} else if (board[i][j] == 11 || board[i][j] == 12) {
				checkKing(i, j);
			}
		}
	}
};

chessboard.addEventListener("mousedown", function() {
	let temp = (boardIndex.get(currentSquareOver)).split("");
	if (board[temp[0]][temp[1]] != 0) {
		pickedSquare = currentSquareOver;
		square[squareIndex.get(currentSquareOver)].style.visibility = "hidden";
		cursor_piece.style.backgroundImage = arrayToPiecePath.get(board[temp[0]][temp[1]]);
		cursor_piece.style.display = "flex";
	}
});

chessboard.addEventListener("mouseup", function() {
	cursor_piece.style.display = "none";
	let temp = (boardIndex.get(currentSquareOver)).split("");
	let temp2 = (boardIndex.get(pickedSquare)).split("");
	let temp3 = squareIndex.get(pickedSquare);
	let temp4 = boardIndex.get(currentSquareOver)
	if (board[temp2[0]][temp2[1]] != 0 && pickedSquare != currentSquareOver && (legalMoves.get(boardIndex.get(pickedSquare))).includes(boardIndex.get(currentSquareOver))) {
		board[temp[0]][temp[1]] = board[temp2[0]][temp2[1]];
		board[temp2[0]][temp2[1]] = 0;
		square[temp3].style.visibility = "visible";
		drawBoard();
	} else {
		square[temp3].style.visibility = "visible";
	}
});

document.addEventListener("dragstart", event => {
	event.preventDefault();
});

a8.addEventListener("mouseover", function() {
	currentSquareOver = "a8";
});
b8.addEventListener("mouseover", function() {
	currentSquareOver = "b8";
});
c8.addEventListener("mouseover", function() {
	currentSquareOver = "c8";
});
d8.addEventListener("mouseover", function() {
	currentSquareOver = "d8";
});
e8.addEventListener("mouseover", function() {
	currentSquareOver = "e8";
});
f8.addEventListener("mouseover", function() {
	currentSquareOver = "f8";
});
g8.addEventListener("mouseover", function() {
	currentSquareOver = "g8";
});
h8.addEventListener("mouseover", function() {
	currentSquareOver = "h8";
});
a7.addEventListener("mouseover", function() {
	currentSquareOver = "a7";
});
b7.addEventListener("mouseover", function() {
	currentSquareOver = "b7";
});
c7.addEventListener("mouseover", function() {
	currentSquareOver = "c7";
});
d7.addEventListener("mouseover", function() {
	currentSquareOver = "d7";
});
e7.addEventListener("mouseover", function() {
	currentSquareOver = "e7";
});
f7.addEventListener("mouseover", function() {
	currentSquareOver = "f7";
});
g7.addEventListener("mouseover", function() {
	currentSquareOver = "g7";
});
h7.addEventListener("mouseover", function() {
	currentSquareOver = "h7";
});
a6.addEventListener("mouseover", function() {
	currentSquareOver = "a6";
});
b6.addEventListener("mouseover", function() {
	currentSquareOver = "b6";
});
c6.addEventListener("mouseover", function() {
	currentSquareOver = "c6";
});
d6.addEventListener("mouseover", function() {
	currentSquareOver = "d6";
});
e6.addEventListener("mouseover", function() {
	currentSquareOver = "e6";
});
f6.addEventListener("mouseover", function() {
	currentSquareOver = "f6";
});
g6.addEventListener("mouseover", function() {
	currentSquareOver = "g6";
});
h6.addEventListener("mouseover", function() {
	currentSquareOver = "h6";
});
a5.addEventListener("mouseover", function() {
	currentSquareOver = "a5";
});
b5.addEventListener("mouseover", function() {
	currentSquareOver = "b5";
});
c5.addEventListener("mouseover", function() {
	currentSquareOver = "c5";
});
d5.addEventListener("mouseover", function() {
	currentSquareOver = "d5";
});
e5.addEventListener("mouseover", function() {
	currentSquareOver = "e5";
});
f5.addEventListener("mouseover", function() {
	currentSquareOver = "f5";
});
g5.addEventListener("mouseover", function() {
	currentSquareOver = "g5";
});
h5.addEventListener("mouseover", function() {
	currentSquareOver = "h5";
});
a4.addEventListener("mouseover", function() {
	currentSquareOver = "a4";
});
b4.addEventListener("mouseover", function() {
	currentSquareOver = "b4";
});
c4.addEventListener("mouseover", function() {
	currentSquareOver = "c4";
});
d4.addEventListener("mouseover", function() {
	currentSquareOver = "d4";
});
e4.addEventListener("mouseover", function() {
	currentSquareOver = "e4";
});
f4.addEventListener("mouseover", function() {
	currentSquareOver = "f4";
});
g4.addEventListener("mouseover", function() {
	currentSquareOver = "g4";
});
h4.addEventListener("mouseover", function() {
	currentSquareOver = "h4";
});
a3.addEventListener("mouseover", function() {
	currentSquareOver = "a3";
});
b3.addEventListener("mouseover", function() {
	currentSquareOver = "b3";
});
c3.addEventListener("mouseover", function() {
	currentSquareOver = "c3";
});
d3.addEventListener("mouseover", function() {
	currentSquareOver = "d3";
});
e3.addEventListener("mouseover", function() {
	currentSquareOver = "e3";
});
f3.addEventListener("mouseover", function() {
	currentSquareOver = "f3";
});
g3.addEventListener("mouseover", function() {
	currentSquareOver = "g3";
});
h3.addEventListener("mouseover", function() {
	currentSquareOver = "h3";
});
a2.addEventListener("mouseover", function() {
	currentSquareOver = "a2";
});
b2.addEventListener("mouseover", function() {
	currentSquareOver = "b2";
});
c2.addEventListener("mouseover", function() {
	currentSquareOver = "c2";
});
d2.addEventListener("mouseover", function() {
	currentSquareOver = "d2";
});
e2.addEventListener("mouseover", function() {
	currentSquareOver = "e2";
});
f2.addEventListener("mouseover", function() {
	currentSquareOver = "f2";
});
g2.addEventListener("mouseover", function() {
	currentSquareOver = "g2";
});
h2.addEventListener("mouseover", function() {
	currentSquareOver = "h2";
});
a1.addEventListener("mouseover", function() {
	currentSquareOver = "a1";
});
b1.addEventListener("mouseover", function() {
	currentSquareOver = "b1";
});
c1.addEventListener("mouseover", function() {
	currentSquareOver = "c1";
});
d1.addEventListener("mouseover", function() {
	currentSquareOver = "d1";
});
e1.addEventListener("mouseover", function() {
	currentSquareOver = "e1";
});
f1.addEventListener("mouseover", function() {
	currentSquareOver = "f1";
});
g1.addEventListener("mouseover", function() {
	currentSquareOver = "g1";
});
h1.addEventListener("mouseover", function() {
	currentSquareOver = "h1";
});

// for loop to flip the board
/*
window.onload = function() {
	for (let i = 0; i < square.length; i++) {
		square[i].style.order = i + 1;
	}
};

function keybinds(event) {
	if (event.key === "f") {
		event.preventDefault();
		for (let i = 0; i < square.length; i++) {
			square[i].style.order = 64 - square[i].style.order;
		}
	}
};
*/
