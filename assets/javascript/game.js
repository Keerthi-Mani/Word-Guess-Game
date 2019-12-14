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

  var computerChoice = country(Math.floor(Math.random() * countries.length));
  //creating variables
  var wins = 0;
  var losses = 0;
  var guessleft = 10;
  var guessedWord = [];

  //function runs whenever the user presses the key
  document.onkeyup = function(event) {
    //determines which key was pressed
    var userGuess = event.key.toLowerCase();

    //alert the user to type only the alphabet keys
    if (event.which < 65 || event.which > 90) {
      alert("Only a to z characters are allowed");
      return;
    }
  };
});
