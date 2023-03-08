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


const word = "magnolia";

const placeHolder = function (word){
    const placeHolderLetter = [];
    for(const letter of word){
    console.log(letter);
    placeHolderLetter.push("●");
}
    wordsInProgress.innerText = placeHolderLetter.join("");
};
placeHolder(word);

// function guess Button------------------------------
buttonGuess.addEventListener("click", function(e){
    e.preventDefault();
    const eachLetter = letters.value;
    console.log(eachLetter);
    letters.value = "";
});
// it does the same ass the button by pressing Enter
document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
    const eachLetter = letters.value;
    console.log(eachLetter);
    letters.value = "";
}});

