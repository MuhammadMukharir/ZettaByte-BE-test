/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  if (!words || words.length === 0) return '';

  // sort shortest length to longest
  let sortedArr = words.sort((a, b) => a.length - b.length);

  // take shortest string
  let shortestString = sortedArr[0];

  // starting with entire shortest string, check if each string matches
  // if not, remove ending letter, and check again
  while (!words.every((string) => string.startsWith(shortestString))) {
    if (shortestString.length === 0 ) return;

    shortestString = shortestString.slice(0, -1);
  }

  return shortestString;
}

console.log(result(words));
