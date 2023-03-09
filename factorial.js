// // n! with reduce and map

// const input = 6

// const arr = new Array(input).fill(null)
// const newArr = arr.map((ele, index, arr) => {
//     return index + 1
// })
//     .reduce((acc, curr, currIndex, arr) => {
//         return acc * curr
//     })
// console.log(newArr)

// const soln = new Array(input).fill(null)
// .map((element, index) => index + 1)
// .reduce((acc,cur) => acc*cur)

// console.log(soln)

// Count elements in array of arrays
// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
// ];
// const dict = {}
// const output = input
// .flat()
// .map((letter) => {
//     return dict[letter] ? dict[letter] +=1 : dict[letter] = 1 
// })

// const output = input
// .flat()
// .reduce((acc,curr,index,input) => {
//     acc[curr] ? acc[curr] += 1 : acc[curr] = 1
//     return acc
// },{})
// console.log(output)

//High Performing students

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
];
// const result = students
//     .map((student) => {
//         let average = student.scores.reduce((acc,curr) => {
//             acc += (curr/3)
//             // console.log(acc)
//             return acc
//         },0)
//         student.scores = average
//         // console.log(students)
//     })
// console.log(students,result)
const averages = students.map((student) => {
    let average = student.scores.reduce((acc,curr) => {
        acc += (curr/3)
        return acc
    },0)
    return { name: student.name, average: average}
}).filter((student) => student.average>90);

console.log(averages)