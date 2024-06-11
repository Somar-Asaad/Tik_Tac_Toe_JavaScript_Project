let playerTurnNumber = 0;
let playerWinnerNumber = 0;
let currentRoundNumber = 1;

function resetGame() {
  playerTurnNumber = 0;
  playerWinnerNumber = 0;
  currentRoundNumber = 1;
  resultSectionElement.style.display = "none";
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameBoardData[i][j] = 0;
      const gameBoardItemElement = gameBoardListElements.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("played-item");
      gameBoardIndex++;
    }
  }
}

function switchPlayersTurn() {
  if (playerTurnNumber === 0) {
    playerTurnNumber = 1;
  } else {
    playerTurnNumber = 0;
  }
  startGameBoard.firstElementChild.firstElementChild.firstElementChild.textContent =
    playersDetails[playerTurnNumber].playerName;
}

function selectGameField(event) {
  console.log(gameBoardData);
  let selectedField = event.target;
  if (selectedField.tagName !== "LI" || playerWinnerNumber !== 0) {
    return;
  }
  if (selectedField.textContent !== "") {
    return;
  }
  let temp = playerTurnNumber;
  //minapulating the front-end
  selectedField.textContent = playersDetails[playerTurnNumber].symbol;
  selectedField.classList.add("played-item");

  //minapulating the data
  gameBoardData[selectedField.dataset.row][selectedField.dataset.col] =
    temp + 1;

  switchPlayersTurn();
  playerWinnerNumber = checkIfWinnerExist();
  if (playerWinnerNumber !== 0) {
    endGame();
  }
  currentRoundNumber++;
}

function endGame() {
  console.log(playerWinnerNumber);
  if (playerWinnerNumber - 1 < 0) {
    resultSectionElement.firstElementChild.textContent = "Its a draw";
    resultSectionElement.style.display = "block";
  } else {
    resultSectionElement.firstElementChild.firstElementChild.textContent =
      playersDetails[playerWinnerNumber - 1].playerName;
    resultSectionElement.style.display = "block";
  }
}

function checkIfWinnerExist() {
  //checking for rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoardData[i][0] > 0 &&
      gameBoardData[i][0] === gameBoardData[i][1] &&
      gameBoardData[i][1] === gameBoardData[i][2]
    ) {
      return gameBoardData[i][0];
    }
  }
  //checking for columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoardData[0][i] > 0 &&
      gameBoardData[0][i] === gameBoardData[1][i] &&
      gameBoardData[1][i] === gameBoardData[2][i]
    ) {
      return gameBoardData[0][i];
    }
  }
  //checking for diagonal top left to bottom right
  if (
    gameBoardData[0][0] > 0 &&
    gameBoardData[0][0] === gameBoardData[1][1] &&
    gameBoardData[2][2] === gameBoardData[1][1]
  ) {
    return gameBoardData[0][0];
  }
  //checking for diagonal bottom left to top right
  if (
    gameBoardData[2][0] > 0 &&
    gameBoardData[2][0] === gameBoardData[1][1] &&
    gameBoardData[0][2] === gameBoardData[1][1]
  ) {
    return gameBoardData[2][0];
  }

  //else check for draw
  if (currentRoundNumber === 9) {
    return -1;
  }

  return 0;
}

function startGame(event) {
  if (
    playersDetails[0].playerName === "" ||
    playersDetails[1].playername === ""
  ) {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGame();
  startGameBoard.style.display = "block";
  startGameBoard.firstElementChild.firstElementChild.firstElementChild.textContent =
    playersDetails[0].playerName;
}
