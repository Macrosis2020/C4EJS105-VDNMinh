//Init
let game = {
    title: 'Hollow Knight',
    release: 2017,
    ratings: 9.6,
};
//Read
//2.1
//C1
// console.log(' \nRead');
// console.log(game['title']);
// console.log(game['release']);
// console.log(game['ratings']);
// console.log(' ');
//C2
// console.log(game.title);
// console.log(game.release);
// console.log(game.ratings);
// console.log(' ');
//2.2
// console.log(game.developer);
//result: undefined
//2.3
// let usrcmd = prompt('What do you need to know? (title, release, ratings)').toLowerCase();
// if (game[usrcmd]==null || game[usrcmd]==undefined) {
//     alert('Invalid command');
// } else {
//     alert(game[usrcmd]);
// }
//Update
//3.1
// game.ratings = 8.7;
// console.log(game);
// game.ratings = game.ratings + 0.5;
// console.log(game);
//3.2
// let usrcmd;
// while (true) {
//     usrcmd = prompt('What do you want to update? (title, release, ratings)').toLowerCase();
//     if (usrcmd == 'title') {
//         let newTitle = prompt('Enter the new title:');
//         game.title = newTitle;
//         console.log(game);
//     } else if (usrcmd == 'release') {
//         let newRelease = prompt('Enter the new release date:');
//         game.release = newRelease;
//         console.log(game);
//     } else if (usrcmd == 'ratings') {
//         let newRatings = prompt('Enter the new ratings:');
//         game.ratings = newRatings;
//         console.log(game);
//     } else if (usrcmd == false) {
//         break;
//     } else {
//         alert('Invalid command');
//     }
// }
//Create
// let usrcmd;
// while (true) {
//     usrcmd = prompt('What do you want to update? (title, release, ratings)').toLowerCase();
//     if (usrcmd == 'title') {
//         let newTitle = prompt('Enter the new title:');
//         game.title = newTitle;
//         console.log(game);
//     } else if (usrcmd == 'release') {
//         let newRelease = prompt('Enter the new release date:');
//         game.release = newRelease;
//         console.log(game);
//     } else if (usrcmd == 'ratings') {
//         let newRatings = prompt('Enter the new ratings:');
//         game.ratings = newRatings;
//         console.log(game);
//     } else if (usrcmd == false) {
//         break;
//     } else {
//         alert(`${usrcmd} does not exist. We will update the database`);
//         let newData = prompt('Enter the new data');
//         game[`${usrcmd}`] = newData;
//         console.log(game);
//     }
// }
//ArrayofObjects
// 1
// console.log('1.');
// let game2 = {
//     title: 'Stardew Valley',
//     release: 2016,
//     ratings: 9.4,
// }
// let game3 = {
//     title: 'Darkest Dungeon',
//     release: 2015,
//     ratings: 9.1,
// }
// let gameArr = [game, game2, game3];
// console.log(gameArr);
// //2
// console.log('2.');
// console.log(gameArr[0]);
// //3
// console.log('3.');
// let lastGame = gameArr[gameArr.length - 1];
// console.log(lastGame);
// //4
// console.log('4.');
// {
//     for (i = 0; i < gameArr.length; i++) {
//         console.log(gameArr[i]);
//     }
// }
// //5
// console.log('5.');
// {
//     for (i = 0; i < gameArr.length; i++) {
//         console.log('----------------------------');
//         console.log(gameArr[i].title);
//         console.log(`Year of Release: ${gameArr[i].release}`);
//         console.log(`Ratings: ${gameArr[i].ratings}`);
//     }
// }
// alternative (for in)
// {
//     for (i = 0; i < gameArr.length; i++) {
//     console.log('-----------------------------');
//     for (properties in gameArr[i]) {
//         console.log(`${properties}: ${gameArr[i][properties]}`);
//     }
// }
// }

// //6
// console.log('6.');
// lastGame.ratings = (lastGame.ratings + 0.7).toFixed(1);
// console.log(lastGame);
// Object containing Array
// game.developers = ['Ari Gibson', ' William Pellen'];
// console.log(game.title);
// console.log(`Year of Release: ${game.release}`);
// console.log(`Ratings: ${game.ratings}`);
// console.log(`Developers: ${game.developers}`)
// game.developers.push(' Jake Vine');
// console.log(' ');
// console.log(game.title);
// console.log(`Year of Release: ${game.release}`);
// console.log(`Ratings: ${game.ratings}`);
// console.log(`Developers: ${game.developers}`)
// Object and Array mix structure
//1
game.developers = ['Ari Gibson', ' William Pellen', ' Jake Vine'];
let game2 = {
    title: 'Stardew Valley',
    release: 2016,
    ratings: 9.4,
    developers: ['Eric Barone'],
}
let game3 = {
    title: 'Darkest Dungeon',
    release: 2015,
    ratings: 9.1,
    developers: ['Chris Bourassa', ' Tyler Sigman', ' Dana Fortier'],
}
let gameArr = [game, game2, game3];
//2
{
    for (i = 0; i < gameArr.length; i++) {
        console.log('----------------------------');
        console.log(gameArr[i].title);
        console.log(`Year of Release: ${gameArr[i].release}`);
        console.log(`Ratings: ${gameArr[i].ratings}`);
        console.log(`Developers: ${game.developers}`);
    }
}