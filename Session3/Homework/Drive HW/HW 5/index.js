let nmbStr = prompt('Enter a sequence of numbers, separated by \',\' and no space inbetween');
let newArray = nmbStr.split(',');
{
    for (i = 0; i < newArray.length; i++) {
        newArray[i] = Number(newArray[i]);
    }
}
let sum = 0;
{
    for (i = 0; i < newArray.length; i++) {
        sum = sum + newArray[i];
    }
}
alert(`The sum of these numbers is ${sum}`);