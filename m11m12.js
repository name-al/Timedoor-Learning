// function greeting(){
//     firstName ='Noah'
//     lastName ='Caleb'
//     console.log(`My name is ${firstName} ${lastName}`)
//     console.log()
// }
// greeting();
// greeting();
// function intro() {
//     document.write('My Name is Noah <br> ');
//     document.write('I want to be a game developer <br>');
//     document.write('Hi <br>');
// }
// function funFact() {
//     document.write('Do you know? <br>');
//     document.write('The first programmer in the world was a woman named Ada Lovelace. <br>');
// }
function Anime(){
    var anim =["Yosuga no Sora", "Boku no Pico", "Oshi no Ko"];
    var random = Math.floor(Math.random()*anim.length);
    var recommendation = anim [random];
    console.log(`I recommend ${recommendation}`);
}
function noodle(){
    var menus =["Udon", "Pad Thai", "Mie Goreng", "Wonton Noodle Soup", "laksa"];
    var random = Math.floor(Math.random()*menus.length);
    var recommendation = menus [random];
    console.log(`I recommend ${recommendation}`);
}
function game(){
    var menus =["Mobile Legend", "Genshin Impact"];
    var random = Math.floor(Math.random()*menus.length);
    var recommendation = menus [random];
    console.log(`I recommend ${recommendation}`);
}
function greeting(name, country, career){
    alert(`Hello ${name}`)
    document.write(`Hello, my name is ${name}, I form ${country} and I want to be a ${career} in the Future`)
}
var area;
var circum;
function square(side){
    area = side*side;
    circum = 4*side;
    console. log('--- Square -----')
    console.log(`Area : ${area} `)
    console.log(`Circumference : ${circum}`)
}
function rect(length, width){
    area = length*width;
    circum = 2(length+width);
    console. log(' ---Rectangle--- ')
    console.log(`Area : ${area} `)
    console.log(`Circumference : ${circum}`)
    
}