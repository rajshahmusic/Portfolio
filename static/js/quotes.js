import data from './quotes.json' assert { type: 'json' };


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var i = getRandomInt(358);

var quote = data.quotes[i].quote;
var author = data.quotes[i].author;


document.getElementById("quote").innerHTML = '"' + quote + '"';
document.getElementById("author").innerHTML = '-' + author;