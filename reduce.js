const arr = [1,2,9,3,4,7]

const maximum = arr.reduce((acc, curr) => {
    acc = Math.max(curr,acc)
    return acc
},0)

console.log(maximum)