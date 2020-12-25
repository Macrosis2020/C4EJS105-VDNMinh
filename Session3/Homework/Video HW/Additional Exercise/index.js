let n = Number(prompt('How many numbers would you like to input?'));
let arrayOfNumbers = [];
for (i = 0; i < n; i++) {
    let x = Number(prompt(`Input No.${i + 1}`));
    arrayOfNumbers.push(x);
}
console.log(arrayOfNumbers);
console.log(' ');
console.log('a)');
{
    let i = 0;
    while (i < n - 1) {
        if (arrayOfNumbers[i] > arrayOfNumbers[i + 1]) {
            let t = arrayOfNumbers[i];
            arrayOfNumbers.splice(i, 1);
            arrayOfNumbers.push(t);
            i = 0;
        } else {
            i++;
        }
    }
}
console.log(arrayOfNumbers);
console.log(' ');
console.log('b)');
let evenArray = [];
let oddArray = [];
{
    for (i = 0; i < n; i++) {
        if (arrayOfNumbers[i] % 2 == 0) {
            evenArray.push(arrayOfNumbers[i]);
        } else {
            oddArray.push(arrayOfNumbers[i]);
        }
    }
}
console.log(evenArray);
console.log(oddArray);
console.log(' ');
console.log('c)');
{
    i = 0;
    while (i < oddArray.length) {
        if (oddArray[i] == oddArray[i + 1]) {
            oddArray.splice(i, 1);
            i = 0;
        } else {
            i++;
        }
    }
} {
    i = 0;
    while (i < evenArray.length) {
        if (evenArray[i] == evenArray[i + 1]) {
            evenArray.splice(i, 1);
            i = 0;
        } else {
            i++;
        }
    }
}
console.log(evenArray);
console.log(oddArray);