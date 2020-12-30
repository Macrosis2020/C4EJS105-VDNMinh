const quizzes = [
    q1 = {
        question: ('Why are we still here, just to suffer?'),
        choices: [
            'Idk you tell me...',
            'Every night, I can feel my leg… and my arm… even my fingers.',
            'This question sucks, go away',
            'Beans'],
        c1: false,
        c2: true,
        c3: false,
        c4: false,
    },
    q2 = {
        question: ('What\'s 1+1 in binary?'),
        choices: [
            '2',
            'Onions',
            '10',
            'This is why mom doesn\'t love you'],
        c1: false,
        c2: false,
        c3: true,
        c4: false,
    },
    q3 = {
        question: ('How many times has Michael Jackson had a nose job?'),
        choices: [
            'Nonce',
            'Once',
            'Twice',
            'Thrice'],
        c1: true,
        c2: false,
        c3: false,
        c4: false,
    }
];
let originalQLength = quizzes.length;
let usrPoint = 0;
while (true) {
    if (quizzes.length == 0) {
        alert('We\'re out of quizzes, unfortunately');
        break;
    } else {
        let randomGen = Math.floor(Math.random() * ((quizzes.length) - 1));
        while (true) {
            let answer = Number(prompt(`${quizzes[randomGen].question}
1. ${quizzes[randomGen].choices[0]}
2. ${quizzes[randomGen].choices[1]}
3. ${quizzes[randomGen].choices[2]}
4. ${quizzes[randomGen].choices[3]}`));
            if (quizzes[randomGen].choices[answer - 1] == undefined || quizzes[randomGen].choices[answer - 1] == null) {
                alert('Invalid answer');
            } else if (quizzes[randomGen][`c${answer}`] == true) {
                alert('Correct answer! You get a point!');
                usrPoint++;
                break;
            } else {
                alert('Wrong answer, dumbass');
                break;
            }
        }
        quizzes.splice(randomGen, 1);
    }
}
alert(`Your final score is: ${usrPoint}/${originalQLength}`);
