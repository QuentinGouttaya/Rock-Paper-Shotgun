// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const choice = Math.floor(Math.random() * 3)
  const computerChoice = choices[choice]
  return computerChoice
  
}

// ** getResult compares playerChoice & computerChoice and returns the score **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0


  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }

  else if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||
    playerChoice == 'Paper' && computerChoice == 'Rock' ||
    playerChoice == 'Scissors' && computerChoice == 'Paper') {

    score = 1
  } else {
    score = -1
  }
  // return score
  return Number(score)
}

//showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  handsDiv.innerText = `Player chose ${playerChoice} | Computer chose ${computerChoice}`
  if (score == 1) {
    resultDiv.innerText = 'You win'
  } else if (score == -1) {
    resultDiv.innerText = 'You lose'
  } else {
    resultDiv.innerText = 'It is a draw !'
  }
}


//Calculate who won and show it on the screen
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const buttons = document.querySelectorAll('.rpsButton')
  buttons.forEach(button => {
  button.onclick = () => {
    onClickRPS(button.value)
  }
})
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => {
    endGame()
  }
  
}

//endGame function clears all the text on the DOM
function endGame() {
  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  
}

playGame()