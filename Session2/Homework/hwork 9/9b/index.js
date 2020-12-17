let i = 1;
let cap = prompt('Enter the total number of Ls and Hs');
cap = Number(cap);
while (i<=cap) {
    if (i>cap/2) {
        console.log('H');
    } else {
        console.log('L');
    }
    i++;
}