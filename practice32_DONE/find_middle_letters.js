// ## find middle of string
//
// Build a function, find_middle_letters, that finds the middle of a string.  If the string is an odd number of characters, it returns 1 letter.  If it is an even number of characters, it returns 2 characters.  It takes a string as a parameter
//
//
// - Example:
// - find_middle_letters('seven')
// - Return: 'v'
// - find_middle_letters('dish')
// - Return: 'is'

function find_middle_letters(string){
    return string.length % 2 ? string.substr(string.length / 2, 1) : string.substr((string.length / 2) - 1, 2);
}

// explanation of = return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
//      if length of string can be divided by 2, return a substring of the length of the string starting from the center plus the next position
//      else, if the string cannot be divided by 2 return a substring of the string starting from the center, go back one space, then move forward 2 positions

