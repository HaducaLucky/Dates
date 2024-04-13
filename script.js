//! Date object = Objects that contain values that represent dates and times
//?               These date objects can be changed and formatted

//* Date(year, month, day, hour, minute, second, ms) 
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

//* Set the date

// const date = new Date();

// date.setFullYear(2029);
// date.setMonth(2);
// date.setDate(16);
// date.setHours(8);
// date.setMinutes(1);
// date.setSeconds(1);

// console.log(date);

//* compare dates 

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}