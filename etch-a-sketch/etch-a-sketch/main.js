let color = "black";

document.addEventListener("DOMContentLoaded", () => {
    // console.log('hi');
    Createboard(16);

    let popup = document.querySelector("#popup");
    popup.addEventListener("click", () => {
        let size = Check();
        Createboard(size);
    })
})

function Createboard(size) {
    let board = document.querySelector("#container");

    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        // div.style.backgroundColor = "yellow";
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function Check() {
    let input = prompt("What will be the size of the board?")
    let message = document.querySelector("#message")

    if (input == "") {
        message.innerHTML = "please enter a size";
    }

    else if (input < 0 || input > 100) {
        message.innerHTML = "please select a number between 1 and 100"
    }

    else {
        message.innerHTML = "now you can play!"
    }
    return input;
}

function colorDiv() {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360},100% , 50%)`; 
    }
    else{
        this.style.backgroundColor="black";
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}


function resetBoard(){
    let divs = document.querySelectorAll("div");
    // let div = document.querySelector("#container");
    divs.forEach((div)=>div.style.backgroundColor = "white");
    // div.style.backgroundColor = "white";
}   