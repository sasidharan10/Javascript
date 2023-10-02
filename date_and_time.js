let now = new Date();  // current date
console.log(now);

let dt = new Date(0);  // starting of the time system
console.log(dt);

// we can set date : 
let dat = new Date("2023-4-12");
console.log(dat);

//Syntax :  Date(year, month, day, hour, minutes, seconds, milliseconds);
// month range = 0-11 (0 = jan)
// week range = 0-6 (0 = sunday)


let newdt = new Date(2023, 0, 12, 19, 30, 0, 0);
console.log("Full Date: ", newdt);

let yr = newdt.getFullYear();
console.log("Year: ", yr);

let mt = newdt.getMonth();
console.log("Month: ", mt);

let date = newdt.getDate();
console.log("Date: ", date);

let day = newdt.getDay();
console.log("Day: ", day);

let hr = newdt.getHours();
console.log("Hour: ", hr);

let mon = newdt.getMinutes();
console.log("Minute: ", mon);

let sec = newdt.getSeconds();
console.log("Seconds: ", sec);

let ml = newdt.getMilliseconds();
console.log("MilliSeconds: ", ml);

newdt.setDate(41);
newdt.setMinutes(35);
newdt.setHours(5);
console.log("NewDate: ", newdt);

        // // Display live time
        // function updatetime()
        // {
        //     tm.innerHTML=new Date();
        // }
        // setInterval(updatetime, 1000);