
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const btnquote = document.querySelector("#btnquote");

const quotes = [{
    quote: "“Be yourself; everyone else is already taken.”",
    person: "Oscar Wilde"
},{
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    person: "Marilyn Monroe"
},{
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    person: "Albert Einstein"
},{
    quote: "“So many books, so little time.”",
    person: "Frank Zappa"
},{
    quote: "“A room without books is like a body without a soul.”",
    person: "Marcus Tullius Cicero"
},{
    quote: '"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."',
    person: "Abraham lincoln"
}];

btnquote.addEventListener("click", function(){
    let randomQuotes = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomQuotes].quote;
    person.innerText = quotes[randomQuotes].person;
})