// Total Reverse
// Build a function that takes in an array and reverses it
//
// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
//     var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

function arrayReverse(array){
    var newArray = [];
    for( var i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

//Explanation

// for( var i = array.length - 1; i >= 0; i--){
    // starting from the end, loop through the array until you are at position 0
//     newArray.push(array[i]);
    //push each element position to the newly created array