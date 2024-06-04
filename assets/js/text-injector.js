import data from './data/text.json' assert { type: 'json' };

var intro_title = data.intro.title;
var intro_text = data.intro.text;

document.getElementById('intro_title').innerHTML = intro_title;
document.getElementById('intro_text').innerHTML = intro_text;