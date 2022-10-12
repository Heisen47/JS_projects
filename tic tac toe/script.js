var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endGame").style.display = "none"; //it will show up once the games finishes till then this popup box will be none
    origBoard = Array.from(Array(9).keys());  //basically prints all the numbers in the console to check for the above winning combination console.log it to find out
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color'); //changes the bg color once you've won 
        cells[i].addEventListener('click', turnClick, false); //listens to your click event
    }
}

//this function is used to check the print/access the cell id it gives us the id of cell when we click on any sqare of the tictactoe
function turnClick(square) {
    //console.log(square.target.id) 
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer)
        if (!checkTie()) turn(bestSpot(), aiPlayer);
    }
}

//it replaces the cell id number to 'O' in the array and on the screen of the user just like the tictactoe
function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    // console.log(origBoard)
    //the below two lines basically tells us to check if we have won the game and calls two function that we are gonna define and use next to determine the winner
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}

//the logic to determine the winner of the game
function checkWin(board, player) {
    //this below line is just a fancy way to say "please check for all the places in the board where a click/action is already performed"
    let plays = board.reduce((a, e, i) =>
        /*the "a" = accumulator which we are initializing to zero in the next line. "e" = element of the array . i = index of the element*/
        (e === player) ? a.concat(i) : a, []);
    //the above line in english is: "if element is equal to the plater "?" or iternary operator or then concat he accumulator to an empty string
    let gameWon = null;
    //just looping over every win combos to check for possible win combination
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

//the logic to selecting only the winning combo and not letting to click anywhere after the winning combo is selected
function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == huPlayer ? "green" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == huPlayer ? "you win!!" : "You Loose!!");
}

function declareWinner(who) {
    document.querySelector(".endGame").style.display = "block";
    document.querySelector(".endGame .text").innerText = who;
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "blue";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}
