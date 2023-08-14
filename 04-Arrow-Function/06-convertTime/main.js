//input-day
//logic day*24*60*60
//output-second

//V2 : DAY => SEC
let dayToSecond = (day) => {
    let second = day * 86400;
    console.log (`${day} days have ${second} second`);
}
dayToSecond(5);

//V1 : DAY => HR, MIN, SEC
// let dayToSecond = (day) => {
//     let hour = day * 24;
//     let minute = hour * 60;
//     let second = minute * 60;
//     console.log (`${day} days have ${hour} hour`);
//     console.log (`${day} days have ${minute} minute`);
//     console.log (`${day} days have ${second} second`);
// }

// dayToSecond(5);