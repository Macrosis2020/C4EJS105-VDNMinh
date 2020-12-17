let i = 1;
let cap = prompt('Enter the total number of 1s and 0s');
cap = Number(cap);
while (i<=cap) {
    if (i%2==1) {
        console.log(0);
    } else {
        console.log(1);
    }
    i++;
}