//count the unique elements in the given array

const arr = [1,1,2,2,3,4,4,5,6,7,8,8,9,9,9,9]

const countUnique = (arr) => {
    let i = 0;

    for (let j = 1; j<arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i ++ 
            arr[i] = arr[j];
        } 
    }
    return i + 1;
};

console.log(countUnique(arr));