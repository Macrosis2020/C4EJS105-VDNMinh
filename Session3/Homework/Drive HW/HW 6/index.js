let nmbStr = prompt('Enter a sequence of numbers, separated by \',\' and no space inbetween');
let newArray = nmbStr.split(',');
{
    for (i = 0; i < newArray.length; i++) {
        newArray[i] = Number(newArray[i]);
    }
}
let min = newArray[0];
{
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] > newArray[i + 1] && newArray[i + 1] < min) {
            min = newArray[i + 1];
        }
    }
}
alert(`The smallest number in this sequence is ${min}`);