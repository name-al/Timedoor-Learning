// for(i=1; i<=3; i++){
//     console.log(`Platform created ${i}`)
//     for(j=1; j<=2; j++){
//         console.log(`Carrot ${j}`)
//     }
// }
// const password = "TimeDoor";
// let input = prompt("Masukkan kata kunci:");

// while (input !== password) {
// input = prompt("Kata kunci salah. Silakan coba lagi:");
// }

// alert("Anda berhasil masuk!");
// do{
//    var random =  Math.floor(Math.random()*10)
//    console.log(`Angka yang keluar sebelum match adalah ${random}`)
// }while(random !== 5)
    // console.log(`Angka yang keluar adalah ${random}, angka yang dicari adalah 5`)
// var angka = 0
// while(angka <6){
//     angka++
//     console.log(`angka sekarang ${angka}`)
// }
// console.log(`finish di ${angka}`)
// var operator = prompt('Enter operator( +, -, * or / ): ');
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));
// var result;
// if(!isNaN(number1) && !isNaN(number2)){
//     if (operator == '+') {
//     result = number1 + number2;
//     } else if (operator == '-') {
//     result = number1 - number2;
//     } else if (operator == '*') {
//     result = number1 * number2;
//     } else if (operator == '/') {
//     result = number1 / number2;
//     } else {
//     alert('No Operator choosen')
//     }
// } else {
// alert('Your input is not a number')
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);
var questionList = ["What country has the longest coastline in the world?", 
    "By size, what is the smallest country in the world?", 
    "Which country has a unicorn as its national animal?",
    "Which country is home to the world’s tallest building?",
    "Officially, what is the coldest country in the world?"
];
var answerKeyList = [
    "Canada",
    "Vatican City",
    "Scotland",
    "United Arab Emirates",
    "Russia"
];
var life = 3
var score = 0
var i = 0
do {
    var playerAnswer = prompt(questionList[i]).toLowerCase()
    var answerkey = answerKeyList[i].toLowerCase()
    if (playerAnswer !== answerkey){
        life--
        console.log(`Your life left ${life}`)
        i--
    }
    if (playerAnswer === answerkey){
        score = score+20
    }
    i++
    console.log(score)
}
while (i<questionList.length && life > 0)
console.log(`Your score ${score} `)

