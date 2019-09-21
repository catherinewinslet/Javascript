const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

colorBtn.addEventListener('click',hugeFunc);

function hugeFunc(){
    getHex();
    DisplayQuote();
}

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex = document.querySelector('.hex');

function getHex(){
    let hexCol = '';
    for( let i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol+=hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = '#'+hexCol;
    hex.innerHTML = hexCol;
}

const quotes = [
    {
        name: 'Catherine Winslet',
        quote: 'What? I don\'t know.. Drink more water, I guess.'
    },{
        name:'Oscar Wilde',
        quote:'Be yourself; everyone else is already taken.'
    },{
        name: 'Albert Einstein',
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },{
        name: 'Bernard M. Baruch',
        quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'
    },{
        name: 'J.K. Rowling',
        quote:'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.'
    }
]
const thequote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

function DisplayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    thequote.innerHTML = quotes[number].quote;

}

const messageIn = document.querySelector('#messageIn');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click',sendMsg);

function sendMsg(){
    let Qname = messageIn.value;
    let Qquote = message.value;
    if(Qquote === '' || Qname === ''){
        alert('Please enter something! Godammit!');
    }
    else{
        messageIn.value = '';
        message.value = '';
        quoteAuthor.innerHTML = Qname;
        thequote.innerHTML = Qquote;
    }
    
}