// Function to roll the dice
function rollDice() {
    const dice1El = document.getElementById("dice1");
    const dice2El = document.getElementById("dice2");
    const resultEl = document.getElementById("result");
  
    // Temporarily display the rolling GIF
    dice1El.src = "diceroll.gif";
    dice2El.src = "diceroll.gif";
    resultEl.textContent = "Rolling...";
  
    // After 1 second, show the result
    setTimeout(() => {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
  
      // Update dice images
      dice1El.src = `dice${dice1}.png`;
      dice2El.src = `dice${dice2}.png`;
  
      // Determine the winner
      if (dice1 > dice2) {
        resultEl.textContent = `${document.getElementById("player1-name").textContent} WINS!`;
      } else if (dice2 > dice1) {
        resultEl.textContent = `${document.getElementById("player2-name").textContent} WINS!`;
      } else {
        resultEl.textContent = "It's a TIE!";
      }
    }, 1000);
  }
  
  // Function to edit player names
  function editNames() {
    const player1 = prompt("Enter Player 1 Name:", document.getElementById("player1-name").textContent);
    const player2 = prompt("Enter Player 2 Name:", document.getElementById("player2-name").textContent);
  
    if (player1) document.getElementById("player1-name").textContent = player1;
    if (player2) document.getElementById("player2-name").textContent = player2;
  }
  