//target
const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const gridSizeOutput = document.querySelector('#gridSizeOutput');

// create
const div = document.createElement('div');

//sets output text to value of slider.
gridSizeOutput.textContent = `${gridSize.value} x ${gridSize.value}`;
//updates value when you move slider
gridSize.oninput = function(){
    gridSizeOutput.textContent = `${gridSize.value} x ${gridSize.value}`;
}

console.log(gridSize.value)