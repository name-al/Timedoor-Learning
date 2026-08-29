var gameTime = [2,2,3,3,1,4,5]
var extraTime = 0
var totalTime = 0

for (i=0; i<gameTime.length; i++){
    if(gameTime[i] > 2){
        extraTime++;
    }
        // console.log(gameTime[i]);
        totalTime++
    
}
console.log (`Waktu yang kelebihan : ${extraTime} hari, dengan total ${totalTime} hari`)
