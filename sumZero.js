const arr = [-5,-4,-3,-2,0,2,4,6,8];

const sumZero = () => {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        sum = arr[left] + arr[right];
        console.log(arr[left], arr[right]);
        if (sum == 0) {
            return [arr[left], arr[right]];
        } else if ( sum > 0) {
            right --;
        } else {
            left ++
        }
    };
};

console.log(sumZero());