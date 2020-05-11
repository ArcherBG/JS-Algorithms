function getDigit(number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

function digitCount(number){
  let num = Math.abs(number);
  let i = 0;
  while(num > 0) {
    num = Math.floor(num / 10);
    i++;
  }
  return i;
}

function findMaxDigit(arr) {
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++) {
    let currDigitCount = digitCount(arr[i]);
    if (currDigitCount > maxDigits) {
      maxDigits = currDigitCount;
    }
  }

  return maxDigits;
}

function radixSort(arr) {
  const maxDigits = findMaxDigit(arr);
  for(let k = 0; k < maxDigits; k++) {
    const buckets = Array.from(new Array(10), x => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = buckets.flat(2);
  }
  return arr;
}

console.log(radixSort([8, 0, 123, 67890, 900, 42, 400, 5000]));
