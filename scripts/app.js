import { playerFlag, CreatePlayerVsPlayerContent } from "./playerVsPlayerGame.js"
import { cpuFlag, CreatePlayerVsCpuContent } from "./playerVsCpuGame.js"
console.log(playerFlag);
console.log(cpuFlag);

let mainContent = document.getElementById('mainContent');
let playBtn = document.getElementById('playBtn');
let errorMessage = document.getElementById('errorMessage');

//input values of player mode
let playerSelect = document.getElementById('playerSelect');
let playerVsCpu = document.getElementById('playerVsCpu');
let playerVsPlayer = document.getElementById('playerVsPlayer');

//input values of game mode
let gameSelect = document.getElementById('gameSelect');
let oneOfOne = document.getElementById('oneOfOne');
let threeOfFive = document.getElementById('threeOfFive');
let fourOfSeven = document.getElementById('fourOfSeven');

let playerMode = '';
let gameMode = 'unset';
playerSelect.addEventListener('click', function () {
    playerMode = this.value;
});

gameSelect.addEventListener('click', function () {
    gameMode = this.value;
});

playBtn.addEventListener('click', function () {
    if (playerMode === playerVsPlayer.value && (gameMode === oneOfOne.value || gameMode === threeOfFive.value || gameMode === fourOfSeven.value)) {
        ClearMainMenu();
        CreatePlayerVsPlayerContent(gameMode);
    }
    else if (playerMode === playerVsCpu.value && (gameMode === oneOfOne.value || gameMode === threeOfFive.value || gameMode === fourOfSeven.value)) {
        ClearMainMenu();
        CreatePlayerVsCpuContent(gameMode);
    }
    else
    {
        if(playerMode === playerSelect.value)
        {
            gameSelect.classList.add('turnRed', 'shake');
        }
        else if(gameMode === gameSelect.value)
        {
            playerSelect.classList.add('turnRed', 'shake');
        }
        else
        {
            playerSelect.classList.add('turnRed', 'shake');
            gameSelect.classList.add('turnRed', 'shake');
        }
        errorMessage.textContent = "Error: Please choose a Player Mode and Game Mode!";
    }
});

const ClearMainMenu = () => {
    mainContent.innerHTML = '';
};