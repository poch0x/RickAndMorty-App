/* Function Callback */

function sumNumber(num, callback) {
    callback(num + 10);
}

// sumNumber(25, function(value){
//     console.log(`El resultado es: ${value}`); 
// })

function printResult(value) {
    console.log(`El resultado es: ${value}`); 
}

sumNumber(30, 58)