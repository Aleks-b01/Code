const title = document.getElementById("title");
const menu = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuX = document.getElementById("menuX");
const homeLink = document.getElementById("homeLink");
const workLink = document.getElementById("workLink");
const aboutmeLink = document.getElementById("aboutmeLink");
const contactLink = document.getElementById("contactLink");
const home = document.getElementById("home");
const work = document.getElementById("work");
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");

hamburgerBtn.addEventListener("click", function() {
	menu.style.display = "flex";
	hamburgerBtn.style.display = "none";
	menuX.style.display = "inline";
});

function closeMenu() {
	menu.style.display = "none";
	menuX.style.display = "none";
	hamburgerBtn.style.display = "flex";
};

menuX.addEventListener("click", function() {
	closeMenu();
});

homeLink.addEventListener("click", function() {
	closeMenu();
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
	closeMenu();
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
	closeMenu();
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
	closeMenu();
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
