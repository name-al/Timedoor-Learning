// var a = 10
// function scope(){
//     console.log(a)
// }
// scope();
//  "use strict";
// function scope(){
//     b = 100
// }
// scope()
// console.log(b)
// greeting()

// var greeting = function (){
// console.log('Hello World')
// }
// sayHello()

// function sayHello(){
// console.log('Hello')
// }

// var ab = 0
// var ba = 10
// var penjumlahan = (a, b) => {
//     console.log(`${a} + ${b} = ${a + b}`)
// }
// penjumlahan(10, 20)
// var penjumlahan = (c, d) => {
//     console.log(`${c} + ${d} = ${c + d}`)
// }
// ab = penjumlahan(ab, ba)
// function check(){
// console.log('Hi')
// return
// console.log('World')
// }

// check()


// var numloc= [111,11,1,111,1111, 11,11,111,1,111];
// function findNumberLocation(num) {
//     for (var i=0; i < num.length; i++) {
//         if (num[i] === 1111) {
//             console.log(`hellon from ${i}`);
//             return i; 
//         }
//     }
// }
// var numLocation = findNumberLocation(numloc);
// console.log(`1111 is located at index ${numLocation}`)

// function cmToMeter(cm) {
// var m = cm*0.01;
// return `${cm} cm is ${m} meter`
// }
// console.log(cmToMeter(100))
// function cmToKm(cm) {
// var km = cm*0.00001;
// return `${cm} cm is ${km} km`
// }
// console.log(cmToKm(100000))
// function cmToMm(cm) {
// var mm = cm*0.1;
// return `${cm} cm is ${mm} mm`
// }
// console.log(cmToMm(10))

var guests= ['Kimberly', 'olivia', 'Sophia', 'Catriona', 'Michele']
guests.forEach(GuestName => {
    console.log(`To : ${GuestName}`)
})