document.addEventListener('DOMContentLoaded', function() {

const oneman = document.getElementById('oneman');
const twoman = document.getElementById('twoman');
const menu = document.getElementById('menu');
const twomanname = document.getElementById('twomanname');
const first = document.getElementById('first');
const second = document.getElementById('second');
const onemancalc = document.getElementById('onemancalc');
const o = document.getElementById('o');
const timeoneo = document.getElementById('timeoneo');
const timetwoo = document.getElementById('timetwoo');
const timethreeo = document.getElementById('timethreeo');
const timefouro = document.getElementById('timefouro');
const timefiveo = document.getElementById('timefiveo');
const time = document.getElementById('time');
const oavg = document.getElementById('oavg');
const besto = document.getElementById('besto');
const worsto = document.getElementById('worsto');
const bpao = document.getElementById('bpao');
const wpao = document.getElementById('wpao');
const want = document.getElementById('want');
const avgo = document.getElementById('avgo');
const twomancalc = document.getElementById('twomancalc');
const manone = document.getElementById('manone');
const nameone = document.getElementById('nameone');
const timeoneone = document.getElementById('timeoneone');
const timetwoone = document.getElementById('timetwoone');
const timethreeone = document.getElementById('timethreeone');
const timefourone = document.getElementById('timefourone');
const timefiveone = document.getElementById('timefiveone');
const timeone = document.getElementById('timeone');
const manoneavg = document.getElementById('manoneavg');
const bestone = document.getElementById('bestone');
const worstone = document.getElementById('worstone');
const bpaone = document.getElementById('bpaone');
const wpaone = document.getElementById('wpaone');
const winone = document.getElementById('winone');
const avgone = document.getElementById('avgone');
const mantwoavg = document.getElementById('mantwoavg');
const besttwo = document.getElementById('besttwo');
const worsttwo = document.getElementById('worsttwo');
const bpatwo = document.getElementById('bpatwo');
const wpatwo = document.getElementById('wpatwo');
const wintwo = document.getElementById('wintwo');
const avgtwo = document.getElementById('svgtwo');
const mantwo = document.getElementById('mantwo');
const nametwo = document.getElementById('nametwo');
const timeonetwo = document.getElementById('timeonetwo');
const timetwotwo = document.getElementById('timetwotwo');
const timethreetwo = document.getElementById('timethreetwo');
const timefourtwo = document.getElementById('timefourtwo');
const timefivetwo = document.getElementById('timefivtwo');
const timetwo = document.getElementById('timetwo');
const submit = document.getElementById('submit');
const submitx = document.getElementById('submitx');
const submity = document.getElementById('submity');
const submittime = document.getElementById('submittime');

let avgx = 0;
let avgy = 0;
let bx = 0;
let wx = 0;
let bpax = 0;
let wpax = 0;
let needx = 0;
let by = 0;
let wy = 0;
let bpay = 0;
let wpay = 0;
let needy = 0;
let timei = [];
let timex = [];
let timey = [];
let timecount = 0;
let timexcount = 0;
let timeycount = 0;
let best = 0;
let worst = 0;
let bestx = 0;
let worstx = 0;
let besty = 0;
let worsty = 0;
let bestplace = 0;
let worstplace = 0;
let bestxplace = 0;
let worstxplace = 0;
let bestyplace = 0;
let worstyplace = 0;

// Until the next comment this is just giving functionality to all of the Submit buttons, probably gonna remove this in the future tho and replace it with just hitting enter
oneman.onclick = function() {
	menu.style.display = 'none';
	onemancalc.style.display = 'flex';
}

twoman.onclick = function() {
	menu.style.display = 'none';
	twomanname.style.display = 'flex';
}

submit.onclick = function() {
	processInputNames();
}

submittime.onclick = function() {
	processInput();
}

submitx.onclick = function() {
	processInputX()
}

submity.onclick = function() {
	processInputY()
}

// Processes the Names for Head to head
function processInputNames() {
	const NameOne = first.value;
	const NameTwo = second.value;
	nameone.innerText = NameOne;
	nametwo.innerText = NameTwo;
	first.value = '';
	second.value = '';
	twomanname.style.display = 'none';
	twomancalc.style.display = 'flex';
}

// Processes the time inputs for 1 Man mode
function processInput() {
	const timetemp = Number(time.value);
	timei.push(timetemp);
	time.value = '';
	timecount += 1;
	if (timecount == 1) {
		timeoneo.innerText ='1.  ' + timei[0];
		besto.innerText = 'Best:  ' + timei[0];
		best = timei[0];
	} else if (timecount == 2) {
		timetwoo.innerText ='2.  ' + timei[1];
		processBestWorst();
	} else if (timecount == 3) {
		timethreeo.innerText ='3.  ' + timei[2];
		processBestWorst();
	} else if (timecount == 4) {
		timefouro.innerText ='4.  ' + timei[3];
		processBestWorst();
	} else if (timecount == 5) {
		timefiveo.innerText ='5.  ' + timei[4];
		processBestWorst();
	} else {
		alert("cos sie zesralo");
	}
}

// Processes the time Inputs of the first person in Head to head
function processInputX() {
	const timetempx = timeone.value;
	timex.push(timetempx);
	timeone.value = '';
	timexcount += 1;
	if (timexcount == 1) {
		timeoneone.innerText ='1.  ' + timex[0];
	} else if (timexcount == 2) {
		timetwoone.innerText ='2.  ' + timex[1];
	} else if (timexcount == 3) {
		timethreeone.innerText ='3.  ' + timex[2];
	} else if (timexcount == 4) {
		timefourone.innerText ='4.  ' + timex[3];
	} else if (timexcount == 5) {
		timefiveone.innerText ='5.  ' + timex[4];
	}
}

// Processes the time Inputs of the second person in Head to head
function processInputY() {
	const timetempy = timetwo.value;
	timey.push(timetempy);
	timetwo.value = '';
	timeycount += 1;
	if (timeycount == 1) {
		timeonetwo.innerText ='1.  ' + timey[0];
	} else if (timeycount == 2) {
		timetwotwo.innerText ='2.  ' + timey[1];
	} else if (timeycount == 3) {
		timethreetwo.innerText ='3.  ' + timey[2];
	} else if (timeycount == 4) {
		timefourtwo.innerText ='4.  ' + timey[3];
	} else if (timeycount == 5) {
		timefivetwo.innerText ='5.  ' + timey[4];
	} else {
		alert("cos sie zesralo");
	}
}

// Decides wether any given time is faster or slower than the current best/worst for 1 Man mode
function processBestWorst() {
	if (timei[1] < best && timecount <= 2) {
		best = timei[1];
		besto.innerText = 'Best:  ' + best;
		bestplace = 1;
		worst = timei[0];
		worsto.innerText = 'Worst:  ' + worst;
		worstcount = 0;
	} else if (timei[1] > best && timecount <= 2) {
		best = timei[0];
		besto.innerText = 'Best:  ' + best;
		bestplace = 0;
		worst = timei[1];
		worsto.innerText = 'Worst:  ' + worst;
		worstcount = 1;
	} else if (timei[timecount - 1] < best && timecount >= 3) {
		best = timei[timecount - 1];
		besto.innerText = 'Best:  ' + best;
		bestplace = timecount - 1;
		processBPA();
		processWPA();
		processAVG();
	} else if (timei[timecount - 1] > worst && timecount >= 3) {
		worst = timei[timecount - 1];
		worsto.innerText = 'Worst:  ' + worst;
		worstplace = timecount - 1;
		processBPA();
		processWPA();
		processAVG();
	} else if (timecount == 4 || timecount == 5) {
		processBPA();
		processWPA();
		processAVG();
	}
}

// Calculates BPA for given mode/person when avalible
function processBPA() {
	if (timecount == 4) {
		let bpaitemp = timei[0] + timei[1] + timei[2] + timei[3] - worst;
		let bpai = bpaitemp / 3;
		bpao.innerText = 'BPA:  ' + bpai.toFixed(2);
	}
}

// Calculates WPA fro given mode/person when avalible
function processWPA() {
	if (timecount == 4) {
		let wpaitemp = timei[0] + timei[1] + timei[2] + timei[3] - best;
		let wpai = wpaitemp / 3;
		wpao.innerText = 'WPA:  ' + wpai.toFixed(2);
	}
}

// Calculates ao5 for given mode/person when avalible
function processAVG() {
	if (timecount == 5) {
		avgitemp = timei[0] + timei[1] + timei[2] + timei[3] + timei[4] - best - worst;
		avgi = avgitemp / 3;
		avgo.innerText = 'ao5:  ' + avgi.toFixed(2);
	}
}
});
