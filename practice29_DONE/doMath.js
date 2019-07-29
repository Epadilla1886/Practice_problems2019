// Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)
//
// - it uses the operator to determine what math to do to the numbers
// - if '+', it adds them
// - if '-', it subtracts them
// - if '*' or 'x' or 'X', it multiplies them
// - if '/', it divides them
// - if then returns the result
// - Example:
// - do_math(5,2,'*')
// - Return: 10

function doMath ( num1, num2, operator){
    if(operator === '-'){
        return num1-num2;
    }
    if(operator === '+'){
        return num1+num2;
    }
    if(operator === '*'){
        return num1*num2;
    }
    if(operator === '/'){
        return num1/num2;
    }
}

//Switch statement


function doMath ( num1, num2, operator){
    switch(operator){
        case '-':
            return num1-num2;
        case '+':
            return num1+num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
    }
}