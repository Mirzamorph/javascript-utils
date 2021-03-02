// binary search

const arr = [1, 2, 3, 5, 8, 13, 21];

const binarySearch = (arr, number) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Number((min + max) / 2);

    if (arr[mid] === number) {
      return mid;
    }
    if (arr[mid] > number) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return null
};

binarySearch(arr, 1)
