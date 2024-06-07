"use strict";

// Game Class
class RockPaperScissors {
  constructor() {
    // Select DOM elements
    this.computerChoiceDisplay = document.getElementById("computer-choice");
    this.userChoiceDisplay = document.getElementById("user-choice");
    this.resultDisplay = document.getElementById("result");
    this.userScoreDisplay = document.getElementById("user-score");
    this.computerScoreDisplay = document.getElementById("computer-score");
    this.roundNumberDisplay = document.getElementById("round-number");
    this.possibleChoices = document.querySelectorAll(
      "button.button--rock, button.button--paper, button.button--scissors"
    );
    this.restartButton = document.getElementById("restart");

    // Initialize Game state
    this.userChoice = null;
    this.computerChoice = null;
    this.result = null;
    this.userScore = 0;
    this.computerScore = 0;
    this.roundNumber = 1;
    this.maxRounds = 5;

    // Assign listeners to buttons
    this.init();
  }

  // Initialize event listeners
  init() {
    this.possibleChoices.forEach((choice) =>
      choice.addEventListener("click", (e) => this.handleUserChoice(e))
    );
    this.restartButton.addEventListener("click", () => this.restartGame());
  }

  // Handle user choice
  handleUserChoice(e) {
    if (this.roundNumber <= this.maxRounds) {
      this.userChoice = e.target.id;
      this.computerChoice = this.generateComputerChoice();
      this.result = this.calculateResult(this.userChoice, this.computerChoice);

      // Update displays
      this.updateDisplay(
        this.userChoiceDisplay,
        this.formatChoice(this.userChoice)
      );
      this.updateDisplay(
        this.computerChoiceDisplay,
        this.formatChoice(this.computerChoice)
      );
      this.updateDisplay(this.resultDisplay, this.result);

      // Update scores and round
      this.updateScores();
      this.updateRound();

      // Check if game over
      if (this.roundNumber > this.maxRounds) {
        this.endGame();
      }
    }
  }

  // Update display element with value
  updateDisplay(element, value) {
    element.textContent = value;
  }

  // Generate computer choice randomly
  generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Calculate result of round
  calculateResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a draw, mate!";

    const loseConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    return computerChoice === loseConditions[userChoice]
      ? "YOU WIN!"
      : "YOU LOSE!";
  }

  // Format choice for display
  formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
  }

  // Update scores based on result
  updateScores() {
    if (this.result === "YOU WIN!") {
      this.userScore++;
    } else if (this.result === "YOU LOSE!") {
      this.computerScore++;
    }

    this.updateDisplay(this.userScoreDisplay, this.userScore);
    this.updateDisplay(this.computerScoreDisplay, this.computerScore);
  }

  // Update round number
  updateRound() {
    this.roundNumber++;
    this.updateDisplay(this.roundNumberDisplay, this.roundNumber);
  }

  // End the game and display the winner
  endGame() {
    const finalResult =
      this.userScore > this.computerScore
        ? "You are the overall winner!"
        : this.userScore < this.computerScore
        ? "Computer is the overall winner!"
        : "It's a tie overall!";
    this.updateDisplay(this.resultDisplay, finalResult);
    this.possibleChoices.forEach((choice) => (choice.disabled = true));
    this.restartButton.style.display = "block";
  }

  // Restart the game
  restartGame() {
    this.userScore = 0;
    this.computerScore = 0;
    this.roundNumber = 1;
    this.updateDisplay(this.userScoreDisplay, this.userScore);
    this.updateDisplay(this.computerScoreDisplay, this.computerScore);
    this.updateDisplay(this.roundNumberDisplay, this.roundNumber);
    this.updateDisplay(this.resultDisplay, "");
    this.possibleChoices.forEach((choice) => (choice.disabled = false));
    this.restartButton.style.display = "none";
  }
}

// Initialize the game once the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => new RockPaperScissors());
