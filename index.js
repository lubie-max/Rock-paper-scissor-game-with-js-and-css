

var playerScore = 0

var disclaimer =" "

var Score = document.getElementById('score')
console.log(Score.innerText)
let Disclaimer = document.getElementById('disclaimer')
console.log(Disclaimer.innerText)

//  ---------------getcomputerChoice() Funcion---------------------

const getComputerChoice = ()=>{

    let choices =['rock','paper','scissor']

    const randomCompChoice= Math.floor(Math.random() * choices.length)
    
    console.log(randomCompChoice)
    return  choices[randomCompChoice]
}


//  ---------------getUserInput() Funcion---------------------
const getUserChoice =(inputValue)=>{
    console.log('this is user input value',inputValue)
    return inputValue 

}


// ------------------------result function-------------
function result(computerChoice, userChoice) {

    if (userChoice === computerChoice){
        disclaimer=`Computer Chose: ${computerChoice}`
        return playerScore = 'Draw!!'

    }
    else if (userChoice == 'rock' && computerChoice == 'scissor'){
        disclaimer=`Computer Chose: ${computerChoice}`
        return playerScore = 'You Won!!'

    }
    else if (userChoice == 'scissor' && computerChoice == 'paper'){
        console.log('You winn!')
        disclaimer=`Computer Chose: ${computerChoice}`
        return playerScore = 'You Won!!'

    }
    else if (userChoice == 'paper' && computerChoice == 'rock'){
        disclaimer=`Computer Chose: ${computerChoice}`
        return playerScore = 'You Won!!'

    }
    else{
        disclaimer=`Computer Chose: ${computerChoice}`
        return playerScore = 'You Lose!!'
    }
}


// ----------play game function----------
function playGame(){
   
    const Inputs = document.querySelectorAll('.rpcButton')


Inputs.forEach(uInput =>{

    uInput.onclick = ()  => {
        
        const userChoice= getUserChoice(uInput.value)
    console.log(userChoice , "==> user Choice")

    const computerChoice =  getComputerChoice()
    console.log(computerChoice , '==> computer choice')
    
    const Result =result(computerChoice, userChoice)
    console.log(Result , '==> result')
    Score.innerText = playerScore
    Disclaimer.innerText = disclaimer

    }
})
}

const endGameFunction = ()=>{
    Disclaimer.innerText = `Game is ended by you..!`
    Score.innerHTML =  'Ended up.'
    console.log('endgame fun')
    playGame()

}
var endGame =document.getElementById('endGame')

endGame.onclick = ()=> endGameFunction()


playGame()
