const wordList = [
  "hangman",
  "javascript",
  "developer",
  "coding",
  "programming",
];
let secretWord = "";
let displayWord = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

function startGame() {
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  displayWord = Array(secretWord.length).fill("_");
  updateDisplay();
  document.getElementById("result").textContent = "";
}

function updateDisplay() {
  document.getElementById("wordDisplay").textContent = displayWord.join(" ");
}

function makeGuess() {
  const guessInput = document.getElementById("guessInput").value.toLowerCase();

  if (guessInput.length !== 1 || !/[a-z]/.test(guessInput)) {
    document.getElementById("result").textContent =
      "Please enter a valid single letter.";
    return;
  }

  if (displayWord.includes(guessInput)) {
    document.getElementById("result").textContent =
      "You already guessed that letter.";
    return;
  }

  if (secretWord.includes(guessInput)) {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guessInput) {
        displayWord[i] = guessInput;
      }
    }

    if (!displayWord.includes("_")) {
      document.getElementById("result").textContent =
        "Congratulations! You guessed the word.";
    }
  } else {
    incorrectGuesses++;

    if (incorrectGuesses === maxIncorrectGuesses) {
      document.getElementById(
        "result"
      ).textContent = `Sorry, you ran out of attempts. The word was: ${secretWord}`;
    }
  }

  updateDisplay();
  document.getElementById("guessInput").value = "";
}

startGame();
