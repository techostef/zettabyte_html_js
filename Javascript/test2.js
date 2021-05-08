// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
function getArrExpect(arr1, arr2) {
  let odd = []
  let even = []
  if (arr1.length > arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      const item = arr1[i];
      const findIndex = arr2.findIndex((val) => val === item);
      if (findIndex === -1) {
        if (item % 2 === 0) even.push(item)
        else odd.push(item) 
      }
    }
  } else {
    for(let i = 0; i < arr2.length; i++) {
      const item = arr2[i];
      const findIndex = arr1.findIndex((val) => val === item);
      if (findIndex === -1) {
        if (item % 2 === 0) even.push(item)
        else odd.push(item) 
      }
    }
  }
  odd.sort((a, b) => b - a)
  even.sort((a, b) => a - b)
  return {
    odd,
    even
  }
}

function result(arr1, arr2) {
  // Your Code Here
  const arrExcept = getArrExpect(arr1, arr2);
  const result = [...arrExcept?.odd, ...arr1, ...arrExcept.even]
  return result;
}

console.log(result(arr1, arr2));