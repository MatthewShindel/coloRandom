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
window.addEventListener('load', function () {
	generateRandomPalette();
	updatePalette(currentPalette)
});

newPaletteBtn.addEventListener('click', function () {
	generateRandomPalette();
	updatePalette(currentPalette)
});

savePaletteBtn.addEventListener('click', function () {
	savePalette();
	displaySavedPalettes();
	console.log(savedPalettes);
});

miniPaletteContainer.addEventListener('click', function (event) {
	if (event.target.parentNode.classList.contains('delete-button')) {
		var index = event.target.parentNode.dataset.index;
		deleteSavedPalette(index);
		console.log(savedPalettes);
	} else if (event.target.className === 'mini-palette' || 'mini-box') {
		var index = event.target.dataset.index;
		console.log(index);
		console.log(savedPalettes);
		var savedPalette = savedPalettes[index];
		updatePalette(savedPalette);//display the saved colors
		currentPalette = savedPalette.slice();// now put those values into the currentPalette 
	}
});

// class IDs data*

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
	miniPaletteContainer.innerHTML = '';
	for (var i = 0; i < savedPalettes.length; i++) {
		var miniPalette = document.createElement('section');
		miniPalette.className = 'mini-palette';
		miniPalette.dataset.index = i;
		for (var j = 0; j < savedPalettes[i].length; j++) {
			var miniBox = document.createElement('div');
			miniBox.className = 'mini-box';
			miniBox.dataset.index = i;
			miniBox.style.backgroundColor = savedPalettes[i][j];
			miniPalette.appendChild(miniBox);
		}
		var deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.dataset.index = i;
		deleteButton.innerHTML = `<img src="assets/delete.png" alt="Delete Button">`;
		miniPalette.appendChild(deleteButton);
		miniPaletteContainer.appendChild(miniPalette);
	}
}


function deleteSavedPalette(index) {
	savedPalettes.splice(index, 1);
	displaySavedPalettes();
}