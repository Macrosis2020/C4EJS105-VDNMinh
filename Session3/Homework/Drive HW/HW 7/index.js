const nmbStr = [12, -23, 3, 54, -6];
let guess = Number(prompt('Enter a number:'));
let foundStatus = 0;
for (i = 1; i <= nmbStr.length; i++) {
    if (guess == nmbStr[i]) {
        alert(`${guess} is found in my array at index ${i}`);
        foundStatus = 1;
        break;
    }
}
if (foundStatus == 0) {
    alert(`The number ${guess} is NOT found in my array`);
} 