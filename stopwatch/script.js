let Start = document.querySelector('.Start');
let pause = document.querySelector('.Pause');
let reset = document.querySelector('.Reset');

// Start.addEventListener('click', ()=>{
//     console.log('started!')
// })

let [seconds, minutes, hours] =[0,0,0];

let timer = document.querySelector('.countdown');

let int = null;

Start.addEventListener('click',()=>{
    if (int != null){
        clearInterval(int);
    }
    int = setInterval(displayTimer , 10);
});

pause.addEventListener('click',()=>{
    clearInterval(int);
});

reset.addEventListener('click',()=>{
    clearInterval(int);
    [seconds,minutes,hours]=[0,0,0];
    timer.innerHTML = '00 : 00 : 00';
});

let displayTimer = ()=>{
    
}