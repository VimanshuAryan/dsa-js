const numbers = [2,7,11,15] 
const target = 9

var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1

    while (l < r) {
        let curSum = numbers[l] + numbers[r]
        
        if (curSum > target) {
            r -= 1
        }
        else if (curSum < target) {
            l += 1
        }
        else return [l+1, r+1]
    }
};

console.log(twoSum(numbers,target))