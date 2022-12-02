/* Return Method */
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((a, b)=>{
    return a + b;
})
console.log(`Sum: ${sum}`);