const title = document.getElementsByTagName("title")[0];
const stylesheet = document.getElementsByTagName("link")[0];
const logo = document.getElementById("logo");
const nav = document.getElementsByTagName("nav")[0];
const switch_to_dark_mode = document.getElementById("switch_to_dark_mode");
const switch_to_light_mode = document.getElementById("switch_to_light_mode");
const burger_btn = document.getElementById("burger_btn");
const nav_close_btn = document.getElementById("nav_close_btn");
const home_link = document.getElementById("home_link");
const work_link = document.getElementById("work_link");
const aboutme_link = document.getElementById("aboutme_link");
const contact_link = document.getElementById("contact_link");
const home = document.getElementById("home");
const home_work_link = document.getElementById("home_work_link");
const home_preview_card = document.getElementById("home_preview_card");
const home_preview_card_arrow_right = document.getElementById("home_preview_card_arrow_right");
const home_preview_card_arrow_left = document.getElementById("home_preview_card_arrow_left");
const work = document.getElementById("work");
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");
const footer = document.getElementsByTagName("footer")[0];
const quick_nav_home_link = document.getElementById("quick_nav_home_link");
const quick_nav_work_link = document.getElementById("quick_nav_work_link");
const quick_nav_aboutme_link = document.getElementById("quick_nav_aboutme_link");
const quick_nav_contact_link = document.getElementById("quick_nav_contact_link");

let home_preview_current_card = 1;
let dark_mode = false;

window.onload = function() {
	title.innerText = "Home | Aleksander Bober";
	window.scrollTo(0, 0);
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		dark_mode = true;
		stylesheet.setAttribute('href', 'dark.css');
	}
};

switch_to_dark_mode.addEventListener("click", function() {
	dark_mode = true;
	stylesheet.setAttribute('href', 'dark.css');
	switch_to_dark_mode.style.display = "none";
	switch_to_light_mode.style.display = "flex";
});

switch_to_light_mode.addEventListener("click", function() {
	dark_mode = false;
	stylesheet.setAttribute('href', 'index.css');
	switch_to_light_mode.style.display = "none";
	switch_to_dark_mode.style.display = "flex";
});

burger_btn.addEventListener("click", function() {
	switch_to_dark_mode.style.display = "none";
	switch_to_light_mode.style.display = "none";
	nav.style.display = "flex";
	burger_btn.style.display = "none";
	nav_close_btn.style.display = "inline";
});

function closeNav() {
	nav.style.display = "none";
	nav_close_btn.style.display = "none";
	burger_btn.style.display = "flex";
	if (dark_mode == false) {
		switch_to_dark_mode.style.display = "flex";
	} else {
		switch_to_light_mode.style.display = "flex";
	}
};

nav_close_btn.addEventListener("click", function() {
	closeNav();
});

logo.addEventListener("click", function() {
	closeNav();
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home.style.display = "flex";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_home_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Home | Aleksander Bober";
});

home_link.addEventListener("click", function() {
	closeNav();
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home.style.display = "flex";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_home_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Home | Aleksander Bober";
});

work_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	work.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Work | Aleksander Bober";
});

aboutme_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	contact.style.display = "none";
	aboutme.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "About Me | Aleksander Bober";
});

contact_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "3%";
	footer.style.position = "absolute";
	window.scrollTo(0, 0);
	title.innerText = "Contact | Aleksander Bober";
});

home_work_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	work.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Work | Aleksander Bober";
});

home_preview_card_arrow_right.addEventListener("click", function() {
	if (home_preview_current_card == 1) {
		home_preview_card.style.backgroundColor = "gray";
		home_preview_card_arrow_left.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card.style.backgroundColor = "blue";
		home_preview_card_arrow_right.style.visibility = "hidden";
		home_preview_current_card = 3;
	}
});

home_preview_card_arrow_left.addEventListener("click", function() {
	if (home_preview_current_card == 3) {
		home_preview_card.style.backgroundColor = "gray";
		home_preview_card_arrow_right.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card.style.backgroundColor = "black";
		home_preview_card_arrow_left.style.visibility = "hidden";
		home_preview_current_card = 1;
	}
});

quick_nav_home_link.addEventListener("click", function() {
	closeNav();
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home.style.display = "flex";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_home_link.style.textDecorationLine = "underline";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_home_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Home | Aleksander Bober";
});

quick_nav_work_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	work.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "Work | Aleksander Bober";
});

quick_nav_aboutme_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	contact.style.display = "none";
	aboutme.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "3%";
	footer.style.position = "initial";
	window.scrollTo(0, 0);
	title.innerText = "About Me | Aleksander Bober";
});

quick_nav_contact_link.addEventListener("click", function() {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "flex";
	home_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "underline";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "3%";
	footer.style.position = "absolute";
	window.scrollTo(0, 0);
	title.innerText = "Contact | Aleksander Bober";
});
