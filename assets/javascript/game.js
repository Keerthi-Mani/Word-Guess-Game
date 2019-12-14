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

  //Reset the game
  resetGame();

  //function runs whenever the user presses the key
  document.onkeyup = function(event) {
    if (isAlpha(event.key) && !pauseGame) {
      checkForLetter(event.key.toUpperCase());
    }
  };

  //Game Function
  function checkForLetter(letter) {
    var foundLetter = false;

    //Search string for letter
    for (var i = 0; i < computerChoice.length; i++) {
      if (letter === computerChoice[i]) {
        guessingWord[i] = letter;
        foundLetter = true;

        if (guessingWord.join("") === computerChoice) {
          wins++;
          pauseGame = true;
          // Update the Display
          updateDisplay();
        }
      }
    }
    if (!foundLetter) {
      if (!guessedletters.includes(letter)) {
        guessedletters.push(letter);
        guessleft--;
      }
      if (guessleft === 0) {
        losses++;
        guessingWord = computerChoice.split();
        pauseGame = true;
      }
    }
    // Update the Display
    updateDisplay();
  }

  //function-that-returns-true-if-a-letter is between A-Z or a-z
  function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
  }

  //Reset the game
  function resetGame() {
    guessleft = 10;
    wins = 0;
    losses = 0;
    pauseGame = false;

    //To get a new random word
    computerChoice = countries[
      Math.floor(Math.random() * countries.length)
    ].toUpperCase();

    //Reset word array
    guessedletters = [];
    guessingWord = [];

    //Reset the guessed word
    for (var i = 0; i < computerChoice.length; i++) {
      if (computerChoice[i] === " ") {
        guessingWord.push(" ");
      } else {
        guessingWord.push("_");
      }
    }
    // Update the Display
    updateDisplay();
  }

  //create variables that hold references to the places in the HTML where we want to display things.
  //updates the HTML from the function
  function updateDisplay() {
    var userWord = document.getElementById("currentWord");
    var userwins = document.getElementById("totalWins");
    var userloss = document.getElementById("totalloss");
    var remainingLetters = document.getElementById("guessesleft");
    var guessedLetters = document.getElementById("guessedletters");

    userwins.innerText = "Wins :" + wins;
    userloss.innerText = "Losses :" + losses;
    remainingLetters.innerText = "Guesses Left :" + guessleft;
    guessedLetters.innerText = "Guessed Letters :" + guessedletters.join(" ");
    userWord.innerText = "Guessed Word :" + guessingWord.join(" ");
  }
});
