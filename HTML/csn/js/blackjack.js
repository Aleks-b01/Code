document.addEventListener("keydown", keybinds);

const blackjack = document.getElementById("blackjack");
const chipsCounter = document.getElementById("chipsCounter");
const exitBlackjack = document.getElementById("exitBlackjack");
const blackjackChipsDisplay = document.getElementById("blackjackChipsDisplay");
const blackjackBetScreen = document.getElementById("blackjackBetScreen");
const blackjackBetChipsDisplay = document.getElementById("blackjackBetChipsDisplay");
const blackjackBetDisplay = document.getElementById("blackjackBetDisplay");
const blackjackPlay = document.getElementById("blackjackPlay");
const blackjackClearBet = document.getElementById("blackjackClearBet");
const blackjackMinusBet = document.getElementById("blackjackMinusBet");
const blackjackBet50 = document.getElementById("blackjackBet50");
const blackjackBet100 = document.getElementById("blackjackBet100");
const blackjackBet500 = document.getElementById("blackjackBet500");
const blackjackBet1k = document.getElementById("blackjackBet1k");
const blackjackBet5k = document.getElementById("blackjackBet5k");
const blackjackBet10k = document.getElementById("blackjackBet10k");

let chips = chipsCounter.innerText;

function keybinds(event) {
	if (event.key === "Escape") {
		event.preventDefault();
	}
};
