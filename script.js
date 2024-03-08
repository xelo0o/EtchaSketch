//target
const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const gridSizeOutput = document.querySelector('#gridSizeOutput');
const cellContainer = document.querySelector('#cellContainer');
const gridCell = document.querySelector('.gridCell');
const createGridBtn = document.querySelector('#createGridBtn');
const eraseBtn = document.querySelector('#eraseBtn');




// Creates grid based on slider values
function grid(){      

    //create grid (x * x)
let num = gridSize.value * gridSize.value;
//get percentage for cell W * H;
let size = ((700 / gridSize.value) / 700) *100;   
//sets output text to value of slider.
gridSizeOutput.textContent = `${gridSize.value} x ${gridSize.value}`;
//updates value when you move slider
gridSize.oninput = function(){
    // update gridSize.value attribute
    this.setAttribute('value', this.value)
    //update output text
    gridSizeOutput.textContent = `${gridSize.value} x ${gridSize.value}`;
}


// creates the gridCells
    for(let i = 0; i < num; i++){
        const div = document.createElement('div');
        div.style.width = `${size}%`;
        div.style.height = `${size}%`;
        div.setAttribute('id', 'cell');
        div.classList.add('gridCell');
        cellContainer.appendChild(div);
    }

    black();
}

// clear all children from container
function clearGrid(){
    while(cellContainer.firstChild){
        cellContainer.removeChild(cellContainer.firstChild); 
    }
}
// change background to black
function black() {
    const gridCellAll = document.querySelectorAll('.gridCell');
    gridCellAll.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "black";
            
        });
    });
}
// change background back to white
function erase(){
    const gridCellAll = document.querySelectorAll('.gridCell');
    gridCellAll.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "#FFF";
            
        });
    });
}

// EVENT LISTENERS

createGridBtn.addEventListener('click',()=>{
    clearGrid();
    grid();
});

eraseBtn.addEventListener('click', ()=>{
    erase();
})



//eventlistener to change background

// call grid to create first 16x16 grid

grid();

