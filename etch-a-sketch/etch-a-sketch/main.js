document.addEventListener("DOMContentLoaded", () => {
    console.log('hi');
    Createboard(16, 16);
})

function Createboard(rows, cols) {
    let board = document.querySelector("#container");

    board.style.gridTemplateColumns = `repeat(${rows},1fr)`
    board.style.gridTemplateRows = `repeat(${cols},1fr)`

    let numDivs = rows *cols;

    for(let i = 0 ; i<numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend",div);
    }
}