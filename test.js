const arr = [-5,-4,3,-2,0,2,4,6,8];

const sumZero = () => {
  for (let num=0; num<arr.length; num++) {
    console.log(num,"out");
    for (let j=num+1; j<arr.length; j++) {
      console.log(arr[j],"in");
      if (arr[num] + arr[j] == 0) {
        return [arr[num], arr[j]];
      }
    }
  }
};

console.log(sumZero());