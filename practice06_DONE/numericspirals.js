// Numeric Spirals
// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.
//
//     Write a function that takes one parameter
// Parameter 1 - A number
// The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
//     Example:
// fibSequence(12);
// Output - 0 1 1 2 3 5 8 13 21 34 55 89
// If you are unfamiliar with the Fibonacci sequence Click Here


function numericSpirals(num){
    var distance = num - 3;
    var fibArray = [0,1];
    var num1 = null;
    var num2 = null;
    for (i = 0; i <= distance ; i++){
        num1 = fibArray[i];
        num2 = fibArray[i+1];
        fibArray.push(num1 + num2);
    }
    return fibArray;
}

console.log(numericSpirals(12));
