function getRandomNo(a, b) {
    var nmb = Math.random() * (b - a) + a;
    return nmb;
}
const x = getRandomNo(3, 19);
if (x < 3) {
    console.log(`Failed, x is smaller than ${3}`);
} else if (x > 19) {
    console.log(`Failed, x is bigger than ${19}`);
} else {
    console.log('Passed!');
}