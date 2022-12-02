/* Reduce Method (Reduces the elements in the array to one value according to the operator) */
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a, b)=>{
//     return a + b;
// })
// console.log(`Sum: ${sum}`);

/* Mapping (Modifies the element in the Array) */ 
// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((item)=> {
//     return item *2;
// })
// console.log("Current Array:", numbers );
// console.log("Double:", double)

//         -----------------

// for(let numb of numbers) {
//     console.log(numb*2);
// }

//         -----------------

// let people = [
//     {
//         id: 1,
//         firstName: 'Dick',
//         surname: 'Grayson'
//     },
//     {
//         id: 2,
//         firstName: 'Bruce',
//         surname: 'Wayne' 
//     },
// ];

// console.table(people);

// let peopleFirstNames = people.map( (item=> {
//     return item.firstName;
// }))
// console.log(peopleFirstNames);

//         -----------------

/* Hoisting(You can call out the function before or after) */

// addition(1, 2)
// function addition(a, b) {
//     console.log(a + b);
// }
// addition(1, 2);

//         -----------------

/* Rest Operator */
// function addition(...args) {
//     let sum = args.reduce((a, b)=> {
//         return a + b;
//     })
//     console.log(sum);
// }
// addition(1, 2, 3, )

/* Exercise */

// function addition(...args) {
//     let sum = args.filter(Number).reduce((a, b)=> {
//         return a + b;
//     })
//     console.log("Sum:",sum);
// }
// addition(1, 2, 3, "mom" ,4, 5)

//         -----------------


/* API */

fetch('../data/data.json')
