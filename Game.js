'use strict'
// Define Variables
let secretNumber = Math.trunc(Math.random()*20 )+1;
document.querySelector(".what").textContent = "?";
let message =document.querySelector(".message");
let score = 5 , highScore = 0;
// Events
// Check Button
document.querySelector(".check")
.addEventListener("click", function(){
if(score >1){
let guess =Number(document.querySelector(".input").value);
if(!guess){
message.textContent= "There is no number 👀";
score--;
document.querySelector(".score").textContent =score;
document.body.style.backgroundColor ="red";
 }
else if(guess == secretNumber){
message.textContent= "Correct Number 🎉✨";
score--;
document.querySelector(".score").textContent =score;
document.body.style.backgroundColor ="green";
document.querySelector(".secretNumber").style.cssText= "width:200px ;";
if(score > highScore ){
highScore = score;
document.querySelector(".high-score").textContent =highScore;
}
}
else{
message.textContent = guess > secretNumber?
 "Too High 📈": "Too Low 📉";
 score--;
 document.body.style.backgroundColor ="#222";
 document.querySelector(".score").textContent =score;}
}
else{
message.textContent= "You Lost the game 😓";
document.querySelector(".score").textContent = 0;}
})
// Again Button
document.querySelector(".again")
.addEventListener("click", function(){
score = 5;
document.querySelector(".score").textContent =score;
secretNumber = Math.trunc(Math.random()*20 )+1;
document.querySelector(".secretNumber").textContent = "?";
message.textContent = "Guess  the number ...";
document.querySelector(".input").value ="";
document.body.style.backgroundColor ="#222";
})

