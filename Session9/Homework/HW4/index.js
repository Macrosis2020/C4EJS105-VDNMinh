function getRandomNo() {
    var nmb = Math.random() * (10 - 0) + 0;
    return nmb;
}
const x = getRandomNo();
if (x < 0) {
    console.log('Failed, x is smaller than 0');
} else if (x > 10) {
    console.log('Failed, x is bigger than 10');
} else {
    console.log('Passed!');
}