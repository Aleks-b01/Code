const body = document.getElementsByTagName("body")[0];
const title = document.getElementsByTagName("title")[0];
const stylesheet = document.getElementsByTagName("link")[0];
const header = document.getElementsByTagName("header")[0];
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
const main = document.getElementsByTagName("main")[0];
const home = document.getElementById("home");
const home_work_link = document.getElementById("home_work_link");
const home_preview_card_img = document.getElementById("home_preview_card_img");
const home_preview_card_arrow_right = document.getElementById("home_preview_card_arrow_right");
const home_preview_card_arrow_left = document.getElementById("home_preview_card_arrow_left");
const work = document.getElementById("work");
const work_example_1_btn = document.getElementById("work_example_1_btn");
const work_example_2_btn = document.getElementById("work_example_2_btn");
const work_example_3_btn = document.getElementById("work_example_3_btn");
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");
const example_website_1 = document.getElementById("example_website_1");
const example_website_2 = document.getElementById("example_website_2");
const example_website_3 = document.getElementById("example_website_3");
const footer = document.getElementsByTagName("footer")[0];
const legal_image_credits = document.getElementById("legal_image_credits");
const legal_tos = document.getElementById("legal_tos");
const quick_nav_home_link = document.getElementById("quick_nav_home_link");
const quick_nav_work_link = document.getElementById("quick_nav_work_link");
const quick_nav_aboutme_link = document.getElementById("quick_nav_aboutme_link");
const quick_nav_contact_link = document.getElementById("quick_nav_contact_link");
const image_credits = document.getElementById("image_credits");
const tos = document.getElementById("tos");
const example_website_1_logo = document.getElementById("example_website_1_logo");
const example_website_1_home_link = document.getElementById("example_website_1_home_link");
const example_website_1_aboutus_link = document.getElementById("example_website_1_aboutus_link");
const example_website_1_services_link = document.getElementById("example_website_1_services_link");
const example_website_1_pricing_link = document.getElementById("example_website_1_pricing_link");
const example_website_1_contact_link = document.getElementById("example_website_1_contact_link");
const example_website_1_exit = document.getElementById("example_website_1_exit");
const example_website_1_home = document.getElementById("example_website_1_home");
const example_website_1_intro_hero_btn = document.getElementById("example_website_1_intro_hero_btn");
const example_website_1_aboutus = document.getElementById("example_website_1_aboutus");
const example_website_1_services = document.getElementById("example_website_1_services");
const example_website_1_pricing = document.getElementById("example_website_1_pricing");
const example_website_1_contact = document.getElementById("example_website_1_contact");

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

function switchPage(page) {
	closeNav();
	home.style.display = "none";
	work.style.display = "none";
	aboutme.style.display = "none";
	contact.style.display = "none";
	home_link.style.textDecorationLine = "none";
	work_link.style.textDecorationLine = "none";
	aboutme_link.style.textDecorationLine = "none";
	contact_link.style.textDecorationLine = "none";
	quick_nav_home_link.style.textDecorationLine = "none";
	quick_nav_work_link.style.textDecorationLine = "none";
	quick_nav_aboutme_link.style.textDecorationLine = "none";
	quick_nav_contact_link.style.textDecorationLine = "none";
	quick_nav_home_link.style.marginBottom = "2%";
	quick_nav_work_link.style.marginBottom = "2%";
	quick_nav_aboutme_link.style.marginBottom = "2%";
	quick_nav_contact_link.style.marginBottom = "2%";
	image_credits.style.display = "none";
	tos.style.display = "none";
	legal_image_credits.style.textDecorationLine = "none";
	legal_tos.style.textDecorationLine = "none";
	legal_image_credits.style.marginBottom = "2%";
	footer.style.position = "initial";
	if (page == "home") {
		home.style.display = "flex";
		home_link.style.textDecorationLine = "underline";
		quick_nav_home_link.style.textDecorationLine = "underline";
		quick_nav_home_link.style.marginBottom = "3%";
		title.innerText = "Home | Aleksander Bober"
	} else if (page == "work") {
		work.style.display = "flex";
		work_link.style.textDecorationLine = "underline";
		quick_nav_work_link.style.textDecorationLine = "underline";
		quick_nav_work_link.style.marginBottom = "3%";
		title.innerText = "Work | Aleksander Bober";
	} else if (page == "aboutme") {
		aboutme.style.display = "flex";
		aboutme_link.style.textDecorationLine = "underline";
		quick_nav_aboutme_link.style.textDecorationLine = "underline";
		quick_nav_aboutme_link.style.marginBottom = "3%";
		title.innerText = "About me | Aleksander Bober";
	} else if (page == "contact") {
		contact.style.display = "flex";
		contact_link.style.textDecorationLine = "underline";
		quick_nav_contact_link.style.textDecorationLine = "underline";
		quick_nav_contact_link.style.marginBottom = "3%";
		footer.style.position = "absolute";
		title.innerText = "Contact | Aleksander Bober"
	} else if (page == "image_credits") {
		image_credits.style.display = "flex";
		legal_image_credits.style.textDecorationLine = "underline";
		legal_image_credits.style.marginBottom = "3%";
		title.innerText = "Image credits | Aleksander Bober";
	} else if (page == "tos") {
		tos.style.display = "flex";
		legal_tos.style.textDecorationLine = "underline";
		title.innerText = "Terms of Service | Aleksander Bober";
	}
	window.scrollTo(0, 0);
};

nav_close_btn.addEventListener("click", function() {
	closeNav();
});

logo.addEventListener("click", function() {
	switchPage("home");
});

home_link.addEventListener("click", function() {
	switchPage("home");
});

work_link.addEventListener("click", function() {
	switchPage("work");
});

aboutme_link.addEventListener("click", function() {
	switchPage("aboutme");
});

contact_link.addEventListener("click", function() {
	switchPage("contact");
});

home_work_link.addEventListener("click", function() {
	switchPage("work");
});

home_preview_card_arrow_right.addEventListener("click", function() {
	if (home_preview_current_card == 1) {
		home_preview_card_img.style.backgroundImage = "none";
		home_preview_card_img.style.backgroundColor = "gray";
		home_preview_card_arrow_left.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card_img.style.backgroundImage = "none";
		home_preview_card_img.style.backgroundColor = "blue";
		home_preview_card_arrow_right.style.visibility = "hidden";
		home_preview_current_card = 3;
	}
});

home_preview_card_arrow_left.addEventListener("click", function() {
	if (home_preview_current_card == 3) {
		home_preview_card_img.style.backgroundImage = "none";
		home_preview_card_img.style.backgroundColor = "gray";
		home_preview_card_arrow_right.style.visibility = "visible";
		home_preview_current_card = 2;
	} else if (home_preview_current_card == 2) {
		home_preview_card_img.style.backgroundColor = "none";
		if (dark_mode == false) {
			home_preview_card_img.style.backgroundImage = "url('assets/example_websites_previews/example_website_1.png')";
		} else {
			home_preview_card_img.style.backgroundImage = "url('assets/example_websites_previews/example_website_1_dark.png')";
		}
		home_preview_card_arrow_left.style.visibility = "hidden";
		home_preview_current_card = 1;
	}
});

work_example_1_btn.addEventListener("click", function() {
	header.style.display = "none";
	main.style.display = "none";
	footer.style.display = "none";
	exampleWebsiteOneSwitchPage("home");
	example_website_1.style.display = "flex";
	window.scrollTo(0, 0);
	title.innerText = "Home | Company";
});

work_example_2_btn.addEventListener("click", function() {
	header.style.display = "none";
	main.style.display = "none";
	footer.style.display = "none";
	example_website_2.style.display = "flex";
	window.scrollTo(0, 0);
	title.innerText = "Home | Company";
});

work_example_3_btn.addEventListener("click", function() {
	header.style.display = "none";
	main.style.display = "none";
	footer.style.display = "none";
	example_website_3.style.display = "flex";
	window.scrollTo(0, 0);
	title.innerText = "Home | Company";
});

quick_nav_home_link.addEventListener("click", function() {
	switchPage("home");
});

quick_nav_work_link.addEventListener("click", function() {
	switchPage("work");
});

quick_nav_aboutme_link.addEventListener("click", function() {
	switchPage("aboutme");
});

quick_nav_contact_link.addEventListener("click", function() {
	switchPage("contact");
});

legal_image_credits.addEventListener("click", function() {
	switchPage("image_credits");
});

legal_tos.addEventListener("click", function() {
	switchPage("tos");
});

function exampleWebsiteOneSwitchPage(page) {
	example_website_1_home.style.display = "none";
	example_website_1_aboutus.style.display = "none";
	example_website_1_services.style.display = "none";
	example_website_1_pricing.style.display = "none";
	example_website_1_contact.style.display = "none";
	example_website_1_home_link.style.textDecorationLine = "none";
	example_website_1_aboutus_link.style.textDecorationLine = "none";
	example_website_1_services_link.style.textDecorationLine = "none";
	example_website_1_pricing_link.style.textDecorationLine = "none";
	example_website_1_contact_link.style.textDecorationLine = "none";
	if (page == "home") {
		example_website_1_home.style.display = "flex";
		example_website_1_home_link.style.textDecorationLine = "underline";
		title.innerText = "Home | Company";
	} else if (page == "aboutus") {
		example_website_1_aboutus.style.display = "flex";
		example_website_1_aboutus_link.style.textDecorationLine = "underline";
		title.innerText = "About Us | Company";
	} else if (page == "services") {
		example_website_1_services.style.display = "flex";
		example_website_1_services_link.style.textDecorationLine = "underline";
		title.innerText = "Services | Company";
	} else if (page == "pricing") {
		example_website_1_pricing.style.display = "flex";
		example_website_1_pricing_link.style.textDecorationLine = "underline";
		title.innerText = "Pricing | Company";
	} else if (page == "contact") {
		example_website_1_contact.style.display = "flex";
		example_website_1_contact_link.style.textDecorationLine = "underline";
		title.innerText = "Contact | Company";
	}
};

example_website_1_logo.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("home");
});

example_website_1_home_link.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("home");
});

example_website_1_aboutus_link.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("aboutus");
});

example_website_1_services_link.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("services");
});

example_website_1_pricing_link.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("pricing");
});

example_website_1_contact_link.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("contact");
});

example_website_1_exit.addEventListener("click", function() {
	example_website_1.style.display = "none";
	header.style.display = "flex";
	main.style.display = "flex";
	footer.style.display = "flex";
	window.scrollTo(0, 0);
	title.innerText = "Work | Aleksander Bober";
});

example_website_1_intro_hero_btn.addEventListener("click", function() {
	exampleWebsiteOneSwitchPage("services");
});
