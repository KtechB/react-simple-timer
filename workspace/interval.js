const { clear } = require("console")
let a = 0
const time = setInterval(() =>{ a += 1;
    console.log(a)}, 1000)

time

if (a ==3){
    clearInterval(time)
}