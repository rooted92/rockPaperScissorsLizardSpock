let flag = true;

const CreatePlayerVsCpuContent = (gameModeValue) => {
    //START Zero'th container
    //make 'p' element
    let gameModeText = document.createElement('p');
    gameModeText.id = 'gameModeText';
    gameModeText.className = 'game-mode-text';
    gameModeText.textContent = '';

    //make 'col-12' div
    let colTwelveDiv = document.createElement('div');
    colTwelveDiv.className = 'col-12';

    //make fourth 'row' div
    let fourthRow = document.createElement('div');
    fourthRow.className = 'row text-center';
    fourthRow.appendChild(colTwelveDiv);
    fourthRow.appendChild(gameModeText);

    //make container for game level text
    let gameLevelTextContainer = document.createElement('div');
    gameLevelTextContainer.className = 'container-fluid';
    gameLevelTextContainer.appendChild(fourthRow);
    //END Zero'th container

    //START first container
    //make 'span' elements
    let playerOneSpan = document.createElement('span');
    playerOneSpan.id = 'scoreCounter';
    playerOneSpan.className = 'px-4 score';
    playerOneSpan.textContent = 0;
    let roundsSpan = document.createElement('span');
    roundsSpan.id = 'roundCounter';
    roundsSpan.className = 'px-4 score';
    roundsSpan.textContent = 0;
    let cpuSpan = document.createElement('span');
    cpuSpan.id = 'scoreCounter';
    cpuSpan.className = 'px-4 score';
    cpuSpan.textContent = 0;

    //make 'p' elements
    let playerOneText = document.createElement('p');
    playerOneText.className = 'score-text';
    playerOneText.textContent = 'Player 1:';
    let roundsText = document.createElement('p');
    roundsText.className = 'score-text';
    roundsText.textContent = 'Round:';
    let cpuText = document.createElement('p');
    cpuText.className = 'score-text';
    cpuText.textContent = 'CPU:';

    //make 'col-4' divs
    let firstColFourDiv = document.createElement('div');
    firstColFourDiv.className = 'col-4 d-flex justify-content-center';
    firstColFourDiv.appendChild(playerOneText)
    firstColFourDiv.appendChild(playerOneSpan);
    let secondColFourDiv = document.createElement('div');
    secondColFourDiv.className = 'col-4 d-flex justify-content-center';
    secondColFourDiv.appendChild(roundsText);
    secondColFourDiv.appendChild(roundsSpan);
    let thirdColFourDiv = document.createElement('div');
    thirdColFourDiv.className = 'col-4 d-flex justify-content-center';
    thirdColFourDiv.appendChild(cpuText);
    thirdColFourDiv.appendChild(cpuSpan);

    //make 'row' divs
    let firstRowDiv = document.createElement('div');
    firstRowDiv.className = 'row';
    firstRowDiv.appendChild(firstColFourDiv);
    firstRowDiv.appendChild(secondColFourDiv);
    firstRowDiv.appendChild(thirdColFourDiv);

    //add 'div' for score and rounds container
    let scoreAndRoundsContainer = document.createElement('div');
    scoreAndRoundsContainer.className = 'container-fluid my-5';
    scoreAndRoundsContainer.appendChild(firstRowDiv);
    //END first container

    //START second container
    //make 'p' elements
    let gameText = document.createElement('p');
    gameText.id = 'gameTextOutput';
    gameText.className = 'score-text';
    gameText.textContent = 'Player 1 make your choice';

    //make 'row' div
    let secondRowDiv = document.createElement('div');
    secondRowDiv.className = 'row text-center';
    secondRowDiv.appendChild(gameText);

    //make 'div' for text output
    let textOuputDiv = document.createElement('div');
    textOuputDiv.className = 'container-fluid my-5';
    textOuputDiv.appendChild(secondRowDiv);
    //END second container

    //START third container
    //make 'img' elements
    let rockImg = document.createElement('img');
    rockImg.className = 'images-row-gamePlay';
    rockImg.src = '../assets/apple-rock.png';
    rockImg.alt = 'rock';
    let paperImg = document.createElement('img');
    paperImg.className = 'images-row-gamePlay';
    paperImg.src = '../assets/apple-roll-of-paper.png';
    paperImg.alt = 'paper';
    let scissorsImg = document.createElement('img');
    scissorsImg.className = 'images-row-gamePlay';
    scissorsImg.src = '../assets/apple-scissors.png';
    scissorsImg.alt = 'scissors';
    let lizardImg = document.createElement('img');
    lizardImg.className = 'images-row-gamePlay';
    lizardImg.src = '../assets/lizard.png';
    lizardImg.alt = 'lizard';
    let spockImg = document.createElement('img');
    spockImg.className = 'images-row-gamePlay';
    spockImg.src = '../assets/apple-spock-hand.png';
    spockImg.alt = 'spock';

    //make 'button' elements
    let rockBtn = document.createElement('button')
    rockBtn.id = 'rock-btn';
    rockBtn.className = 'img-btn';
    rockBtn.value = 'rock';
    let paperBtn = document.createElement('button')
    paperBtn.id = 'paper-btn';
    paperBtn.className = 'img-btn';
    paperBtn.value = 'paper';
    let scissorsBtn = document.createElement('button')
    scissorsBtn.id = 'scissors-btn';
    scissorsBtn.className = 'img-btn';
    scissorsBtn.value = 'scissors';
    let lizardBtn = document.createElement('button')
    lizardBtn.id = 'lizard-btn';
    lizardBtn.className = 'img-btn';
    lizardBtn.value = 'lizard';
    let spockBtn = document.createElement('button')
    spockBtn.id = 'spock-btn';
    spockBtn.className = 'img-btn';
    spockBtn.value = 'spock';
    rockBtn.appendChild(rockImg);
    paperBtn.appendChild(paperImg);
    scissorsBtn.appendChild(scissorsImg);
    lizardBtn.appendChild(lizardImg);
    spockBtn.appendChild(spockImg);

    //make 'row' div for images
    let thirdRowDiv = document.createElement('div');
    thirdRowDiv.className = 'row d-flex justify-content-evenly';
    thirdRowDiv.appendChild(rockBtn);
    thirdRowDiv.appendChild(paperBtn);
    thirdRowDiv.appendChild(scissorsBtn);
    thirdRowDiv.appendChild(lizardBtn);
    thirdRowDiv.appendChild(spockBtn);

    //make 'div' container for images and buttons
    let imgContainer = document.createElement('div');
    imgContainer.id = 'gameEnds-imgs';
    imgContainer.className = 'container-fluid mt-5 img-container';
    imgContainer.appendChild(thirdRowDiv);
    //END third container

    //START fourth container
    //make return to main menu button
    let returnHomeBtn = document.createElement('button');
    returnHomeBtn.id = 'returnHome';
    returnHomeBtn.className = 'mainMenuBtn';
    returnHomeBtn.textContent = 'Return to Main Menu';

    //make link 'a' element
    let a = document.createElement('a');
    a.href = '../index.html';
    a.className = 'main-menu-link';
    a.appendChild(returnHomeBtn);

    //make 'col-12' div
    let secondColTwelve = document.createElement('div')
    secondColTwelve.className = 'col-12';

    //make 'row'div
    let mainMenuBtnRow = document.createElement('div')
    mainMenuBtnRow.className = 'row text-center';
    mainMenuBtnRow.appendChild(secondColTwelve);
    mainMenuBtnRow.appendChild(a);

    //make main menu btn container
    let mainMenuBtnContainer = document.createElement('div');
    mainMenuBtnContainer.className = 'container-fluid';
    mainMenuBtnContainer.appendChild(mainMenuBtnRow);
    //END fourth container

    //putting elements together
    mainContent.appendChild(gameLevelTextContainer);
    mainContent.appendChild(scoreAndRoundsContainer);
    mainContent.appendChild(textOuputDiv);
    mainContent.appendChild(imgContainer);
    mainContent.appendChild(mainMenuBtnContainer);

    //Player vs Player Game
    //global variables
    let playerOneInput;
    let cpuInput;
    let maxRounds = 0;
    let roundCounter = 0;
    let winningNumberThree = 0;
    let winningNumberFour = 0;
    let playerOneScore = Number(playerOneSpan.textContent);
    let cpuScore = Number(cpuSpan.textContent);
    let playerOneTurn = true;
    let bestOne = false;
    let bestThree = false;
    let bestFour = false;

    //check game level and set round value
    switch (gameModeValue) {
        case '1':
            gameModeText.textContent = 'Best 1 out of 1';
            maxRounds = 1;
            bestOne = true;
            break;
        case '3':
            gameModeText.textContent = 'Best 3 out of 5';
            maxRounds = 5;
            winningNumberThree = 3;
            bestThree = true;
            break;
        case '4':
            gameModeText.textContent = 'Best 4 out of 7';
            maxRounds = 7;
            winningNumberFour = 4;
            bestFour = true;
            break;
        default:
            break;
    }

    rockBtn.addEventListener('click', function () {
        playerOneInput = 'rock';
        GetCpuInput();
        PlayerVsCpu(playerOneInput, cpuInput);
    });

    paperBtn.addEventListener('click', function () {
        playerOneInput = 'paper';
        GetCpuInput();
        PlayerVsCpu(playerOneInput, cpuInput);
    });

    scissorsBtn.addEventListener('click', function () {
        playerOneInput = 'scissors';
        GetCpuInput();
        PlayerVsCpu(playerOneInput, cpuInput);
    });

    lizardBtn.addEventListener('click', function () {
        playerOneInput = 'lizard';
        GetCpuInput();
        PlayerVsCpu(playerOneInput, cpuInput);
    });

    spockBtn.addEventListener('click', function () {
        playerOneInput = 'rock';
        GetCpuInput();
        PlayerVsCpu(playerOneInput, cpuInput);
    });

    const PlayerVsCpu = (playerOne, cpu) => {
        if (playerOne === cpu) {
            gameText.textContent = 'TIE! Player 1 make your choice';
            roundsSpan.textContent++;
            roundCounter++;
        }
        else if ((playerOne === 'rock' && (cpu === "scissors" || cpu === "lizard")) || (playerOne === "paper" && (cpu === "rock" || cpu === "spock")) || (playerOne === "scissors" && (cpu === "lizard" || cpu === "paper")) || (playerOne === "lizard" && (cpu === "paper" || cpu === "spock")) || (playerOne === "spock" && (cpu === "rock" || cpu === "scissors"))) {
            playerOneSpan.textContent++;
            playerOneScore++;
            roundsSpan.textContent++;
            roundCounter++;
        }
        else {
            cpuSpan.textContent++;
            cpuScore++;
            roundsSpan.textContent++;
            roundCounter++;
        }

        checkCurrentScore(playerOneScore, cpuScore);
    }

    const checkCurrentScore = (playerOne, cpu) => {
        //validation for best 1 out of 1
        if (playerOne === cpu && bestOne && roundCounter === maxRounds) {
            imgContainer.remove();
            gameText.textContent = 'TIE!';
        }
        else if (playerOne === 1 && maxRounds === 1) {
            imgContainer.remove();
            gameText.textContent = 'Player 1 WINS!';
        }
        else if (cpu === 1 && maxRounds === 1) {
            imgContainer.remove();
            gameText.textContent = 'CPU WINS!';
        }
        //validation for best 3 out of 5
        else if (playerOne === cpu && bestThree && roundCounter === maxRounds) {
            imgContainer.remove();
            gameText.textContent = 'TIE!';
        }
        else if ((playerOne === winningNumberThree && bestThree) || (roundCounter === maxRounds && playerOne > cpu)) {
            imgContainer.remove();
            gameText.textContent = 'Player 1 WINS!';
        }
        else if ((cpu === winningNumberThree && bestThree) || (roundCounter === maxRounds && cpu > playerOne)) {
            imgContainer.remove();
            gameText.textContent = 'CPU WINS!';
        }
        //validation for best 4 out of 7
        else if (playerOne === cpu && bestFour && roundCounter === maxRounds) {
            imgContainer.remove();
            gameText.textContent = 'TIE!';
        }
        else if ((playerOne === winningNumberFour && bestFour) || (roundCounter === maxRounds && playerOne > cpu)) {
            imgContainer.remove();
            gameText.textContent = 'Player 1 WINS!';
        }
        else if ((cpu === winningNumberFour && bestFour) || (roundCounter === maxRounds && cpu > playerOne)) {
            imgContainer.remove()
            gameText.textContent = 'CPU WINS!';
        }
    }
    const GetCpuInput = () => {
        fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(
            response => response.text()
        ).then(
            data =>  cpuInput = data.toLowerCase()
        )
    }
}

export { flag as cpuFlag, CreatePlayerVsCpuContent }