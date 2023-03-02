const arr = [1,2,3,4,5]

const newArr = arr.filter((num, i,arr) => {
    return arr[i] % 2 === 0
})

console.log(newArr)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const isPrime = (num) => {
    for (let i=2; i<num; i++) {
        if (num % i === 0){
            return false
        }
    }
    return num > 1
}

const prime = array.filter((num,i,array) => {
    return isPrime(num)
})

console.log(prime)
const arr1 = [1,2,3,4]

const sum = arr1.reduce((acc,curr) => {
    return acc+curr;
},0)

console.log(sum)
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
    //nullish coalescing operator ??
  const currCount = allNames[name] ?? 0;
  return {
    //spread operator
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
