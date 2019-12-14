$(document).ready(function() {
  //create an array
  var countries = [
    "angola",
    "belarus",
    "comoros",
    "dominica",
    "eswatini",
    "fiji",
    "grenada",
    "honduras",
    "indonesia",
    "jamaica",
    "kyrgyzstan",
    "liechtenstein",
    "mauritania",
    "nicaragua",
    "oman",
    "palestine",
    "qatar",
    "rwanda",
    "seychelles",
    "tuvalu",
    "uruguay",
    "vietnam",
    "yemen",
    "zimbabwe"
  ];

  //creating variables
  var wins = 0; // number of wins
  var losses = 0; //number os losses
  var guessleft = 10; // number of guesses remaining
  var guessedletters = []; // store the guessed letters
  var guessingWord = []; //store the "_" and to be used to replace the word
  var pauseGame = false; // when true game starts again
  var computerChoice;

  resetGame();

  //function runs whenever the user presses the key
  document.onkeyup = function(event) {
    if (isAlpha(event.key) && !pauseGame) {
      checkForLetter(event.key.toUpperCase());
    }
  };
  //Game Function
  //create variables that hold references to the places in the HTML where we want to display things.
  //updates the HTML from the function
  function updateScreen() {
    var userWord = document.getElementById("currentWord");
    var userwins = document.getElementById("totalWins");
    var userloss = document.getElementById("totalloss");
    var remainingLetters = document.getElementById("guessesleft");
    var guessedLetters = document.getElementById("guessedletters");

    userwins.innerText = "Wins :" + wins;
    userloss.innerText = "Losses :" + losses;
    remainingLetters.innerText = "Guesses Left :" + guessleft;
    guessedLetters.innerText = "Guessed Letters :" + guessedletters;
    userWord.innerText = "Guessed Word :" + guessingWord.join("");
  }
});
