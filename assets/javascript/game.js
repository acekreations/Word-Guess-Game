// VARIABLES
var alphabet = "abcdefghijklmnopqrstuvwrxyz";
alphabet = alphabet.split("");
var cars = ["mustang", "camero", "stingray", "cobra", "gto"];
var gameNum = 0;
var wins = 0;
var reamainingGuesses = 10;
var guessedLetters = [];
//Empty word object
var correctLetters = {
}

// FUNCTIONS

function generateWord() {
  //turn word into array
  letterArray = cars[gameNum].split("");
  //put array of word into word object
  letterArray.forEach(function(letter){
    correctLetters[letter] = "";
  });
}

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

function displayReamainingGuesses() {
  document.getElementById("reamainingGuesses").textContent = reamainingGuesses;
}

function gameOver() {
  gameNum = 0;
  wins = 0;
  document.getElementById("gamesWon").textContent = wins;
  gameReset();
}

function gameReset(){
  if (gameNum >= cars.length) {
    gameOver();
  }
  else {
    reamainingGuesses = 10;
    guessedLetters = [];
    correctLetters = {};
    document.getElementById("guessedLetters").textContent = guessedLetters;
    generateWord();
    refreshBlankLetters();
    displayReamainingGuesses();
  }
}

function gameWon() {
  wins++;
  document.getElementById("gamesWon").textContent = wins;
  gameNum++;
  gameReset();
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

// GAME LOGIC

//Initialize game
generateWord();
refreshBlankLetters();

document.onkeyup = function(event){
  var key = event.key;
  if (alphabet.indexOf(key) >= 0) {
    //Check if user has any guesses left
    if (reamainingGuesses > 1) {
      //Check if user has aready made this guess
      if (guessedLetters.indexOf(key) >= 0) {
      }
      //Check if letter is in word
      else if (cars[gameNum].indexOf(key) >= 0) {
        correctLetters[key] = key;
        guessedLetters.push(key);
        document.getElementById("guessedLetters").textContent = guessedLetters;
        refreshBlankLetters();
        checkForWin();
      }
      //Else user did not get a letter
      else {
        guessedLetters.push(key);
        document.getElementById("guessedLetters").textContent = guessedLetters;
        reamainingGuesses--;
      }
    }
    else {
      gameReset();
    }
    displayReamainingGuesses();
  }
}
