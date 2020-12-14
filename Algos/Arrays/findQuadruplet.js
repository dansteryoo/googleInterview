function findArrayQuadruplet(arr, sum) {
  if (arr.length < 4) return [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let rest = sum - (arr[i] + arr[j]);
      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        if (arr[left] + arr[right] < rest) {
          left++;
        } else if (arr[left] + arr[right] > rest) {
          right--;
        } else {
          return [arr[i], arr[j], arr[left], arr[right]];
        }
      }
    }
  }

  return [];
}

const test2 = findArrayQuadruplet([1, 2, 3, 4, 5, 9, 19, 12, 12, 19], 40)
console.log(test2);
