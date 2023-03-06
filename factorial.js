// n! with reduce and map

const input = 6

const arr = new Array(input).fill(null)
const newArr = arr.map((ele, index, arr) => {
    return index + 1
})
    .reduce((acc, curr, currIndex, arr) => {
        return acc * curr
    })
console.log(newArr)

const soln = new Array(input).fill(null)
.map((element, index) => index + 1)
.reduce((acc,cur) => acc*cur)

console.log(soln)

// Count elements in array of arrays