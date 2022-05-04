'use strict';
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min-1);
}
let valueInput
let random = getRandomArbitrary(1,21)
let input = document.querySelector('.guess')
let buttonCheck = document.querySelector('.check')
let message = document.querySelector('.message')
let score = document.querySelector('.score')
let highScore = document.querySelector('.highscore')
let buttonAgain = document.querySelector('.again')
let body = document.querySelector('body')
let question = document.querySelector('.number')
let scoreText = score.innerText
let highScoreText = highScore.innerText

buttonCheck.addEventListener('click', (event) => {
  valueInput = Number(input.value)
  if (valueInput === random) {
    message.innerText = 'Correct number!'
    if (highScore.innerText < scoreText) {
      highScore.innerText = scoreText
    }
    body.classList.add('green')
    question.innerText = `${random}`
    
  } else if (valueInput < random) {
    message.innerText = 'Too low!'
    scoreText = Number(scoreText - 1)
    score.innerText = scoreText
  } else {
    message.innerText = 'Too high!'
    scoreText = Number(scoreText - 1)
    score.innerText = scoreText
  }
  
})
buttonAgain.addEventListener('click', (event) => {
  scoreText = '20'
  score.innerText = '20'
  input.value = ''
  random = getRandomArbitrary(1,21)
  body.classList.remove('green')
  console.log(random);
  question.innerText = '?'
})
