let nmbStr = prompt('Enter a sequence of numbers, separated by \', \'');
let nmbArray1 = nmbStr.split(', ');
let nmbArray2 = [];
for (i = 0; i < nmbArray1.length; i++) {
    if (nmbArray1[i] % 2 == 1) {
        nmbArray2.push(nmbArray1[i]);
    }
}
alert(`First array:\n${nmbArray1}\nSecond array:\n${nmbArray2}`);