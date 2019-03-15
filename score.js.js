var p1= document.getElementById("p1");
var p2 = document.getElementById("p2");
var p = document.querySelector("p");
var winningScoredDisplay = document.querySelector("p span");



var reset = document.getElementById("reset");
var input = document.querySelector("input");
var p2Scores = document.querySelector("#p2Score");
var p1Scores = document.querySelector("#p1Score");
var p1Score = 0;
var p2Score = 0;
var gameOver =false;
var winngingScore =5;
p1.addEventListener("click", function(){
	if(!gameOver){
p1Score++;
	}
	if(p1Score == winngingScore){
		gameOver =true;
		p1Scores.classList.add("winner");
			}
p1Scores.textContent=p1Score;
}, true);

p2.addEventListener("click", function(){
	if(!gameOver){
p2Score++;
	}
	if(p2Score == winngingScore){
		gameOver =true;
		p2Scores.classList.add("winner");
	}
p2Scores.textContent=p2Score;
}, true);

reset.addEventListener("click", function(){
	reset();
}, true);



function reset(){
p1Score =0;
	p2Score= 0;
	p1Scores.textContent = 0;
	p2Scores.textContent = 0;
	p1Scores.classList.remove("winner");
	p2Scores.classList.remove("winner");
	gameOver =false;
}

input.addEventListener("change", function(){
winningScoredDisplay.textContent = input.value;
winngingScore = input.value;
reset();
}, true);