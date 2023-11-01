// Variables
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var hex1 = document.querySelector('#hex1');
var hex2 = document.querySelector('#hex2');
var hex3 = document.querySelector('#hex3');
var hex4 = document.querySelector('#hex4');
var hex5 = document.querySelector('#hex5');
var newPalette = document.querySelector('#newPalette');
var currentPalette = [];

// Event Listeners
window.addEventListener('load', function () {
	generateRandomPalette();
	updatePalette(currentPalette)
});

newPalette.addEventListener('click', function () {
	generateRandomPalette();
	updatePalette(currentPalette)
});

// Functions
function generateRandomColor() {
	var characters = "0123456789ABCDEF";
	var lead = "#";
	for (var i = 0; i < 6; i++) {
		lead += characters[Math.floor(Math.random() * 16)];
	}
	return lead;
}

function generateRandomPalette() {
	// if color checked, don't remove element, replace unchcked with null
	currentPalette = [];
	for (var i = 0; i < 5; i++) {
		//if array[i] === null, then replace with random color
		//splice(i,1);
		currentPalette.push(generateRandomColor());
	}
	return currentPalette;
}

function updatePalette(array) {
	for (var i = 0; i < array.length; i++) {
		var boxNum = "box" + (i + 1);
		var hexNum = "hex" + (i + 1);
		var box = document.getElementById(boxNum);
		var hex = document.getElementById(hexNum);
		box.style.backgroundColor = array[i];
		hex.innerText = array[i];
	}
}

// target the  element by ID
// get the image src 
// add event listener to the checkbox
// check if checked
// if --- replace img
// else  