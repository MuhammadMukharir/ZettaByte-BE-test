/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 6, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
  // Your Code Here
  let n = sessions.length;
  const isExistSessionId = {};
  const isExistClassIdInSession = {};
  const ans = [];
  for (let i = 0; i < n; i++) {
    let curr = sessions[i];
    let temp = {};
    const element = sessions[i];

    // check if session already exist
    if (isExistSessionId[curr.session_id] >= 0) {
      let currI = isExistSessionId[curr.session_id];

      // check if class already exist
      if (isExistClassIdInSession[curr.session_id].includes(curr.class.class_id)) {
        for (let j = 0; j < ans[currI].classes.length; j++) {
          if (ans[currI].classes[j].class_id === curr.class.class_id) {
            ans[currI].classes[j].students.push(
                {
                  student_id: curr.student.student_id,
                  name: curr.student.name
                }
            );
            break;
          }
        }
      }

      // if class id not recorded in current session id
      else {
        isExistClassIdInSession[curr.session_id].push(curr.class.class_id);
        ans[currI].classes.push({
          class_id: curr.class.class_id,
          name: curr.class.name,
          students: [
            {
              student_id: curr.student.student_id,
              name: curr.student.name
            }
          ]
        });
      }
    }

    // if session id not recorded
    else {
      isExistSessionId[curr.session_id] = i;
      isExistClassIdInSession[curr.session_id] = [curr.class.class_id];
      temp = {
        session_id: curr.session_id,
        time: curr.time,
        classes: [
          {
            class_id: curr.class.class_id,
            name: curr.class.name,
            students: [
              {
                student_id: curr.student.student_id,
                name: curr.student.name
              }
            ]
          }
        ]
      }
      ans.push(temp);
    }
  }

  return ans;
}
// const ans = {};
// console.log();
// console.log(result(sessions));

const util = require('util')
console.log(util.inspect(result(sessions), false, null, true /* enable colors */))
