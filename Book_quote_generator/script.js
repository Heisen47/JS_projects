let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes =[
    { quote:`"When I look at a person, I see a person - not a rank, not a class, not a title."`
    ,person:`Criss Jami`
},
    { quote:`"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly."`
    ,person:`Sam Keen`
},
    { quote:`"A person was like a city. You couldn't let a few less desirable parts put you off the whole. There may be bits you don't like, a few dodgy side streets and suburbs, but the good stuff makes it worthwhile."`
    ,person:`Matt Haig`
},
    { quote:`"Before, I wanted to say: "I found love!" But now, I want to say: "I found a person. And he belongs to me and I belong to him."`
    ,person:`C. JoyBell C.`
},
    { quote:`"I do know that for the sympathy of one living being, I would make peace with all. I have love in me the likes of which you can scarcely imagine and rage the likes of which you would not believe. If I cannot satisfy the one, I will indulge the other."`
    ,person:`Mary Shelley`
},
    { quote:`"Is it possible for home to be a person and not a place?"`
    ,person:`Stephanie Perkins`
},
    { quote:`"Plants are more courageous than almost all human beings: an orange tree would rather die than produce lemons, whereas instead of dying the average person would rather be someone they are not."`
    ,person:`Mokokoma Mokhonoana`
},
    { quote:`"Far too many people are looking for the right person, instead of trying to be the right person."`
    ,person:`Gloria Steinem`
},
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
