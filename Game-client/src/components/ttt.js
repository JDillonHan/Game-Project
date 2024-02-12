let currentPlayer = 'X';
const board = Array(9).fill(null);

function handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-index'));

    if (!board[index]) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    if (checkForWin()) {
        alert(`${currentPlayer} won!`);
        resetGame();
    }
}

function checkForWin() {
    const winningCombonations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombonations.some(combonation =>
        combonation.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    const cells = document.querySelectorAll('#tic-tac-toe-board td');

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

window.resetGame = resetGame;

document.getElementById('tic-tac-toe-board').addEventListener('click', handleCellClick);