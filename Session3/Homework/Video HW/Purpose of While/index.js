while (true) {
var username = prompt('Register an Username');
if (username.length<=15) {
    alert('Your username is valid');
    break;
} else {
    alert('Your username is too long');
}
}
while (true) {
    let answer = Number(prompt(`I have a quiz for you, ${username}!\n
    What's the square root of onions?\n
    1. Tears\n
    2. Shallots\n
    3. 28\n
    4. Carrot`));
    if (answer==1||answer==2||answer==3||answer==4) {
        if (answer == 2) {
            alert('Congrats! You are correct');
        } else {
            alert('Better luck next time');
        }
        break;
    } else {
        alert('Invalid answer, please input 1, 2, 3 or 4');
    }
}