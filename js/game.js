let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function handleClick(index) {
    if (gameOver || board[index] !== '') return;

    board[index] = currentPlayer;
    render();

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        document.getElementById('status').innerText = `${winner} wins!`;
    } else if (checkDraw()) {
        gameOver = true;
        document.getElementById('status').innerText = "It's a draw!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').innerText = '';
    render();
}

render();
