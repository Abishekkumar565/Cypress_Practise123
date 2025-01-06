function factorialOfANumber(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorialOfANumber(num - 1);
    }
}
let result = factorialOfANumber(6);
//here in console.log() we have passed directly the variable value so we have used tile `` not single inverted commas.
console.log(`the factorial of the number is - ${result}`);
// we can also print like - 
console.log(result);