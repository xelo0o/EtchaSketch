//target
const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const gridSizeOutput = document.querySelector('#gridSizeOutput');
const cellContainer = document.querySelector('#cellContainer');
const gridCell = document.querySelector('.gridCell');
const createGridBtn = document.querySelector('#createGridBtn');




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




    for(let i = 0; i < num; i++){
        const div = document.createElement('div');
        div.style.width = `${size}%`;
        div.style.height = `${size}%`;
        div.classList.add('gridCell');
        cellContainer.appendChild(div);
    }
}



function clearGrid(){
    while(cellContainer.firstChild){
        cellContainer.removeChild(cellContainer.firstChild); 
    }
}

// EVENT LISTENERS

createGridBtn.addEventListener('click',()=>{
    clearGrid();
    grid();
});



// call grid to create first 16x16 grid
grid();


