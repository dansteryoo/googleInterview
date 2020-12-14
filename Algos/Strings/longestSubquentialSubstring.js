function LongestIncreasingSequence(arr) {
  if (arr.length < 1) return 0;
  let new_arr = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        new_arr[i] = Math.max(new_arr[i], 1 + new_arr[j]);
      }
    }
  }
  
  return Math.max(...new_arr);
}

function LongestIncreasingSequence(arr) {
  let result = 0;
  let anchor = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] >= arr[i]) anchor = i;
    result = Math.max(result, i - anchor + 1);
  }

  return result
}

lis = [10,9,2,5,3,7,101,18]
console.log(LongestIncreasingSequence(lis));
