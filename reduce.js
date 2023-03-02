// const arr = [1,2,9,3,4,7]

// const maximum = arr.reduce((acc, curr) => {
//     acc = Math.max(curr,acc)
//     return acc
// },0)

// console.log(maximum)

// const input = [1, -4, 12, 0, -3, 29, -150]
// const output = input.reduce((acc,curr,currIndex, input) => {
//     if (curr>0) {
//         acc += curr
//         return acc
//     } else {
//         return acc
//     }
// },0)

// console.log(output)

// const output = input
//     .filter((num) => num > 0)
//     .reduce((curr, acc) => acc + curr, 0)

// console.log(output)

//mean and median

// const input = [12, 46, 32, 64];
// input.sort((a, b) => a - b);

// const output = input.reduce(
//   (accumulator, currentValue, index, array) => {
//     accumulator.mean += currentValue / array.length;

//     if (array.length % 2 === 0) {
//       // if the array has an even number of elements
//       if (index === array.length / 2 - 1) {
//         accumulator.median += currentValue;
//       } else if (index === array.length / 2) {
//         accumulator.median += currentValue;
//         accumulator.median /= 2;
//       }
//     } else {
//       // if the array has an odd number of elements
//       if (index === (array.length - 1) / 2) {
//         accumulator.median = currentValue;
//       }
//     }

//     return accumulator;
//   },
//   { mean: 0, median: 0 }
// );

// console.log(output)

const input = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

const age = input.map((person) => {
    return person.age
})

const oldest = Math.max(...age)
const youngest = Math.min(...age)
const difference = oldest-youngest

console.log(oldest,youngest,difference)

// The Math.min() function actually expects a series of numbers, but it doesn't know how to handle an actual array, so it is blowing up.

// You can resolve this by using the spread operator ...