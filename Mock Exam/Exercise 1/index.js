let ltArr = [];
let userInput = prompt('Insert your array of numbers, separated with a space');
let numberArr = userInput.split(" ");
console.log(numberArr);
for (i=0;i<numberArr.length;i++) {
    numberArr[i] = Number(numberArr[i]);
    if (Number.isInteger(Math.sqrt(numberArr[i]))==true) {
        ltArr.push(numberArr[i]);
    }
}
console.log('Cac so luy thua trong day da nhap la:');
console.log(ltArr);