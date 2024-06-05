var words = ["Sound Design?", "Music Production?", "Mixing?", "Mastering?", "Film Mix?"];

// Function to change text every 5 seconds
function changeText() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var newText = words[randomIndex];
    document.getElementById("skills").textContent = newText;
}

// Call changeText every 5 seconds
setInterval(changeText, 3000);




