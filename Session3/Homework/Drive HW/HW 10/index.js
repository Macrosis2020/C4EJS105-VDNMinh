let nameStr = prompt('Enter a sequence of names, separated by \', \'');
let nameArray1 = nameStr.split(', ');
let nameArray2 = [];
let t;
for (i = 0; i < nameArray1.length; i++) {
    t = `<${nameArray1[i]}>`;
    nameArray2.push(t);
}
alert(`First array:\n${nameArray1}\nSecond array:\n${nameArray2}`);