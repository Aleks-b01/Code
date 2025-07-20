const title = document.getElementById("title");
const logo = document.getElementById("logo");
const nav = document.getElementsByTagName("nav")[0];
const burgerBtn = document.getElementById("burgerBtn");
const navX = document.getElementById("navX");
const homeLink = document.getElementById("homeLink");
const workLink = document.getElementById("workLink");
const aboutmeLink = document.getElementById("aboutmeLink");
const contactLink = document.getElementById("contactLink");
const home = document.getElementById("home");
const home_workLink = document.getElementById("home_workLink");
const home_preview_card = document.getElementById("home_preview_card");
const home_preview_card_arrowRight = document.getElementById("home_preview_card_arrowRight");
const home_preview_card_arrowLeft = document.getElementById("home_preview_card_arrowLeft");
const work = document.getElementById("work");
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");

let home_preview_current_card = 1;

burgerBtn.addEventListener("click", function() {
	nav.style.display = "flex";
	burgerBtn.style.display = "none";
	navX.style.display = "inline";
});

function closeNav() {
	nav.style.display = "none";
	navX.style.display = "none";
	burgerBtn.style.display = "flex";
};

navX.addEventListener("click", function() {
	closeNav();
});

logo.addEventListener("click", function() {
	closeNav();
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home.style.display = "flex";
	workLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "none";
	homeLink.style.textDecorationLine = "underline";
	title.innerText = "Home | Aleksander Bober";
});

homeLink.addEventListener("click", function() {
	closeNav();
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home.style.display = "flex";
	workLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "none";
	homeLink.style.textDecorationLine = "underline";
	title.innerText = "Home | Aleksander Bober";
});

workLink.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	work.style.display = "flex";
	homeLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "none";
	workLink.style.textDecorationLine = "underline";
	title.innerText = "Work | Aleksander Bober";
});

aboutmeLink.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	contact.style.display = "none";
	aboutme.style.display = "flex";
	homeLink.style.textDecorationLine = "none";
	workLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "underline";
	title.innerText = "About Me | Aleksander Bober";
});

contactLink.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "flex";
	homeLink.style.textDecorationLine = "none";
	workLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "underline";
	title.innerText = "Contact | Aleksander Bober";
});

home_workLink.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	work.style.display = "flex";
	homeLink.style.textDecorationLine = "none";
	aboutmeLink.style.textDecorationLine = "none";
	contactLink.style.textDecorationLine = "none";
	workLink.style.textDecorationLine = "underline";
	title.innerText = "Work | Aleksander Bober";
});

home_preview_card_arrowRight.addEventListener("click", function() {
	if (home_preview_current_card == 1) {
		home_preview_card.style.backgroundColor = "gray";
		home_preview_card_arrowLeft.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card.style.backgroundColor = "blue";
		home_preview_card_arrowRight.style.visibility = "hidden";
		home_preview_current_card = 3;
	}
});

home_preview_card_arrowLeft.addEventListener("click", function() {
	if (home_preview_current_card == 3) {
		home_preview_card.style.backgroundColor = "gray";
		home_preview_card_arrowRight.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card.style.backgroundColor = "black";
		home_preview_card_arrowLeft.style.visibility = "hidden";
		home_preview_current_card = 1;
	}
});
