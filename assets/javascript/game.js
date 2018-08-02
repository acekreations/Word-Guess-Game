var alphabet = "abcdefghijklmnopqrstuvwrxyz";
alphabet = alphabet.split("");
var cars = ["mustang", "camero", "stingray", "cobra", "charger"];
var gameNum = 0;
var wins = 0;
var reamainingGuesses = 15;
var guessedLetters = [];

//Empty word object
var correctLetters = {
}

//turn word into array
letterArray = cars[gameNum].split("");

//put array of word into word object
letterArray.forEach(function(letter){
  correctLetters[letter] = "";
});

//loop through word object
function refreshBlankLetters(){
  document.getElementById("correctLetters").innerHTML = "";
  Object.keys(correctLetters).forEach(function(key) {
    var newLi = document.createElement("li");
    newLi.classList.add("blankSpaces");
    newLi.innerHTML = correctLetters[key];
    document.getElementById("correctLetters").appendChild(newLi);
  });
}

function gameWon() {
  console.log("You won!");
}

//function check for empty objects to determine if word has been guessed
function checkForWin() {
  var stillEmptyLetters = 0;
  Object.keys(correctLetters).forEach(function(key) {
    //correctLetters[key]
    if (correctLetters[key].length == 0) {
      stillEmptyLetters++;
    }
  });
  if (stillEmptyLetters === 0) {
    gameWon();
  }
}

//Initialize blank letters on load
refreshBlankLetters();


document.onkeyup = function(event){
  var key = event.key;
  if (alphabet.indexOf(key) >= 0) {
    console.log(key);
    //Check if user has any guesses left
    if (reamainingGuesses > 0) {
      //Check if user has aready made this guess
      if (guessedLetters.indexOf(key) >= 0) {
        console.log("already guessed");
      }
      else if (cars[gameNum].indexOf(key) >= 0) {
        correctLetters[key] = key;
        guessedLetters.push(key);
        refreshBlankLetters();
        console.log("got one");
        checkForWin();
      }
    }
    else {
      console.log("no more guesses");
    }
  }
}
