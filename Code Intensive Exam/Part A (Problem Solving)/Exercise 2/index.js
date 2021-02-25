let str1;
let str2;
function merge2String(str1, str2) {
    let mergedStr;
    let mergedStrArr = [];
    str1Arr = str1.split("");
    str2Arr = str2.split("");
    console.log(str1Arr);
    console.log(str2Arr);
    if (str1Arr.length >= str2Arr.length) {
        {
            for (i = 0; i < str2Arr.length; i++) {
                mergedStrArr.push(str1Arr[i]);
                mergedStrArr.push(str2Arr[i]);
            }
        }
        {
            for (i=str2Arr.length;i<str1Arr.length;i++) {
                mergedStrArr.push(str1Arr[i]);
            }
        }
    } else {
        {
            for (i = 0; i < str1Arr.length; i++) {
                mergedStrArr.push(str1Arr[i]);
                mergedStrArr.push(str2Arr[i]);
            }
        }
        {
            for (i=str1Arr.length;i<str2Arr.length;i++) {
                mergedStrArr.push(str2Arr[i]);
            }
        }
    }
    mergedStr = mergedStrArr.join("");
    document.getElementById('return-field').textContent = mergedStr;
}
function takeUserInput() {
    str1 = document.getElementById('input1').value;
    str2 = document.getElementById('input2').value;
    merge2String(str1, str2);
}