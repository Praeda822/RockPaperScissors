# PK_RockPaperScissors

### Rock, Paper, Scissors

This project is a simple Rock-Paper-Scissors game implemented using JavaScript, HTML, and CSS. The game allows the user to select either rock, paper, or scissors, and then displays the computer's randomly chosen option and the result of the game.

### Installation

To get started with this project, you can simply clone the repository and open the index.html file in your browser.

```
git clone https://github.com/yourusername/rock-paper-scissors.git
cd rock-paper-scissors
```

## Usage

Open the index.html file in your browser.
Click on one of the buttons (rock, paper, or scissors).
The game will display your choice, the computer's choice, and the result of the game.

## How It Works

### HTML Structure

The HTML file contains three main elements where the choices and result will be displayed:

```
<div id="computer-choice"></div>
<div id="user-choice"></div>
<div id="result"></div>
<button id="rock">Rock</button>
<button id="paper">Paper</button>
<button id="scissors">Scissors</button>
```

### Javascript

The JavaScript code handles the game logic and updates the display based on the user's choice and the computer's randomly generated choice

```
"use strict";

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

// Game state
let userChoice;
let computerChoice;
let result;

function init() {
  possibleChoices.forEach((choice) =>
    choice.addEventListener("click", handleUserChoice)
  );
}

const handleUserChoice = (e) => {
  const userChoice = e.target.id;
  const computerChoice = generateComputerChoice();
  const result = calculateResult(userChoice, computerChoice);

  updateDisplay(userChoiceDisplay, userChoice);
  updateDisplay(computerChoiceDisplay, computerChoice);
  updateDisplay(resultDisplay, result);
};

function updateDisplay(element, value) {
  element.innerHTML = value;
}

const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const calculateResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a draw, mate!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "rock")
  ) {
    return "YOU LOSE!";
  } else {
    return "YOU WIN!";
  }
};

// Initialize the game
init();
```

### Files

index.html: Contains the HTML structure of the game.
style.css: Contains the CSS styles for the game (not included in this example).
script.js: Contains the JavaScript code for the game logic.
Contributing
Contributions are welcome! If you have any suggestions or improvements, please open an issue or create a pull request.
