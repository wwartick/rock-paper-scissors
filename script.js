let playerWins=0;
let computerWins=0;

//random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//creates a popup to declare winner - refreshes the page
var gameOver = function(winner){
    if(winner == 'you'){
        document.getElementById('userScore').innerHTML="you win!";
        document.getElementById('computerScore').innerHTML="the computer loses";
    }
    else{
        document.getElementById('userScore').innerHTML="you lose";
        document.getElementById('computerScore').innerHTML="the computer won?";
    }
    setTimeout(function(){
        alert(winner + ' won! Press OK to play again.');
        location.reload();
    }, 10);
}

//function that determines the winner, returns string based on the result, adds a counter to the winner, changes border color for winner/loser/tie
var playRound = function(playerSelection, computerSelection) {
    //removes instruction text
    document.getElementById('h3').innerHTML='';

    //scenarios if player selects ROCK
    if(playerSelection =='rock' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
        document.getElementById("userChoice").style.borderColor = "#FAEF5D";
        document.getElementById("computerChoice").style.borderColor = "#FAEF5D"; 
    } else if(playerSelection =='rock' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "green";
        document.getElementById("computerChoice").style.borderColor = "red";
        playerWins++;
    }else if(playerSelection =='rock' && computerSelection == 'paper'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "red";
        document.getElementById("computerChoice").style.borderColor = "green";
        computerWins++;
    }
    //scenarios if player selects PAPER
    if(playerSelection =='paper' && computerSelection == 'paper'){
        document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
        document.getElementById("userChoice").style.borderColor = "#FAEF5D";
        document.getElementById("computerChoice").style.borderColor = "#FAEF5D";
    } else if(playerSelection =='paper' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "green";
        document.getElementById("computerChoice").style.borderColor = "red";
        playerWins++;
    }else if(playerSelection =='paper' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "red";
        document.getElementById("computerChoice").style.borderColor = "green";
        computerWins++;
    }
    //scenarios if player selects SCISSORS
    if(playerSelection =='scissors' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
        document.getElementById("userChoice").style.borderColor = "#FAEF5D";
        document.getElementById("computerChoice").style.borderColor = "#FAEF5D";
    } else if(playerSelection =='scissors' && computerSelection == 'paper'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "green";
        document.getElementById("computerChoice").style.borderColor = "red";
        playerWins++;
    }else if(playerSelection =='scissors' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        document.getElementById("userChoice").style.borderColor = "red";
        document.getElementById("computerChoice").style.borderColor = "green";
        computerWins++;
    }

    //changes the string to display the current score based on the rounds winner
    document.getElementById('userScore').innerHTML="you: " + playerWins;
    document.getElementById('computerScore').innerHTML="computer: " + computerWins;

    //calls a function that ends the game when a player reaches 5 points
    if(playerWins >=5){
        gameOver('you');
    }
    else if(computerWins >=5){
        gameOver('the computer')
    }
}

var game = function() {
    let computerChoice;
    //sets playerSelection to the pressed button
    let userChoice=this.id;
    //changes the players choice picture to the selected  meme
    switch(userChoice){
        case 'rock':
            document.getElementById('userChoice').src='./img/rock.png';
            break;
        case 'paper':
            document.getElementById('userChoice').src='./img/paper.jpg';
            break;
        case 'scissors': 
            document.getElementById('userChoice').src='./img/scissors.jpg';
            break;
    }
    //generates 0,1, or 2 randomly, and assigns a string value for the computers selection and changes the image
    let computerRandomizer=getRandomInt(3);
    switch(computerRandomizer){
        case 0:
            computerChoice = "rock";
            document.getElementById('computerChoice').src='./img/rock.png';
            break;
        case 1:
            computerChoice = "paper";
            document.getElementById('computerChoice').src='./img/paper.jpg';
            break;
        case 2: 
            computerChoice = "scissors";
            document.getElementById('computerChoice').src='./img/scissors.jpg';
            break;
    }
    playRound(userChoice, computerChoice);
}
 
//tracks which button gets clicked 
document.getElementById("rock").onclick = game;
document.getElementById("paper").onclick = game;
document.getElementById("scissors").onclick = game;
  
