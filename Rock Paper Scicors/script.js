const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach((possibleChoice)=>{
    possibleChoice.addEventListener('click', (e)=>{
        userChoice = e.target.innerText
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        generatedResult()
    })
})

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1;  //this will generate a random number between 1 and 3
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber ===2) {
        computerChoice ='Paper'
    }
    if(randomNumber ===3){
        computerChoice ='Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function generatedResult(){
    if(computerChoice === userChoice){
        result = "Draw😏"
    }
    if(computerChoice === 'Stone' && userChoice ==='Paper'){
        result = "You Win!🤩"
    }
    if(computerChoice === 'Paper' && userChoice ==='Stone'){
        result = "You Lose!😥"
    }
    if(computerChoice === 'Stone' && userChoice ==='Scissors' ){
        result = "You Lose!😥"
    }
    if(computerChoice === 'Scissors' && userChoice ==='Stone') {
        result = "You Win!🤩"
    }
    if(computerChoice === 'Paper' && userChoice === 'Stone') {
        result = "You Win!🤩"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper' ){
        result = "You Lose!😥" 
    }
    if(computerChoice === 'Paper' && userChoice ==='Scissors'){
        result = "You Win!🤩"
    }
    resultDisplay.innerHTML = result
}