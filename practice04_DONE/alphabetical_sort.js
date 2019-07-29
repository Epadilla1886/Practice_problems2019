// Sort
// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.
//
//     Write a function that takes one parameter
// Parameter 1 - An Array of strings
// The function should output an array containing all the strings from the input array but in alphabetical order
// Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
// sort(myArray);
// Output - ['cat', 'dog', 'human', 'mouse']
// Try doing this using a Bubble Sort, if you are unsure what that is Click Here



function alphaSort(array){
    var length = array.length;
    for (var i = length-1; i>=0; i--){
        //we will start at the end of the array, as long as iterator is larger than zero, we will continue to move backwards
        for(var j = 1; j<=i; j++){
            //we will statr at the beginning of the array, as long as iterator is smaller than zero, we will continue to move forward
            if(array[j-1]>array[j]){
                var temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

var myArray = ['division', 'playstation', 'sony', 'isac'];

console.log(alphaSort(myArray));


