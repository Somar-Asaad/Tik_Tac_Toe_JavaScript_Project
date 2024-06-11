let editedPlayer = 0;

const gameBoardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const playersDetails = [
  {
    id: "1",
    symbol: "X",
    playerName: "",
  },
  {
    id: "2",
    symbol: "O",
    playerName: "",
  },
];

const backDropElement = document.getElementById("backdrop");
const modalElement = document.getElementById("modal");
const formElement = document.querySelector("form");
const errorTextElement = document.getElementById("error-text");
const playersListElement = document.getElementById("players-list");
const resultSectionElement = document.getElementById("result");

const editPlayer1NameButtonElement =
  document.getElementById("edit-player-1-btn");

const editPlayer2NameButtonElement =
  document.getElementById("edit-player-2-btn");

const cancelFormButtonElement = document.querySelector("#cancel-config-btn");
const startNewGameButton = document.getElementById("start-game-button");
const startGameBoard = document.getElementById("start-game-board");
const gameBoardListElements = document.getElementById("game-board");

editPlayer1NameButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2NameButtonElement.addEventListener("click", openPlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
cancelFormButtonElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameButton.addEventListener("click", startGame);
gameBoardListElements.addEventListener("click", selectGameField);
