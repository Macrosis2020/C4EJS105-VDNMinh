let wordArr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let countData = {};
for (i=0;i<wordArr.length;i++) {
    let word = wordArr[i];
    if (countData[word] == null) {
        countData[word] = 1;
    } else {
        countData[word]++;
    }
}
console.log(countData);