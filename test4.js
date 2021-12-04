/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const isExistNum = {};
  const n = numbers.length;
  for (let i = 0; i <= 9; i++) {
    isExistNum[i] = false;
  }

  for (let i = 0; i < n; i++) {
    let curr = numbers[i];
    isExistNum[curr] = true;
  }

  let missNum = [];
  for (let i = 0; i <= 9; i++) {
    if (!isExistNum[i]) {
      missNum.push(i);
    }
  }

  return missNum;
}

console.log(result(numbers));
