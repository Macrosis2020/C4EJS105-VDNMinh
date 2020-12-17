//Exercise 3
//a)
let message = 'Coding is great';
console.log(message);
//b)
let studentCount = 0;
console.log(studentCount);
//Exercise 4
//a)
message = 'Coding might not be easy, but still great';
console.log(message);
//b)
studentCount = 15;
console.log(studentCount);
//c)
message = message.toLowerCase();
console.log(message);
//d)
studentCount++;
console.log(studentCount);
//Exercise 5
alert('Looking good, user!');
//Exercise 6
let username = prompt('What\'s your name?');
alert(`Good day to you, ${username}`);
//Exercise 7
let userFirstName = prompt('By the way, what\'s your first name?');
let userLastName = prompt('And your last name?');
alert('And your Social Security Number...?');
alert(`Ha, just kidding! Have a nice day, ${userFirstName} ${userLastName}`);
//Exercise 8
alert('Hey, did you know I can calculate the area of a square given the length of its sides?');
alert('I know right? Technology these days... What do you mean that\'s not impressive at all?');
let sideLength = prompt('Whatever, give me the side length already (and don\'t put non-numbers in, smartass)');
let areaSquare = sideLength * sideLength;
alert(`The area of the square is ${areaSquare}`);
//Exercise 9
alert('I can also do circles too, wanna try it out?');
let radius = prompt(`Give me the radius of the circle, ${username}`);
let areaCircle = radius * radius * 3.14;
alert(`The area of the circle is ${areaCircle}`);
alert('Come on, give me a break... If I were to use the actual value of Pi we\'d be seeing a number longer than the Great Wall');
//Exercise 10
alert('And for my last trick, Celsius to Overconvoluted American Temperature... I meant Fahrenheit');
let celsius = prompt('Give me the temperature in Celsius');
let fahrenheit = celsius * 1.8 + 32;
alert(`The temperature in Fahrenheit is ${fahrenheit}°F`);
alert(`That\'s all for today, ${username}. Remember, don't use Fahrenheit, else you\'ll slowly transform into a southern cowboy! Goodbye!`);