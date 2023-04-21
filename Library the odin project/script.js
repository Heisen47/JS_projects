let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");
let cancel = document.querySelector(".Cancel");
let bookName = document.getElementById("BookName");
let Author = document.getElementById("Author");
let pages = document.getElementById("pages");
let Add = document.querySelector(".Add");
let BookDetails = document.querySelector(".Name");
let AuthorDetails = document.querySelector(".Author");
let PageDetails = document.querySelector(".Pages");

let OutputName = document.getElementById("OutputName");
let OutputAuthor = document.getElementById("OutputAuthor");
let OutputPage = document.getElementById("OutputPage");
let OutputRead = document.getElementById('OutputRead');
let checkbox = document.getElementById('checkbox');


btn.addEventListener("click",showModal);
cancel.addEventListener("click", hideModal);
Add.addEventListener("click", AddBook);


function showModal(){
    modal.style.display = "block";
    document.body.style.background = "grey";
    // console.log('12  3');
}

function hideModal(){
    modal.style.display = "none";
    document.body.style.background = "white";
    // console.log("125");
}


function AddBook(){
    let library = {
        book : [],
        author : [],
        pages : [],
    }
    let books = bookName.value;
    let writers = Author.value;
    let TotalPages = pages.value;


    if (books === ''){
        alert("please enter a value!");
    }
    library.book.push(books);
    library.author.push(writers);
    library.pages.push(TotalPages);
    

    OutputName.innerHTML  = `${books}`;
    OutputAuthor.textContent = `${writers}`;
    OutputPage.textContent = `${TotalPages}`;

    hideModal()
}

function checkingBox(){
    checkbox.addEventListener('change',(e)=>{
        if (e.target === true){
            OutputRead.innerHTML = 'Yes ,read the book'
            console.log('789')
        }
        else{
            OutputRead.innerHTML = 'Nope! not yet'
        }
    })

    AddBook()
}