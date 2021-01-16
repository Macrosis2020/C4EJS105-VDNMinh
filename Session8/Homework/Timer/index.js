for (i = 0; i < 99; i++) {
    document.getElementById('nmb-list').insertAdjacentHTML("beforeend", `<option value=${i + 2}>${i + 2}</option>;`);
};
var counterValue;
function timer() {
    intervalVar = setInterval(() => {
        if (counterValue > 0) {
            counterValue = counterValue - 1;
            document.getElementById("counter").textContent = counterValue;
        } else {
            clearInterval(intervalVar);
        }
    }, 1000)
}
function startFunct() {
    counterValue = document.querySelector('#nmb-list').value;
    document.getElementById("counter").textContent = counterValue;
    timer();
}

function stopFunct() {
    clearInterval(intervalVar);
}