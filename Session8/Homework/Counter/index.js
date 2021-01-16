let count = document.getElementById("count");
let currentCount = 0;
function minusFunct() {
    count.textContent = currentCount - 1;
    currentCount = currentCount - 1;
}
function plusFunct() {
    count.textContent = currentCount + 1;
    currentCount = currentCount + 1;
}