// Variables
var newPaletteBtn = document.querySelector('#newPaletteBtn');
var savePaletteBtn = document.querySelector('#savePaletteBtn');
var allLocks = document.querySelectorAll('.lock');
var allBoxes = document.querySelectorAll('.box');
var allHexes = document.querySelectorAll('.hex');
var miniPaletteContainer = document.querySelector('.mini-palette-container');
var currentPalette = [];
var savedPalettes = [];

// Event Listeners
window.addEventListener('load', function() {
	generateRandomPalette();
	updatePalette(currentPalette)
});

newPaletteBtn.addEventListener('click', function() {
	generateRandomPalette();
	updatePalette(currentPalette)
});

savePaletteBtn.addEventListener('click', function() {
	savePalette();
	displaySavedPalettes();
	console.log(savedPalettes.length)
	console.log(savedPalettes);
});

function toggleLock() {
	// if the thing we clicked is checked
	// inner html is img of locked
	// else inner html is img of unlocked

	// otherwise also an alternative
	// var image = lock image document query selector
	// image.setAttribute("alt","unlocked");
	// image.setAttribute("src","img/whatever.jpg");
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
	console.log('update palette func', array)
	for (var i = 0; i < array.length; i++) {
		allBoxes[i].style.backgroundColor = array[i];
		allHexes[i].innerText = array[i];
	}
}

function savePalette() {
	savedPalettes.push(currentPalette);
	return savedPalettes;
}

function displaySavedPalettes() {
	// for (var i = 0; i < savedPalettes.length; i++) {
		
	miniPaletteContainer.innerHTML += `
	<section class="mini-palette">
		<div class="mini-box" style="background-color:${currentPalette[0]};">
		</div>
		<div class="mini-box" style="background-color:${currentPalette[1]};">
		</div>
		<div class="mini-box" style="background-color:${currentPalette[2]};">
		</div>
		<div class="mini-box" style="background-color:${currentPalette[3]};">
		</div>
		<div class="mini-box" style="background-color:${currentPalette[4]};">
		</div>
	</section>
	`
	//button id date.now
// }
}



/*

section (here so we can order each palette into a column)
for savedPalettes.length {
	.innerHTML background-color: ${savedPalettes[i][0]}
}


need an array of array's

- create new function savePalette
- this should capture currently displayed palette
- then save (push?) the current palette to the savedPalettes array
	savedPalettes.push(currentPalette)
- create new function called displaySavedPalettes
- this should loop through each element in savedPalettes and
display each on the aside

*/