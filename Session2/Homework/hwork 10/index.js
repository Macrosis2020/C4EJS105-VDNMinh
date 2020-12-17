let weight = prompt('Your weight in kg?');
weight = Number(weight);
let height = prompt('Your height in cm?');
height = Number(height);
let BMI = weight / (height * height / 10000);
alert(`Your BMI is ${BMI}`);
if (BMI<16) {
    alert('You are severy underweight');
} else if (BMI<18.5) {
    alert('You are underweight');
} else if (BMI<25) {
    alert('You are normal');
} else if (BMI<30) {
    alert('You are overweight');
} else {
    alert('You are obese');
}