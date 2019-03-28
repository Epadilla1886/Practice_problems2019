// Find the vowels
// given a string, find all the vowels in the string. Store them in a new string
// example:
//     parameters: "four score and seven years ago"
// return: "ouoeaeeeaao"


// human-level instructions
// create variable to store vowels
// begin loop
// get each letter, one at a time
// compare it with each each vowel and see if it matches
// if it is, add it to the vowel variable
// repeat

var vowels = ['a','e','i','o','u', 'A','E', 'I', 'O', 'U'];
var vowelContainer = [];

function findTheVowels(string){
    for(var i = 0; i < string.length; i++){
        var currentVowel = string[i];
        for( var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
            if(currentVowel === vowels[vowelIndex]){
                vowelContainer.push(currentVowel);
            }
        }
    }
    return vowelContainer;
}

var test = 'Division: an Ubisoft Game';

console.log(findTheVowels(test));
