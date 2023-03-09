// 1 ULThe unordered list 
const guessedLettersElement = document.querySelector(".guessed-letters");
// 2 button with the text “Guess!"
const buttonGuess = document.querySelector(".guess");
// 3 The text input where the player will guess a letter.
const letterInput = document.querySelector("input");
// 4 The empty paragraph where the word in progress will appear.
const wordsInProgress = document.querySelector(".word-in-progress");

// 5 The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
// 6 The span inside the paragraph
const numberOfGuesses = document.querySelector(".number-of-guesses");
// 7 The empty paragraph where messages will appear
const message = document.querySelector(".message");
// 8 Play again button
const playAgain = document.querySelector(".play-again");


const word = "magnolia";

const guessedLetters = [];

const placeHolder = function (word){
    const placeHolderLetter = [];
    for(const letter of word){
        // console.log(letter);
        placeHolderLetter.push("_");
    }
    wordsInProgress.innerText = placeHolderLetter.join("");
};
placeHolder(word);

// function guess Button------------------------------
buttonGuess.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;

    const goodGuess = playerInput(guess);

    if(goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});


// it does the same ass the button by pressing Enter
// document.addEventListener("keydown", function(e){
//     if(e.key === "Enter"){
//         e.preventDefault();
//         const eachLetter = letters.value;
//         console.log(eachLetter);
//         letters.value = "";
//         playerInput(input);
// }});

const playerInput = function (input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
      // Is the input empty?
      message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
      // Did you type more than one letter?
      message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
      // Did you type a number, a special character or some other non letter thing?
      message.innerText = "Please enter a letter from A to Z.";
    } else {
      // We finally got a single letter, omg yay
      return input;
    }
  };


const makeGuess = function (guess) {
    guess = guess.toUpperCase();
// checking if that letter has been guessed before
if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed this letter";
} else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    displayLettersGuessed();
    updateWordInProgress(guessedLetters);
}
};

// Function to Show the Guessed Letters

const displayLettersGuessed = function (){
    guessedLettersElement.innerHTML = "";
    for(const letter of guessedLetters){
        const listOfLettersGuessed = document.createElement("li");
        listOfLettersGuessed.innerText = letter;
        guessedLettersElement.append(listOfLettersGuessed);
    }
};

// Function to Update the Word in Progress

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const newArray = [];
    for(const letter of wordArray){
        if(guessedLetters.includes(letter)){
            newArray.push(letter.toUpperCase());
        } else {
            newArray.push("_");
        }
    }
    wordsInProgress.innerText = newArray.join("");
    // pass this function in else of makeGuess function

    win();
}

// Function to check if the player won

const win = function (){
    if(word.toUpperCase() === wordsInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
}