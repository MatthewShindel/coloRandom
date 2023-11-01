var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
var color5 = document.querySelector('#color5');

var newPalette = document.querySelector('#new-palette');

var currentPalette = [];

window.addEventListener('load', function() {
    generateRandomPalette();
    updatePalette(currentPalette)
});

newPalette.addEventListener('click', function() {
generateRandomPalette();
updatePalette(currentPalette)
});



function generateRandomColor() {
    var characters = "0123456789ABCDEF";
    var lead = "#";
    for (var i = 0; i < 6; i++) {
        lead += characters[Math.floor(Math.random() * 16)];
    }
    return lead;
}

function generateRandomPalette() {
    currentPalette = [];
    for (var i = 0; i < 5; i++) {
        currentPalette.push(generateRandomColor());
    }
    return currentPalette;
}


function updatePalette(array) {
    for (var i = 0; i < array.length; i++) {
        var boxNum = "box"
        boxNum += (i + 1); 
        if (boxNum === 'box1') {
            box1.style.backgroundColor = array[i];
            color1.innerText = array[i];
        } else if (boxNum === 'box2') {
            box2.style.backgroundColor = array[i];
            color2.innerText = array[i];
        } else if (boxNum === 'box3') {
            box3.style.backgroundColor = array[i];
            color3.innerText = array[i];
        } else if (boxNum === 'box4') {
            box4.style.backgroundColor = array[i];
            color4.innerText = array[i];
        } else if (boxNum === 'box5') {
            box5.style.backgroundColor = array[i];
            color5.innerText = array[i];
        }  
    }
}
