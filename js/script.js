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


let word = "magnolia";

let guessedLetters = [];

let guessesRemaining = 8;

const getWord = async function (){
    const requestWord = await fetch (`https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt`);
    const wordData = await requestWord.text();
    const randomWord = wordData.split("\n");
    // const nameResults = wordData.name;
    const randomIndex = Math.floor(Math.random() * randomWord.length);
    word = randomWord[randomIndex].trim().toUpperCase();
    // console.log(randomWord);
    placeHolder(word);
}

getWord();

const placeHolder = function (word){
    const placeHolderLetter = [];
    for(const letter of word){
        // console.log(letter);
        placeHolderLetter.push("_");
    }
    wordsInProgress.innerText = placeHolderLetter.join("");
};


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
    countGuessesRemaining (guess);
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

// Function to update Guesses Remaining

const countGuessesRemaining = function (guess) {
    const wordUpper = word.toUpperCase();
    if(wordUpper.includes(guess)){
        message.innerText = `Good guess! The word has the letter ${guess}`;
    } else {
        message.innerText = `Sorry, the word does not have the letter ${guess}`;
        guessesRemaining -= 1;
    }
    if(guessesRemaining === 0){
        message.innerHTML = `<p> Game over! The correct word is ${word}`;
        startOver();
    } else if (guessesRemaining === 1){
        numberOfGuesses.innerText = "1 guess";
    }else {
        numberOfGuesses.innerText = `${guessesRemaining} guesses`;
    }
};

// Function to check if the player won

const win = function (){
    if(word.toUpperCase() === wordsInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;

        startOver();
    }
    
}   

const startOver = function () {
    buttonGuess.classList.add("hide");
    remainingGuesses.classList.add("hide");
    guessedLettersElement.classList.add("hide");
    playAgain.classList.remove("hide");
}


playAgain.addEventListener("click", function() {
    message.classList.remove("win");
    message.innerHTML = "";
    guessedLettersElement.innerText = "";
    guessesRemaining = 8;
    guessedLetters = [];
    numberOfGuesses.innerText = `${guessesRemaining} guesses`;

    getWord();

    buttonGuess.classList.remove("hide");
    remainingGuesses.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
    playAgain.classList.add("hide");


});