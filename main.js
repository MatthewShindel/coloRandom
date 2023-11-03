// Variables
var newPaletteBtn = document.querySelector('#newPaletteBtn');
var savePaletteBtn = document.querySelector('#savePaletteBtn');
var allLocks = document.querySelectorAll('.lock');
var allBoxes = document.querySelectorAll('.box');
var allHexes = document.querySelectorAll('.hex');
var miniPaletteContainer = document.querySelector('.mini-palette-container');
var miniPalette = document.querySelector('.mini-palette');
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
	console.log(savedPalettes);
});

miniPaletteContainer.addEventListener('click', function(){
	deleteSavedPalette();
	console.log(savedPalettes);
});

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

function savePalette() {
	var newSavedPalette = {};
	for(var i = 0; i < 5; i++) {
		var key = `hex${i}`;
		newSavedPalette[key] = currentPalette[i];
	}
	newSavedPalette['id'] = Date.now();
	savedPalettes.push(newSavedPalette);
	return savedPalettes;
}

function displaySavedPalettes() {
	miniPaletteContainer.innerHTML += `
	<section class="mini-palette" >
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
		<input type="image" src="assets/delete.png" class="delete-button" id="${Date.now()}"/>
	</section>
	`
}

function deleteSavedPalette() {
	for (var i = 0; i< savedPalettes.length; i++) {
		console.log('in for loop')
		console.log("savedpalettes id:", savedPalettes[i].id , typeof(savedPalettes[i].id));
		console.log("current Target id:", event.target.id, typeof(event.target.id));
		if (savedPalettes[i].id === Number(event.target.id)){
			console.log('got a match');
			savedPalettes.splice(i,1);
			event.target.parentElement.remove();
			return savedPalettes;
		}
	}
}