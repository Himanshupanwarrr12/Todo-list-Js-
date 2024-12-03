// Game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");

// Function to handle guesses
function checkGuess() {
  const guess = parseInt(guessInput.value);
  attempts++;

  if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
    submitButton.disabled = true; // Disable the submit button
  } else {
    message.textContent = "Invalid input. Please enter a number.";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (attempts >= maxAttempts && guess !== randomNumber) {
    message.textContent = `Game over! The number was ${randomNumber}.`;
    submitButton.disabled = true; // Disable the submit button
  }
  guessInput.value=''
}

// Function to restart the game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Reset random number
  attempts = 0; // Reset attempts
  message.textContent = "Guess the number between 1 and 100!";
  attemptsDisplay.textContent = "Attempts: 0";
  guessInput.value = ""; // Clear input
  submitButton.disabled = false; // Enable the submit button
  guessInput.value = "";
}

// Event listeners
submitButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

