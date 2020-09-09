

// const currentYear = new Date().getFullYear();
// let monthInYear = 12;
// // let dayInMonth = new Date(currentYear, month, 0).getDate();
// let arr = [];
// let arrDay = [];

// for (let i = 1; i < monthInYear + 1; i++) {
//   arr.push(new Date(currentYear, i, 0).getDate());
// }


// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr[i] + 1; j++) {
//     arrDay[i].push(j);
//   }
// }

// console.log(arrDay);
let nowDate = new Date();
let today = nowDate.getDate();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let temp = new Date(currentYear, currentMonth + 1, 0);
let lastDay = temp.getDate();
let arr = [];
let next;
let obj = {};

// function createTable(i) {
  for (let k = 0; k < 12; k++) {
  let d = new Date(currentYear, currentMonth, 1);
  let t = d.getDay() - 1;
  if (t < 0) {
    t = 6;
  }

  let a = 0;
  while(d.getMonth() === currentMonth) {
    let i = 0;
    while (i < 7) {
      if (a === 0) {
        if (i < t) {
          i++;
          continue;
        }
        arr.push(d.getDate());
        d.setDate(d.getDate() + 1);
      } else {
        if (next > currentMonth) {
          break;
        }
        arr.push(d.getDate());
        d.setDate(d.getDate() + 1);
        next = d.getMonth();
      }
      i++;
    }
    a++;
  }
  
  if (arr.length !== 7) {
    arr.unshift(' ');
  }
  obj[k] = arr;
  console.log(k);
}