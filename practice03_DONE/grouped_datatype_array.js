// One to Multi
// Build a function that sorts an array into a multidimensional array grouped by data type
//
// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output a multidimensional array grouped by data type
// Example:
//     var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
// groupArray(myArray);
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]


var newArray = ["division", 6, true, "5", false, 2, 5, "playstation", false];

function dataSort(array){
    var typeString = [];
    var typeNum = [];
    var typeBoolean =  [];

    for( var i = 0; i < array.length; i++ )
        if(typeof array[i] === 'string'){
            typeString.push(array[i])
        } else if(typeof array[i] === 'number'){
            typeNum.push(array[i])
        } else if (typeof array[i] === boolean){
            typeBoolean.push(array[i])
        }
        var sortedArray = [typeString, typeNum, typeBoolean];

    return sortedArray;
}

console.log(dataSort(newArray));
