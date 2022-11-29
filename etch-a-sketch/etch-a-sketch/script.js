const container = document.querySelector("#container");
const hover = document.querySelector(".grid-item");



function grid(row, cols) {
    // container.style.setProperty('--grid-rows', row);
    // container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (row * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
}
grid(16, 16);

// function BgColor() {
//     document.body.style.background = "red";
// }

// hover.addEventListener("mouseover", BgColor);


// hover.addEventListener("mouseover",(e)=>{
//     document.e.body.style.backgroundColor ="red";
// })



