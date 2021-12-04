/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function cleanEmpty(data) {
  // Your Code Here
  let obj = data;
  if (Array.isArray(obj)) { 
    return obj
        .map(v => (v && typeof v === 'object') ? cleanEmpty(v) : v)
        .filter(v => !(v == null)); 
  } else { 
    return Object.entries(obj)
        .map(([k, v]) => [k, v && typeof v === 'object' ? cleanEmpty(v) : v])
        .reduce((a, [k, v]) => (v == null ? a : (a[k]=v, a)), {});
  } 
}

// console.log(result(data));
const util = require('util')
console.log(util.inspect(cleanEmpty(data), false, null, true /* enable colors */))