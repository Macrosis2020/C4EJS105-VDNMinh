//Init
//I don't watch movies so I'll just input games instead if that's alright
console.log('Init Exercise')
let games = ['Hollow Knight', 'Library of Ruina', 'Pokemon', 'Ori and the Blind Forest'];
console.log(games);
console.log(' ');
//Create
console.log('Create Exercise')
let newGame = prompt('Insert your favorite game');
games.push(newGame);
console.log(games);
console.log(' ');
//Read
console.log('Read Exercise');
{
    let i = prompt('Enter i:');
    i = Number(i);
    console.log(games[i]);
}
console.log(' ');
//Update 1
console.log('Update Exercise 1');
let gameTitle = prompt('Insert your 2nd favorite game');
games[0] = gameTitle;
console.log(games);
console.log(' ');
//array reset for the next exercise

games[0] = 'Hollow Knight';

//Update 2
console.log('Update Exercise 2');
{
    let i = prompt('Insert i... a different i');
    i = Number(i);
    games[i] = gameTitle;
}
console.log(games);
console.log(' ');
//Delete 1-2
console.log('Delete Exercise');
{
    let i = prompt('Insert the position you want to delete');
    let n = prompt('Insert the number of items you want to delete');
    i = Number(i);
    n = Number(n);
    //Delete 1

    //games.splice(i, 1);

    //Delete 2

    games.splice(i, n);
    console.log(games);
}
console.log(' ');
//ReadAll 1
console.log('ReadAll Exercise 1');
{
    for (let i = 0; i < games.length; i++) {
        console.log(games[i]);
    }
}
console.log(' ');
//ReadAll 2
console.log('ReadAll Exercise 2');
{
    for (let i = 0; i < games.length / 2; i++) {
        console.log(games[i]);
    }
}
console.log(' ');
//ReadAll 3
console.log('ReadAll Exercise 3');
{
    for (let i = 0; i < games.length; i++) {
        console.log(`${i + 1}. ${games[i]}`);
    }
}
console.log(' ');
//UpdateAll
console.log('UpdateAll Exercise');
{
    for (let i = 0; i < games.length; i++) {
        games[i] = games[i].toLowerCase();
        console.log(games[i]);
    }
}