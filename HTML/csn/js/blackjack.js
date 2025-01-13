document.addEventListener("keydown", keybinds);

const blackjack = document.getElementById("blackjack");
const chipsCounter = document.getElementById("chipsCounter");

function keybinds(event) {
	if (event.key === "Escape") {
		event.preventDefault();
	}
};

blackjack.onclick = function() {
	console.log(chipsCounter.innerText);
};
