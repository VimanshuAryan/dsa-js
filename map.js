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
