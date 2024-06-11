function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid - 1;
  backDropElement.style.display = "block";
  modalElement.style.display = "block";
}

function closePlayerConfig(event) {
  backDropElement.style.display = "none";
  modalElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorTextElement.style.display = "none";
  formElement.firstElementChild.children[1].value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const eneteredName = formData.get("playername").trim();
  console.log(eneteredName);

  if (!eneteredName) {
    console.log("entered");
    event.target.firstElementChild.classList.add("error");
    errorTextElement.style.display = "block";
    return;
  }
  playersListElement.children[
    editedPlayer
  ].firstElementChild.children[1].textContent = eneteredName;

  playersDetails[editedPlayer].playerName = eneteredName;

  closePlayerConfig();
}
