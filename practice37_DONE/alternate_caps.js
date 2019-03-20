// alternate caps
// given a string, create a new string with every other letter capitalized
// example:
//     parameters: "amazing"
// return: "aMaZiNg"
// human-level instructions
// create variable to store new string
// start a loop to proceed through the string
// get a new letter from the string
// store it in a variable
// get the next letter from the string
// store it in a variable
// capitalize it
// add the regular and capitalized letters to the new string
// repeat



function alternateCaps(string){
    var newString = '';
    for(var i = 0; i < string.length; i++){
        newString += i % 2 === 1 ? string.charAt(i).toUpperCase():string.charAt(i);
    }
    return newString;
}

var sampleString = 'the division';

console.log(alternateCaps(sampleString));


//        newString += i % 2 === 1 ? string.charAt(i).toUpperCase():string.charAt(i);

//       if the iterator location is a division remainder of 1 (divided by 2, will it equal and even number?), then set that character to uppercase then push to new variable (newString),
//                  if it is not then leave the character alone an push it to new variable
