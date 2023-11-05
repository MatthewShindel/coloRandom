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

miniPaletteContainer.addEventListener('click', function(event) {
	if (event.target.closest('.delete-button')) {
			var index = event.target.closest('.delete-button').dataset.index;
			deleteSavedPalette(index);
			console.log(savedPalettes);
	}
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
	var paletteCopy = currentPalette.slice();
	savedPalettes.push(paletteCopy);
	return savedPalettes;
}


function displaySavedPalettes() {
	miniPaletteContainer.innerHTML = '';
	for (var i = 0; i < savedPalettes.length; i++) {
	miniPaletteContainer.innerHTML += `
	<section class="mini-palette">
		<div class="mini-box" style="background-color:${savedPalettes[i][0]};">
		</div>
		<div class="mini-box" style="background-color:${savedPalettes[i][1]};">
		</div>
		<div class="mini-box" style="background-color:${savedPalettes[i][2]};">
		</div>
		<div class="mini-box" style="background-color:${savedPalettes[i][3]};">
		</div>
		<div class="mini-box" style="background-color:${savedPalettes[i][4]};">
		</div>
		<button class="delete-button" data-index="${i}">
			<img src="assets/delete.png" alt="Delete Button">
		</button>
	</section>
	`
	}
}

function deleteSavedPalette(index) {
			savedPalettes.splice(index, 1);
			displaySavedPalettes();
	}


	// savedPalettes.splice(i, 1);
	// console.log(savedPalettes);

	/*
	look through savedPalettes array:
		for loop, checking each object
		if savedPalettes[i].id === event.target.id{
			remove it
		}
	*/
	// if (event.target.closest('.delete-button').remove()) {
	// 	console.log('delete');
	// 	deleteSavedPalette();
  // }
// 	if(event.target.className === 'delete-button'){
		
// 	}

