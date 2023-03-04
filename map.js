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

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
// Expected output: "fox"

const chars = str.split('');
console.log(chars);
// Expected output: "k"

const elements = ['Fire', 'Air', 'Water'];
const newStr = elements.join();
console.log(newStr);
// Expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

console.log(elements)

const input = "Every developer likes to mix kubernetes and javascript";

const arrr = input.split(' ');
const newArrr = arrr.map((word) => {
    if (word.length > 3) {
        let num = word.length - 2
        word = word[0] + num + word[word.length-1]
        return word
    } else {
        return word
    }
})
const numeronyms = newArrr.join(' ')
console.log(numeronyms)
const createNumeronym = (word) =>
  word[0] + (word.length - 2) + word[word.length - 1];
const output = input
  .split(" ")
  .map((word) => (word.length >= 4 ? createNumeronym(word) : word))
  .join(" ");
console.log(output)

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
console.log(array1)
