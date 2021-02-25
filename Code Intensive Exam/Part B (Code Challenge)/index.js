let rightAns;
let guess;
function openAlertModal() {
    document.getElementById('alert-modal').style.display = "block";
}
function closeAlertModal() {
    document.getElementById('alert-modal').style.display = "none";
}
function startGame() {
    guess = 3;
    document.getElementById('guess-field').textContent = `Remaining guesses: ${guess}`;
    rightAns = Math.floor(Math.random()*(10 - 0) + 1);
    console.log(rightAns);
}
function resetGame() {
    document.getElementById('user-option').removeEventListener('click', startGame());
    document.getElementById('input-field').value = '';
    startGame();
}
function registerInput() {
    let userInput = Number(document.getElementById('input-field').value);
    console.log(`User Input: ${userInput}`);
    if (userInput == rightAns) {
        document.getElementById('input-field').value = '';
        document.getElementById('alert-message').textContent = "Congrats! You got the right number!";
        document.getElementById('user-option').textContent = "Try Again";
        document.getElementById('user-option').addEventListener('click', resetGame());
        openAlertModal();
    } else if (guess>1) {
        guess--;
        document.getElementById('input-field').value = '';
        document.getElementById('alert-message').textContent = "Sorry! That's not the right number!";
        document.getElementById('user-option').textContent = "OK";
        openAlertModal();
        document.getElementById('guess-field').textContent = `Remaining guesses: ${guess}`
    } else {
        guess--;
        document.getElementById('input-field').value = '';
        document.getElementById('guess-field').textContent = `Remaining guesses: ${guess}`;
        document.getElementById('alert-message').textContent = "Sorry, out of guesses. Wanna try again?";
        document.getElementById('user-option').textContent = "Try Again";
        document.getElementById('user-option').addEventListener('click', resetGame());
        openAlertModal();
    }
}
startGame();