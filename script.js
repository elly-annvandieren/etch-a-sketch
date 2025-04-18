const gridContainer = document.querySelector('#grid');
const resizeButton = document.querySelector('#resize');

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = ''; // Clear old grid

    const cellSize = 480 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener('mouseover', () => {
            cell.classList.add('hovered');
        });

        gridContainer.appendChild(cell);
    }
}

// Default grid
createGrid(16);

// Resize handler
resizeButton.addEventListener('click', () => {
    let input = prompt('Enter number of squares per side (max 100):');
    let size = parseInt(input);

    if (isNaN(size) || size < 1) {
        alert('Please enter a valid number.');
    } else if (size > 100) {
        alert('Maximum allowed is 100.');
    } else {
        createGrid(size);
    }
});

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.classList.remove('hovered');
    });
});
