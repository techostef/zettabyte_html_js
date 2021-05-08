// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function checkIsBigger(arr1, arr2) {
  let isBigger = true;
  let biggest = Math.max(...arr1);
  for(let i = 0; i < arr2.length; i ++) {
    const item = arr2[i];
    if (biggest > item) isBigger = false;
    if (!isBigger) break;
  }
  return isBigger
}

function checkIsSmaller(arr1, arr2) {
  let isSmaller = false;
  let smallest = Math.min(...arr1);
  for(let i = 0; i < arr2.length; i ++) {
    const item = arr2[i];
    if (smallest < item) isSmaller = true;
    if (isSmaller) break;
  }
  return isSmaller
}

function result(arr1, arr2) {
  // Your Code Here
  const isBigger = checkIsBigger(arr1, arr2)
  const isSmaller = checkIsSmaller(arr1, arr2)
  const res = [isBigger, isSmaller];
  return res;
}

console.log(result(arr1, arr2));