function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const diceImage = `dice${randomNumber}.png`;
  document.getElementById("dice").setAttribute("src", diceImage);
}