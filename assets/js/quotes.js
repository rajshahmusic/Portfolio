// import data from "{{ '/assets/data/quotes.json' | relative_url }}" assert { type: 'json' };


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// var i = getRandomInt(358);

// var quote = data.quotes[i].quote;
// var author = data.quotes[i].author;


// document.getElementById("quote").innerHTML = '"' + quote + '"';
// document.getElementById("author").innerHTML = '-' + author;

document.addEventListener("DOMContentLoaded", function() {
  fetch("{{ '/assets/data/quotes.json' | relative_url }}")
    .then(response => response.json())
    .then(data => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      var i = getRandomInt(data.quotes.length);

      var quote = data.quotes[i].quote;
      var author = data.quotes[i].author;

      document.getElementById("quote").innerHTML = '"' + quote + '"';
      document.getElementById("author").innerHTML = '-' + author;
    })
    .catch(error => {
      console.error('Error fetching quotes:', error);
    });
});