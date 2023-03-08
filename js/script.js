// ULThe unordered list 
const guessedLetters = document.querySelector(".guessed-letters");
// button with the text “Guess!"
const buttonGuess = document.querySelector(".guess");
// The text input where the player will guess a letter.
const letters = document.querySelector("input");
// The empty paragraph where the word in progress will appear.
const wordsInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
// The span inside the paragraph
const numberOfGuesses = document.querySelector(".number-of-guesses");
// The empty paragraph where messages will appear
const message = document.querySelector(".message");
// Play again button
const playAgain = document.querySelector(".play-again");

// console.log(playAgain);

const word = ["m", "a", "g", "n", "o", "l", "i", "a"];

const placeHolderLetters = function (word){
    wordsInProgress.innerText = "●";
};

placeHolderLetters(word.join(""));