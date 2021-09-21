/**
 * To run this file in Gitpod, use the 
 * command 'node script.js' in the terminal
 */


// -------------------Vanilla JavaScript Function
/*
function addTwoNumbers(a, b){
    // Code Block
    return a + b;
}
let sum = addTwoNumbers(4, 2);
console.log(sum)
*/

// -------------------Arrow Function With Parameters
// 1. put const at the start
// 2. put = sign after function name
// 3. put fat arrow => after parentheses

// const addTwoNumbers = (a, b) => {
//     // Code Block
//     return a + b;
// }
// let sum = addTwoNumbers(4, 2);
// console.log(sum)

// -----------Single Line Arrow Function With Parameters
// const addTwoNumbers = (a, b) => a + b;
// let sum = addTwoNumbers(4, 2);
// console.log(sum)

// --------------------------------------Implicit Returns
// const saySomething = message => console.log(message);
// saySomething('Hello!');

// --------------------------------Returning Multiple Lines
// const returnMultiLines = () => (
//     `<p>
//         This is a multi-line String,
//         Placed within a paragraph Element.
// </p>`
// )
// console.log(returnMultiLines());

// ---------------------------------------No spread operator
// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
// arr2.push(5)
// console.log('first array:', arr1)
// console.log('second array:', arr2);

// ------------------------------------------Copying an array
// let arr3 = [5, 6, 7, 8];
// let arr4 = [...arr3];
// arr4.push(9)
// console.log('third array:', arr3)
// console.log('fourth array:', arr4);

// -----------------------------------------Copying an object
// let obj1 = {a: 1, b: 2, c: 3, d: 4};
// let obj2 = {...obj1, e: 5};
// let obj3 = {...obj1, b: 5};
// console.log('first object:', obj1)
// console.log('second object:', obj2);
// console.log('third object:', obj3);

// ------------------------Copying only part of an array/object
// let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
// console.log(arr5);

// ---------------------------------------Regular function call 
// const sumAll = (a, b, c) => a + b + c;
// let sum = sumAll(1, 2, 3);
// console.log("Sum:", sum);

// ---------------------------------Extra arguments are ignored
// let sum2 = sumAll(1, 2, 3, 4, 5, 6)
// console.log("Sum2:", sum2)

// --------------------------------------Function using ...rest
// const sumRest = (a, b, c, ...rest) => {
//     let sum = a + b + c;
//     for (let i of rest) {
//         sum += i;
//     }
//     return sum
// }
// let sum3 = sumRest(1, 2, 3, 4, 5, 6)
// console.log("Sum3:", sum3)

