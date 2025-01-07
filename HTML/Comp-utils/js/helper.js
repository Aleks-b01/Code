// CO, 1 = cw 2 = ccw, cw means that it has been twisted cw from solved and vice versa (check movetwists to see what moves effect corners differently), EO, 0 = Oriented 1 = Unoriented, oriented means it can be put into it's position with the correct orientation with only R L U D moves
// Corners go: UBL, UBR, UFR, UFL, DFL, DFR, DBR, DFL
// Edges go: UB, UR, UF, UL, FL, FR, BR, BL, DL, DF, DR, DB

let temp = 0;
let c333 = [0, 1, 2, 3, 4, 5, 6, 7];
let e333 = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11];
let co333 = [0, 0, 0, 0, 0, 0, 0, 0];
let eo333 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function R333() {
	temp = c333[1];
	c333[1] = c333[2];
	c333[2] = c333[5];
	c333[5] = c333[6];
	c333[6] = temp;
	temp = e333[1];
	e333[1] = e333[5];
	e333[5] = e333[10];
	e333[10] = e333[6];
	e333[6] = temp;
	switch (co333[1]) {
		case 0:
			co333[1] = 2;
			break;
		case 1:
			co333[1] = 0;
			break;
		case 2:
			co333[1] = 1;
			break;
	}
	switch (co333[2]) {
		case 0:
			co333[2] = 1;
			break;
		case 1:
			co333[2] = 2;
			break;
		case 2:
			co333[2] = 0;
			break;
	}
	switch (co333[6]) {
		case 0:
			co333[6] = 2;
			break;
		case 1:
			co333[6] = 0;
			break;
		case 2:
			co333[6] = 1;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 1;
			break;
		case 1:
			co333[7] = 2;
			break;
		case 2:
			co333[7] = 0;
			break;
	}
};

function RP333() {
	temp = c333[1];
	c333[1] = c333[6];
	c333[6] = c333[5];
	c333[5] = c333[2];
	c333[2] = temp;
	temp = e333[1];
	e333[1] = e333[6];
	e333[6] = e333[10];
	e333[10] = e333[5];
	e333[5] = temp;
	switch (co333[1]) {
		case 0:
			co333[1] = 2;
			break;
		case 1:
			co333[1] = 0;
			break;
		case 2:
			co333[1] = 1;
			break;
	}
	switch (co333[2]) {
		case 0:
			co333[2] = 1;
			break;
		case 1:
			co333[2] = 2;
			break;
		case 2:
			co333[2] = 0;
			break;
	}
	switch (co333[6]) {
		case 0:
			co333[6] = 2;
			break;
		case 1:
			co333[6] = 0;
			break;
		case 2:
			co333[6] = 1;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 1;
			break;
		case 1:
			co333[7] = 2;
			break;
		case 2:
			co333[7] = 0;
			break;
	}
};

function L333() {
	temp = c333[0];
	c333[0] = c333[7];
	c333[7] = c333[4];
	c333[4] = c333[3];
	c333[3] = temp;
	temp = e333[3];
	e333[3] = e333[7];
	e333[7] = e333[8];
	e333[8] = e333[4];
	e333[4] = temp;
	switch (co333[0]) {
		case 0:
			co333[0] = 1;
			break;
		case 1:
			co333[0] = 2;
			break;
		case 2:
			co333[0] = 0;
			break;
	}
	switch (co333[3]) {
		case 0:
			co333[3] = 2;
			break;
		case 1:
			co333[3] = 0;
			break;
		case 2:
			co333[3] = 1;
			break;
	}
	switch (co333[4]) {
		case 0:
			co333[4] = 1;
			break;
		case 1:
			co333[4] = 2;
			break;
		case 2:
			co333[4] = 0;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 2;
			break;
		case 1:
			co333[7] = 0;
			break;
		case 2:
			co333[7] = 1;
			break;
	}
};

function LP333() {
	temp = c333[0];
	c333[0] = c333[3];
	c333[3] = c333[4];
	c333[4] = c333[7];
	c333[7] = temp;
	temp = e333[3];
	e333[3] = e333[4];
	e333[4] = e333[8];
	e333[8] = e333[7];
	e333[7] = temp;
	switch (co333[0]) {
		case 0:
			co333[0] = 1;
			break;
		case 1:
			co333[0] = 2;
			break;
		case 2:
			co333[0] = 0;
			break;
	}
	switch (co333[3]) {
		case 0:
			co333[3] = 2;
			break;
		case 1:
			co333[3] = 0;
			break;
		case 2:
			co333[3] = 1;
			break;
	}
	switch (co333[4]) {
		case 0:
			co333[4] = 1;
			break;
		case 1:
			co333[4] = 2;
			break;
		case 2:
			co333[4] = 0;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 2;
			break;
		case 1:
			co333[7] = 0;
			break;
		case 2:
			co333[7] = 1;
			break;
	}
};

function U333() {
	temp = c333[0];
	c333[0] = c333[3];
	c333[3] = c333[2];
	c333[2] = c333[1];
	c333[1] = temp;
	temp = e333[0];
	e333[0] = e333[3];
	e333[3] = e333[2];
	e333[2] = e333[1];
	e333[1] = temp;
};

function UP333() {
	temp = c333[0];
	c333[0] = c333[1];
	c333[1] = c333[2];
	c333[2] = c333[3];
	c333[3] = temp;
	temp = e333[0];
	e333[0] = e333[1];
	e333[1] = e333[2];
	e333[2] = e333[3];
	e333[3] = temp;
};

function D333() {
	temp = c333[4];
	c333[4] = c333[7];
	c333[7] = c333[6];
	c333[6] = c333[5];
	c333[5] = temp;
	temp = e333[8];
	e333[8] = e333[11];
	e333[11] = e333[10];
	e333[10] = e333[9];
	e333[9] = temp;
};

function DP333() {
	temp = c333[4];
	c333[4] = c333[5];
	c333[5] = c333[6];
	c333[6] = c333[7];
	c333[7] = temp;
	temp = e333[8];
	e333[8] = e333[9];
	e333[9] = e333[10];
	e333[10] = e333[11];
	e333[11] = temp;
};

function F333() {
	temp = c333[2];
	c333[2] = c333[3];
	c333[3] = c333[4];
	c333[4] = c333[5];
	c333[5] = temp;
	temp = e333[2];
	e333[2] = e333[4];
	e333[4] = e333[9];
	e333[9] = e333[5];
	e333[5] = temp;
	switch (co333[2]) {
		case 0:
			co333[2] = 2;
			break;
		case 1:
			co333[2] = 0;
			break;
		case 2:
			co333[2] = 1;
			break;
	}
	switch (co333[3]) {
		case 0:
			co333[3] = 1;
			break;
		case 1:
			co333[3] = 2;
			break;
		case 2:
			co333[3] = 0;
			break;
	}
	switch (co333[4]) {
		case 0:
			co333[4] = 2;
			break;
		case 1:
			co333[4] = 0;
			break;
		case 2:
			co333[4] = 1;
			break;
	}
	switch (co333[5]) {
		case 0:
			co333[5] = 1;
			break;
		case 1:
			co333[5] = 2;
			break;
		case 2:
			co333[5] = 0;
			break;
	}
	switch (eo333[2]) {
		case 0:
			eo333[2] = 1;
			break;
		case 1:
			eo333[2] = 0;
			break;
	}
	switch (eo333[4]) {
		case 0:
			eo333[4] = 1;
			break;
		case 1:
			eo333[4] = 0;
			break;
	}
	switch (eo333[9]) {
		case 0:
			eo333[9] = 1;
			break
		case 1:
			eo333[9] = 0;
			break;
	}
	switch (eo333[5]) {
		case 0:
			eo333[5] = 1;
			break;
		case 1:
			eo333[5] = 0;
			break;
	}
};

function FP333() {
	temp = c333[2];
	c333[2] = c333[5];
	c333[5] = c333[4];
	c333[4] = c333[3];
	c333[3] = temp;
	temp = e333[2];
	e333[2] = e333[5];
	e333[5] = e333[9];
	e333[9] = e333[4];
	e333[4] = temp;
	switch (co333[2]) {
		case 0:
			co333[2] = 2;
			break;
		case 1:
			co333[2] = 0;
			break;
		case 2:
			co333[2] = 1;
			break;
	}
	switch (co333[5]) {
		case 0:
			co333[5] = 1;
			break;
		case 1:
			co333[5] = 2;
			break;
		case 2:
			co333[5] = 0;
			break;
	}
	switch (co333[4]) {
		case 0:
			co333[4] = 2;
			break;
		case 1:
			co333[4] = 0;
			break;
		case 2:
			co333[4] = 1;
			break;
	}
	switch (co333[3]) {
		case 0:
			co333[3] = 1;
			break;
		case 1:
			co333[3] = 2;
			break;
		case 2:
			co333[3] = 0;
			break;
	}
	switch (eo333[2]) {
		case 0:
			eo333[2] = 1;
			break;
		case 1:
			eo333[2] = 0;
			break;
	}
	switch (eo333[4]) {
		case 0:
			eo333[4] = 1;
			break;
		case 1:
			eo333[4] = 0;
			break;
	}
	switch (eo333[5]) {
		case 0:
			eo333[5] = 1;
			break
		case 1:
			eo333[5] = 0;
			break;
	}
	switch (eo333[9]) {
		case 0:
			eo333[9] = 1;
			break;
		case 1:
			eo333[9] = 0;
			break;
	}
};

function B333() {
	temp = c333[0];
	c333[0] = c333[1];
	c333[1] = c333[6];
	c333[6] = c333[7];
	c333[7] = temp;
	temp = e333[0];
	e333[0] = e333[6];
	e333[6] = e333[11];
	e333[11] = e333[7];
	e333[7] = temp;
	switch (co333[0]) {
		case 0:
			co333[0] = 2;
			break;
		case 1:
			co333[0] = 0;
			break;
		case 2:
			co333[0] = 1;
			break;
	}
	switch (co333[1]) {
		case 0:
			co333[1] = 1;
			break;
		case 1:
			co333[1] = 2;
			break;
		case 2:
			co333[1] = 0;
			break;
	}
	switch (co333[6]) {
		case 0:
			co333[6] = 2;
			break;
		case 1:
			co333[6] = 0;
			break;
		case 2:
			co333[6] = 1;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 1;
			break;
		case 1:
			co333[7] = 2;
			break;
		case 2:
			co333[7] = 0;
			break;
	}
	switch (eo333[0]) {
		case 0:
			eo333[0] = 1;
			break;
		case 1:
			eo333[0] = 0;
			break;
	}
	switch (eo333[6]) {
		case 0:
			eo333[6] = 1;
			break;
		case 1:
			eo333[6] = 0;
			break;
	}
	switch (eo333[7]) {
		case 0:
			eo333[7] = 1;
			break
		case 1:
			eo333[7] = 0;
			break;
	}
	switch (eo333[11]) {
		case 0:
			eo333[11] = 1;
			break;
		case 1:
			eo333[11] = 0;
			break;
	}
};

function BP333() {
	temp = c333[0];
	c333[0] = c333[7];
	c333[7] = c333[6];
	c333[6] = c333[1];
	c333[1] = temp;
	temp = e333[0];
	e333[0] = e333[7];
	e333[7] = e333[11];
	e333[11] = e333[6];
	e333[6] = temp;
	switch (co333[0]) {
		case 0:
			co333[0] = 2;
			break;
		case 1:
			co333[0] = 0;
			break;
		case 2:
			co333[0] = 1;
			break;
	}
	switch (co333[1]) {
		case 0:
			co333[1] = 1;
			break;
		case 1:
			co333[1] = 2;
			break;
		case 2:
			co333[1] = 0;
			break;
	}
	switch (co333[6]) {
		case 0:
			co333[6] = 2;
			break;
		case 1:
			co333[6] = 0;
			break;
		case 2:
			co333[6] = 1;
			break;
	}
	switch (co333[7]) {
		case 0:
			co333[7] = 1;
			break;
		case 1:
			co333[7] = 2;
			break;
		case 2:
			co333[7] = 0;
			break;
	}
	switch (eo333[0]) {
		case 0:
			eo333[0] = 1;
			break;
		case 1:
			eo333[0] = 0;
			break;
	}
	switch (eo333[6]) {
		case 0:
			eo333[6] = 1;
			break;
		case 1:
			eo333[6] = 0;
			break;
	}
	switch (eo333[7]) {
		case 0:
			eo333[7] = 1;
			break
		case 1:
			eo333[7] = 0;
			break;
	}
	switch (eo333[11]) {
		case 0:
			eo333[11] = 1;
			break;
		case 1:
			eo333[11] = 0;
			break;
	}
};
