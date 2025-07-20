let userScore = 0;
let computerScore = 0;

// Load sounds
const clickSound = new Audio('sounds/audio2.mp3');  // user click
const winSound = new Audio('sounds/audio1.mp3');

function playGame(userChoice) {
  // Step 1: Play user click sound
  clickSound.play();

  // Step 2: Random computer choice
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Step 3: Play computer click sound after short delay (200ms)
  // setTimeout(() => {
    // computerClickSound.play();
  // }, 100);

  let result = '';
  let isWin = false;

  // Step 4: Determine result
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    userScore++;
    isWin = true;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  // Step 5: Update score and UI immediately
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;

  document.getElementById("result").innerHTML = `
    You chose <strong>${userChoice}</strong><br>
    Computer chose <strong>${computerChoice}</strong><br>
    <strong>${result}</strong>
  `;

  // Step 6: Play win sound after both clicks are done (600ms)
  if (isWin) {
    setTimeout(() => {
      winSound.play();
    }, 1000);
  }
}