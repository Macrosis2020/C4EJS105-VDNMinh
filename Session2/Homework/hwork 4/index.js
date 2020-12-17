let n = prompt('Enter a number');
let factorial = 1;
n = Number(n);   //just to be safe
for (i=1; i<=n; i++) {
    factorial = factorial * i;
}
console.log(`The factorial of ${n} is ${factorial}`);