// Variables
var newPaletteBtn = document.querySelector('#newPaletteBtn');
var savePaletteBtn = document.querySelector('#savePaletteBtn');
var allLocks = document.querySelectorAll('.lock');
var allBoxes = document.querySelectorAll('.box');
var allHexes = document.querySelectorAll('.hex');
var savedPalettesContainer = document.querySelector('.saved-palettes-container');
var miniPaletteContainer = document.querySelector('.mini-palette-container');
var currentPalette = [];
var savedPalettes = [];

// Event Listeners
window.addEventListener('load', function() {
	generateRandomPalette();
	updatePalette(currentPalette);
});

newPaletteBtn.addEventListener('click', function() {
	generateRandomPalette();
	updatePalette(currentPalette);
});

savePaletteBtn.addEventListener('click', function() {
	savePalette();
	displaySavedPalettes();
});

savedPalettesContainer.addEventListener('click', function(event) {
	if (event.target.parentNode.classList.contains('delete-button')) {
		var index = event.target.parentNode.dataset.index;
		deleteSavedPalette(index);
	} else if (event.target.className === 'mini-palette' || 'mini-box') {
		var index = event.target.dataset.index;
		var savedPalette = savedPalettes[index];
		updatePalette(savedPalette);
		currentPalette = savedPalette.slice();
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
	for (var i = 0; i < 5; i++) {
		if (!allLocks[i].checked) {
			currentPalette[i] = generateRandomColor();
		}
	}
}

function updatePalette(colorValues) {
	for (var i = 0; i < colorValues.length; i++) {
		allBoxes[i].style.backgroundColor = colorValues[i];
		allHexes[i].innerText = colorValues[i];
	}
}

function savePalette() {
	var savedPalette = currentPalette.slice();
	savedPalettes.push(savedPalette);
	return savedPalettes;
}

function displaySavedPalettes() {
	savedPalettesContainer.innerHTML = '';
	for (var i = 0; i < savedPalettes.length; i++) {
		var miniPaletteContainer = document.createElement('section');
		var miniPalette = document.createElement('div');
		miniPalette.className = 'mini-palette';
		miniPaletteContainer.className = 'mini-palette-container';
		miniPaletteContainer.dataset.index = i;
		for (var j = 0; j < savedPalettes[i].length; j++) {
			var miniBox = document.createElement('div');
			miniBox.className = 'mini-box';
			miniBox.dataset.index = i;
			miniBox.style.backgroundColor = savedPalettes[i][j];
			miniPaletteContainer.appendChild(miniBox);
		}
		var deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.dataset.index = i;
		deleteButton.innerHTML = `<img src="assets/delete.png" alt="Delete Button">`;
		miniPaletteContainer.appendChild(miniPalette);
		miniPalette.appendChild(deleteButton);
		savedPalettesContainer.appendChild(miniPaletteContainer);
	}
}

function deleteSavedPalette(index) {
	savedPalettes.splice(index, 1);
	displaySavedPalettes();
}