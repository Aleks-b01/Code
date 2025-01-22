document.addEventListener("keydown", keybinds);

const blackjack = document.getElementById("blackjack");
const chipsCounter = document.getElementById("chipsCounter");

let chips = chipsCounter.innerText;

function keybinds(event) {
	if (event.key === "Escape") {
		event.preventDefault();
	}
};
