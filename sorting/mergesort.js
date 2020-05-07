function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(firstHalf, secondHalf);
}

function merge(firstArr, secondArr) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] > secondArr[j]) {
      mergedArr.push(secondArr[j]);
      j++;
    } else {
      mergedArr.push(firstArr[i]);
      i++;
    }
  }
  while (i < firstArr.length) {
    mergedArr.push(firstArr[i]);
    i++;
  }
  while (j < secondArr.length) {
    mergedArr.push(secondArr[j]);
    j++;
  }

  return mergedArr;
}

console.log(mergeSort([3, 8, 4, 5, 3, 6]));
