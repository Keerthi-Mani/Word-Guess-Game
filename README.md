<img width="1321" alt="Screen Shot 2019-12-14 at 4 47 55 PM" src="https://user-images.githubusercontent.com/52920074/70855003-a70d9d80-1e91-11ea-88eb-b4ed7e85d228.png">

## Overview

Test your guessing abilities! The User has (lucky number) 10 tries to correctly guess the word that the Computer is "thinking." Choose a theme for your game! I have picked countries theme. You can choose any subject for your theme, though, so be creative!

## How It Works

1. At the start of each round, the Computer randomly chooses a word.
2. The User tries to guess the Computer's word by pressing on any letter key from 'a' to 'z.'
3. The letters selected by the User shows up in 'Letters Guessed' for up to 10times (the number of guesses the User has to select the Computer's word).
4. When the User correcly guesses the word, the User wins by 1 point.
5. When the User incorrectly guesses the letter, the 'Number of Guesses' decreases by 1.
6. When the User runs out of guesses, the User losses by 1 point.
7. The game restarts once the User wins or loses.
8. Live link : [Click me !!](http://127.0.0.1:5500/index.html)

## Boiler Plate

```
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html
```

## Developer Notes

Open your Terminal and clone it

```
git clone git@github.com:Keerthi-Mani/Word-Guess-Game.git
```

### Built With

- CSS
- JavaScript

### Javascript

1. Created global variables to store values

2. Note: Variable 'numberGuesses' is equal to 10 to represent the number of guesses that the User has

3. Upon page load, the computer randomly selects a word when the function 'computerChoice' is called

4. The game is triggered by the event 'onkeyup' (the event that occurs when the User releases a key on the keyboard)

5. Variable 'userGuess' is the captured by the 'event.key' (the key on the keyboard the User releases captured by event).

6. Note: The 'userGuess' is updated each time a key is released.
7. To streamline the process, the built-in JavaScript function 'toUpperCase()' is used to change all keys selected to upperrcase because the computer recognizes a lowercase and an uppercase of the same letter as different letter (i.e. 'a' and 'A' are different choices).
8. If the 'userGuess' does not select the 'computerChoice', then the number of guesses stored in the variable 'Guesses Left' decreases by 1 and the 'userGuess' is added to (or "pushed") to the array 'Guessed so far', which stores and displays the User's keys guessed.
9. If the 'userGuess' selects the 'computerChoice', the User gets an alert of the Computer's letter and the number of wins stored in the variable 'wins' increases by 1 to represent each game won.
10. When the the variable Guessesleft reaches 0, the User gets an alert of the Computer's word and the number of losses to represent each game lost.
11. Note: When the function 'resetGame' is called, the variables 'wins' and 'loses' are not reset to keep track of the users points.

### Screenshot

<img width="1250" alt="Screen Shot 2019-12-14 at 4 48 06 PM" src="https://user-images.githubusercontent.com/52920074/70855006-a83eca80-1e91-11ea-90ef-943aa3678523.png">
