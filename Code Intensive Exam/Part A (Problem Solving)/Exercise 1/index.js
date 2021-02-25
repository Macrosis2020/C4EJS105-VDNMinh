let n;
let oppNo;
let inputNo;
function takeUserInput() {
    n = Number(document.getElementById('point-input').value);
    inputNo = Number(document.getElementById('number-input').value);
    document.getElementById('n-value').textContent = `Currently, ${n} numbers are on the circle`;
    findOppositeNumber(n, inputNo);
}
function findOppositeNumber(n, inputNo) {
    if (n%2 == 0) {
        if ((inputNo + (n/2)) <= (n - 1)) {
            oppNo = inputNo + (n/2);
        } else {
            oppNo = inputNo + (n/2) - n;
        }
        document.getElementById('return-field').textContent = `The opposite number to ${inputNo} is ${oppNo}`;
    } else {
        document.getElementById('return-field').textContent = `There isn't a number opposite to ${inputNo}`;
    }
}