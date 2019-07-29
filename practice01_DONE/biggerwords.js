// Bigger words
// Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.
//
//     Write a function that takes two parameters
// Parameter 1 - A string
// Parameter 2 - An array of strings
// The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
// Example:
//     var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
// biggerWords('whales', myArray);
// Output - ['reptile', 'mammoth', 'turtles']

//Loop through array or words
//Compare array words to string param
//If word from array at index is longer than string param, push to bigWord array
//output bigWord array




function biggerWords(string,array){
    var bigWords = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].length > string.length){
            bigWords.push(array[i])
        }
    }
    return bigWords;
}

var myArray = ['ps4', 'sony', 'playstation', 'psvita', 'division', 'uncharted'];

console.log(biggerWords('xbox1', myArray));