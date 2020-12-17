let x = prompt('Enter x');
x = Number(x);
let n = prompt('Enter n');
n = Number(n);
if (x<(n/2)) {
    alert(`${x} is in the lower half of ${n}`);
} else if (x>(n/2)) {
    alert(`${x} is in the higher half of ${n}`);
} else {
    alert(`${x} is in neither half of ${n}`)
}