document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", keyBinds);

const css = document.getElementsByTagName('link');

const screenwidth = screen.width

window.onload = function() {
	if (screenwidth > 600) {
		css[0].setAttribute('href', 'index.css');
	} else if (screenwidth <= 600) {
		css[0].setAttribute('href', 'mobile.css');
	}
};

function keyBinds(event) {

};

});
