let firstNo;
let secondNo;
let sumDisp;
let gameState = 0;
let highScore = 0;
let timerCount;
let score = 0;
let timerSwitch = 0;
let scoreSwitch = 0;
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function displayPrompt() {
    firstNo = getRandomInt(0, 10);
    secondNo = getRandomInt(0, 10);
    var tfRandomizer = getRandomInt(0, 1);
    if (tfRandomizer == 1) {
        sumDisp = firstNo + secondNo;
    } else {
        sumDisp = getRandomInt(firstNo + secondNo - 2, firstNo + secondNo + 2);
    }
    document.getElementById('prompt-box').innerHTML = `${firstNo} + ${secondNo} = ${sumDisp}`
}
function clear() {
    clearInterval(countdown);
    clearTimeout(failTimer);
    timerCount = 0;
    document.getElementById('timer').innerHTML = `${timerCount}`;
}
function countdownReset() {
    timerCount = 1.5;
    document.getElementById("slide-timer").style.width = "50%";
    widthCount = 100;
    document.getElementById('timer').innerHTML = `${timerCount}`;
    countdown = setInterval(() => {
        timerCount = (timerCount - 0.01).toFixed(2);
        if (timerCount >= 0) {
            document.getElementById('timer').textContent = timerCount;
        } else {
            clear();
        }
    }, 10);
    slideDown = setInterval(() => {
        widthCount = widthCount - 1;
        document.getElementById("slide-timer").style.width = `${widthCount}%`
        if (widthCount < 0) {
            clearInterval(slideDown);
        }
    }, 15);
}
function startGame() {
    document.getElementById("console-box").textContent = ''
    if (gameState == 0) {
        gameState = 1;
        document.getElementById("start-box").style.borderStyle = "dashed";
        score = 0;
        displayPrompt();
        failTimer = setTimeout(falseResponse, 1500);
        setTimeout(countdownReset(), 0);

    } else {
        document.getElementById("console-box").textContent = 'A game is ongoing';
    }
}
function trueResponse() {
    clear();
    clearInterval(slideDown);
    score++;
    yesSound.play();
    yesSound.currentTime = 0;
    document.getElementById("score").textContent = score;
    console.log(score);
    displayPrompt();
    failTimer = setTimeout(falseResponse, 1500);
    setTimeout(countdownReset(), 0);
}
function falseResponse() {
    clear();
    clearInterval(slideDown);
    noSound.play();
    gameState = 0;
    if (highScore < score) {
        highScore = score;
        document.getElementById("high-score-box").textContent = score;
        document.getElementById("console-box").textContent = 'NEW RECORD!';
    } else {
        document.getElementById("console-box").textContent = 'Good luck next time';
    }
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("prompt-box").textContent = '';
    document.getElementById("start-box").style.borderStyle = "solid";
}
//----------------------------------------------------------------------------
function inputTrue() {
    if (gameState == 1) {
        if (firstNo + secondNo == sumDisp) {
            trueResponse();
        } else {
            falseResponse();
        }
    } else {
        document.getElementById("console-box").textContent = 'No game is ongoing'
    }
}
function inputFalse() {
    if (gameState == 1) {
        if (firstNo + secondNo != sumDisp) {
            trueResponse();
        } else {
            falseResponse();
        }
    } else {
        document.getElementById("console-box").textContent = 'No game is ongoing'
    }
}
//--------------------------------------------------------------------------
function timerOnOff() {
    timerSwitch++;
    if (timerSwitch % 2 == 1) {
        timerOff();
    } else {
        timerOn();
    }
}
function timerOff() {
    document.getElementById("timer-check").textContent = '';
    document.getElementById("timer-disp").style.color = 'black';
}
function timerOn() {
    document.getElementById("timer-check").textContent = 'X';
    document.getElementById("timer-disp").style.color = 'rgb(0, 255, 0)';
}
//--------------------------------------------------------------------------
function scoreOnOff() {
    scoreSwitch++;
    if (scoreSwitch % 2 == 1) {
        scoreOff();
    } else {
        scoreOn();
    }
}
function scoreOff() {
    document.getElementById("score-check").textContent = '';
    document.getElementById("score-disp").style.color = 'black';
}
function scoreOn() {
    document.getElementById("score-check").textContent = 'X';
    document.getElementById("score-disp").style.color = 'rgb(0, 255, 0)';
}