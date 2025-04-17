// Get a reference to the container element where we'll add the cells
const gridContainer = document.querySelector('#grid');
const resizeButton = document.querySelector('#resize');

// Loop 256 times (16 x 16) to create a total of 256 grid cells
for (let i = 0; i < 16 * 16; i++) {
    // Create a new <div> element to act as a single cell
    const cell = document.createElement('div');
    // Add the class 'grid-cell' to the new div so it gets styled properly
    cell.className = 'grid-cell';
    // Append the cell to the grid container in the DOM
    gridContainer.appendChild(cell);
}

// Select all elements with the class 'grid-cell'
const gridCells = gridContainer.querySelectorAll('.grid-cell');


// Loop through each cell and add a 'mouseover' event listener
gridCells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hovered');
    });
});