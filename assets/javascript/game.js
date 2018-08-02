var cars = ["mustang", "camero", "stingray", "cobra", "charger"];
var gameNum = 0;
var wins = 0;
var reamainingGuesses = 15;
var guessedLetters = [];

//Empty word object
var word = {
}

//turn word into array
letterArray = cars[gameNum].split("");

//put array of word into word object
letterArray.forEach(function(letter){
  word[letter] = "";
});

//loop through word object
function refreshBlankLetters(){
  document.getElementById("correctLetters").innerHTML = "";
  Object.keys(word).forEach(function(key) {
    var newLi = document.createElement("li");
    newLi.classList.add("blankSpaces");
    newLi.innerHTML = word[key];
    document.getElementById("correctLetters").appendChild(newLi);
  });
}

refreshBlankLetters();


document.onkeyup = function(event){
  var key = event.key;
  console.log(key);
  //Check if user has any guesses left
  if (reamainingGuesses > 0) {
    //Check if user has aready made this guess
    if (guessedLetters.indexOf(key) >= 0) {
      console.log("already guessed");
    }
    else if (cars[gameNum].indexOf(key) >= 0) {
      word[key] = key;
      guessedLetters.push(key);
      refreshBlankLetters();
      console.log("got one");
    }
  }
}
