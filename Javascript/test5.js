// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function result(num) {
  // Your Code Here
  const binary = dec2bin(num);
  let count = 0;
  const search = "1";
  for(let i = 0; i < binary.length; i ++) {
    if (binary[i] === search) count ++;
  }
  return count;
}

console.log(result(number));