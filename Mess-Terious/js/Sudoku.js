function generateRandomBoard() {
    const sudoku = [];
    const emptyCells = 40; 

    for (let i = 0; i < 9; i++) {
        sudoku.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }


    for (let i = 0; i < emptyCells; i++) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        let num = Math.floor(Math.random() * 9) + 1;


        while (!isValidMove(sudoku, row, col, num)) {
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);
            num = Math.floor(Math.random() * 9) + 1;
        }

        sudoku[row][col] = num;
    }

    return sudoku;
}

function isValidMove(board, row, col, num) {
    // Verificar linha e coluna
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // Verificar bloco 3x3
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}

function createSudoku() {
    const container = document.getElementById('sudoku');
    container.innerHTML = '';

    const sudoku = generateRandomBoard();

    for (let i = 0; i < sudoku.length; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < sudoku[i].length; j++) {
            const cell = document.createElement('input');
            cell.type = 'number';
            cell.maxLength = 1;
            cell.min=1;
            cell.value = sudoku[i][j] === 0 ? '' : sudoku[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('input', checkSolution);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function checkSolution() {
    const sudoku = getSudoku();
    const currentCell = this;
    const row = parseInt(currentCell.dataset.row);
    const col = parseInt(currentCell.dataset.col);
    const num = parseInt(currentCell.value) || 0;

    // Verificar linha e coluna
    for (let i = 0; i < 9; i++) {
        if (i !== col && sudoku[row][col] === sudoku[row][i]) {
            currentCell.style.backgroundColor = 'red';
            return;
        }
        if (i !== row && sudoku[row][col] === sudoku[i][col]) {
            currentCell.style.backgroundColor = 'red';
            return;
        }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if ((i !== row || j !== col) && sudoku[i][j] === num) {
                currentCell.style.backgroundColor = 'red';
                return;
            }
        }
    }

    currentCell.style.backgroundColor = '';
}

function getSudoku() {
    const sudoku = [];
    const cells = document.querySelectorAll('#sudoku input');
    let index = 0;
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            row.push(parseInt(cells[index].value) || 0);
            index++;
        }
        sudoku.push(row);
    }
    return sudoku;
}

function solve() {
    const sudoku = getSudoku();
    if (solveSudoku(sudoku)) {
        updateSudokuUI(sudoku);
        alert('Sudoku resolvido!');
    } else {
        alert('Sudoku não foi resolvido!');
    }
}

function solveSudoku(sudoku) {
    const emptyCell = findEmptyCell(sudoku);
    if (!emptyCell) {
        return true; 
    }

    const row = emptyCell[0];
    const col = emptyCell[1];

    for (let num = 1; num <= 9; num++) {
        if (isValidMove(sudoku, row, col, num)) {
            sudoku[row][col] = num;

            if (solveSudoku(sudoku)) {
                return true;
            }

            sudoku[row][col] = 0; 
        }
    }

    return false;
}

function findEmptyCell(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function updateSudokuUI(sudoku) {
    const cells = document.querySelectorAll('#sudoku input');
    let index = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cells[index].value = sudoku[i][j];
            index++;
        }
    }
}

createSudoku();