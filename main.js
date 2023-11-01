// Variables
var newPalette = document.querySelector('#newPalette');
var allLocks = document.querySelectorAll('.lock');
var allBoxes = document.querySelectorAll('.box');
var allHexes = document.querySelectorAll('.hex');
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

for (var index = 0; index < 5; index++) {
	allLocks[index].addEventListener('click', changeLock())
}


// Functions
function generateRandomColor() {
	var characters = "0123456789ABCDEF";
	var hex = "#";
	for (var i = 0; i < 6; i++) {
		hex += characters[Math.floor(Math.random() * 16)];
	}
	return hex;
}

function generateRandomPalette() {
	for (var i = 0; i < 5; i++){
		if(!allLocks[i].checked){
			currentPalette[i] = generateRandomColor();
		}
	}
}

function updatePalette(array) {
	for (var i = 0; i < array.length; i++) {
		allBoxes[i].style.backgroundColor = array[i];
		allHexes[i].innerText = array[i];
	}
}

function changeLock() {
	console.log("hello, i am changeLock");
	for (var i = 0; i < allLocks.length; i++) {
		// allLocks[index].addEventListener('click', changeLock)
		if (allLocks[i].checked) {
			
			allLocks[i].alt = "Locked"
			allLocks[i].src = "assets/locked.png"
			// allLocks[i].innerHTML('<img src="assets/locked.png" alt="Locked Color">')
		} else if (!allLocks[i].checked) {
			allLocks[i].alt = "Unlocked"
			allLocks[i].src = "assets/unlocked.png"
			// allLocks[i].innerHTML('<img src="assets/unlocked.png" alt="Unlocked Color">')
		}
	}
}
// image.alt =  "new alt text"
// image.src = new source
//use queryselectorAll from all images?
/*

Dana's pseudo
- we already have a queryselect all for locks
- make an event listener that on click calls a function
- this new function changes innerText <img src="assets/unlocked.png" alt="Unlocked Color">


// var lockboxes = queryselectall...(.lock)

// FOR LOOP- loop through the locks
// locks[i].eventlistener!!! ('change', function())

query select label??? 

if (checked?)
label.innerHTML = <img src ... alt...
else 
other img and other alt

*/ 