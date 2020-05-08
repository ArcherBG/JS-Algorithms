function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let currPivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      currPivotIndex += 1;
      const temp = arr[i];
      arr[i] = arr[currPivotIndex];
      arr[currPivotIndex] = temp;
    }
  }

  const temp = arr[start];
  arr[start] = arr[currPivotIndex];
  arr[currPivotIndex] = temp;

  return currPivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {

  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([-2, 1, 1, 3, 7, 5, 4, 10, 0, -1, 2, 6]));
