/* functions from ODIN - getComputerChoice
playRound function with 2 parameters - playerSelection and computerSelection
 ^^ should return a STRING that declares the winner in "You Lose! Paper beats Rock." format
game() function that contains the playRound function

needs to read button selection from user - when button is pressed, also randomizes CPU selection
change images of user selection to what user selected - do the same for CPU
change instructions/win condition text to the round results
first to 5 - displays a "play again" after either user/cpu wins + wipes scores and resets placeholder images

*/
let playerWins=0;
let computerWins=0;
let rockPic = "url('./img/rock.png')"
let scissorsPic = "url('./img/scissors.jpg')"
let paperPic = "url('./img/paper.jpg')"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//creates a popup to declare winner - refreshes the page
var gameOver = function(winner){
    alert(winner + ' won! Press OK to play again.')
    location.reload();
}

//function that determines the winner, returns string based on the result, adds a counter to the winner
var playRound = function(playerSelection, computerSelection) {
    document.getElementById('h3').innerHTML='';

    if(playerSelection =='rock' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
    } else if(playerSelection =='rock' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        playerWins++;
    }else if(playerSelection =='rock' && computerSelection == 'paper'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        computerWins++;
    }

    if(playerSelection =='paper' && computerSelection == 'paper'){
         document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
    } else if(playerSelection =='paper' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        playerWins++;
    }else if(playerSelection =='paper' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        computerWins++;
    }

    if(playerSelection =='scissors' && computerSelection == 'scissors'){
        document.getElementById('h2').innerHTML=`it's a tie! you both selected ${playerSelection}`;
    } else if(playerSelection =='scissors' && computerSelection == 'paper'){
        document.getElementById('h2').innerHTML=`you win! ${playerSelection} beats ${computerSelection}.`;
        playerWins++;
    }else if(playerSelection =='scissors' && computerSelection == 'rock'){
        document.getElementById('h2').innerHTML=`you lose! ${computerSelection} loses to ${playerSelection}.`;
        computerWins++;
    }

    document.getElementById('userScore').innerHTML=playerWins;
    document.getElementById('computerScore').innerHTML=computerWins;

    if(playerWins >=5){
        gameOver('You');
    }
    else if(computerWins >=5){
        gameOver('The computer')
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
  
