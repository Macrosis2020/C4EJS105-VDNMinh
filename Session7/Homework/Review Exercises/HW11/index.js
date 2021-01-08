let usrname;
let result = document.getElementById('resultBox');
function upperName(usrname) {
    usrname = document.getElementById('inputValue').value;
    usrnameUp = String(usrname).toUpperCase();
    result.textContent = usrnameUp;
    console.log(result)
}
