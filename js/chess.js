document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");

    function createBoard() {
        for (let i = 0; i < 64; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.classList.add((i + Math.floor(i / 8)) % 2 ? "black" : "white");
            board.appendChild(square);
        }
    }

    createBoard();
});
