// scripts.js

//button new game
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);
//player pick element: rock, paper, scissors
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
//initial value
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//display game elements
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  	switch(gameState) {
    	case 'started':
        	newGameElem.style.display = 'none';
        	pickElem.style.display = 'block';
        	resultsElem.style.display = 'block';
    	break;
    	case 'ended':
        	newGameBtn.innerText = 'Jeszcze raz';
    	case 'notStarted':
    	default:
        	newGameElem.style.display = 'block';
        	pickElem.style.display = 'none';
        	resultsElem.style.display = 'none';
  	}
}
setGameElements();
//new game
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
    	player.score = computer.score = 0;
    	gameState = 'started';
		setGameElements();

    	playerNameElem.innerHTML = player.name;
    	setGamePoints(); 
  	}

}
//player selection
function playerPick(playerPick) {
    console.log(playerPick);
}
//computer selection and results
var x = Math.random();
Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

//awarding points
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints()
}
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}
//update result
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

    endGame();
}
//end of the game
function endGame() {
	if (player.score == 10) {
		gameState = 'ended';
		alert(player.name + ' You win!');
	} else if (computer.score == 10) {
		gameState = 'ended';
		alert('Computer win!');
	}	
}
