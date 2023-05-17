//217 
const nums2 = [1,2,3,1]
function dupli (nums) {
    const s = new Set(nums)
    return s.size !== nums.length
};

// console.log(dupli(nums2))

nums = [2,14,18,22,22]
var dupli2 = function(nums) {
    nums.sort((a,b) => a-b);
    for (let i=0; i<= nums.length-1; i++) {
        console.log(i, i+1)
        if (nums[i] === nums[i+1]) {
            return true
        }

    }
    return false
};
// console.log(dupli2(nums))

const duplicate = (nums2) => {
    let map = {}
    for (let i = 0; i < nums2.length; i++) {
        if (!map[nums2[i]]) {
            map[nums2[i]] = 1
        } 
        else {
            return true
        }
    }
    return false
}
console.log(duplicate(nums2))