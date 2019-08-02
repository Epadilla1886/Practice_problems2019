// Igpay Atinlay
// Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

// Write a function that takes one parameter
// Parameter 1 - A string
// The function should output your input string translated into Pig Latin
// Example:
// var myString = "Hello my name is Stu"
// `translate(myString);
// Output - "ellohay ymay ameya siay tusay"
// Making it better!
// There are several more rules to Pig Latin, try incorporating as many as you can into your function.
// There are different rules for words that start with vowel sounds or silent letters for example.
// Here is a link to an explanation of all the rules.
// Also try maintaining capitalization of words that are capitalized in your input string.
// Example:
// "Hello there" would be "Ellohay heretay"


function translate (string){
    var pigLatin = 'ay';
    var space = string.split(" ");

    //use split on string sentence to return an array of words, then run function through loops

    return string.substring(1) + string.substring(0,1)+pigLatin;

}

var myString = "Hello";

console.log(translate(myString));


