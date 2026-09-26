var random = Math.floor(Math.random()*9)
var adjectives = ["sedih", "senang", "marah", "bingung", "malas", "semangat", "bosan", "gembira", "lelah", "keren"]
var nouns = ["meja", "kayu", "besi", "tas", "batu", "gas", "air", "gerebak", "manusia", "pohon"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var newUsername 
var newPassword
function generate(option){
    switch(option){
        case 1:
            newUsername = adjectives[random] + nouns[random]
            console.log(`Your new username is ${newUsername}`)
            break;
        case 2:
            newPassword = adjectives[random].toUpperCase() + nouns[random] + random + symbols[random]
            console.log(`Your new password is ${newPassword}`)
            break;
        default:
            console.log('Invalid option')
            break;
}}
var userOption = parseInt(prompt('Choose an option: 1 for username, 2 for password'))
do {
    generate(userOption)
} while (userOption != 1 && userOption != 2)