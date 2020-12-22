//8.1
console.log('Professional sheep farmer Vu Duc Nhat Minh, at attendance, here are my sheep sizes:')
let flock = [34, 23, 260, 9, 161, 95, 216];
console.log(...flock);
function lineBrk() {
    console.log(' ');
}
let max;
//8.5
for (let month = 1; month <= 5; month++) {
    {
//8.2
        max = flock[0];
        for (i = 0; i < flock.length - 1; i++) {
            if (flock[i] <= flock[i + 1] && flock[i + 1] > max) {
                max = flock[i + 1];
            }
        }
    }
    console.log(`Now my biggest sheep has size ${max}. Shearing time!`);
    lineBrk();
//8.3
    flock[flock.indexOf(max)] = 8;
    console.log('After shearing, here is my flock:');
    console.log(...flock);
    lineBrk();
//8.4
    {
        for (i = 0; i < flock.length; i++) {
            flock[i] = flock[i] + 50;
        }
    }
    console.log(`MONTH ${month}`);
    console.log('A month has passed, here\'s my new flock size:');
    console.log(...flock);
    lineBrk();
}
//8.6
let sum = 0;
{
    for (i = 0; i < flock.length; i++) {
        sum = sum + flock[i];
    }
}
lineBrk();
console.log('The total size of my flock is: ' + sum);
console.log(`I can sell my flock for ${sum} * $2 = $${sum*2}`);
