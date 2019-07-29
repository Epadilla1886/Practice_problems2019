// randomize array
// Create a function, randomize_list(), that takes an array and randomizes the order, without resorting to the use of any pre-existing array methods.
//
//     Input:
// input_array: an array of anything
// Output:
//     output_array, the original array, randomly arranged
// Example:
//     var input_array =
//         [5,3,2,5,1]
// output = randomize_list(input_array); console.log(output); //outputs
//
// [3,1,5,5,2]
// console.log(randomize_list(input_array)); //outputs
//
// [1,3,5,2,5]
// Put your solution in answer.js
// hint: Math.random() will give you a random fractional number between 0 and 1
// hint: .pop() will allow you to take numbers off your source array as you pick them randomly
// hint: Using pop will directly affect the length of the array



function randomize_list(array){
    var list = array.length;
    var temp = null;
    var index = null;

    while (list > 0) {
        index = Math.floor(Math.random() * list);
        list--;
        temp = array[list];
        array[list] = array[index];
        array[index] = temp;
    }
    return array;
}
var randoArray = [22,6,7,3,9,4];

console.log(randomize_list(randoArray));