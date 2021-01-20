//1.1
let promiseTest = new Promise(function (resolve, reject) {
    setTimeout(() => { resolve("promise is da best") }, 5000);
    // setTimeout(() => {reject(new Error("oof"))}, 1000);
});
//1.3
promiseTest.then(
    result => { console.log(result) },
    error => { alert(error) }
)
//-----------------------------------------
promiseTest.catch(console.log);
//1.2
async function getResult() {
    var x = await promiseTest;
    console.log(`${x} 2`);
    promiseTest.finally(console.log("Promise has finished running"));
}
getResult();