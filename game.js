var imgBackground=new Image();
imgBackground.src="space.png"

var imgPlayer=new Image();
imgPlayer.src="ufo.png"

var ball=new Image();
ball.src="meteo.png";

cnt=10000;
var intervalId;
var intervalMove;
var interval;
var tempBall1={x:0,y:0,goX:1,goY:1};
var tempBall2={x:600,y:0,goX:-1,goY:1};
var tempBall3={x:500,y:500,goX:-1,goY:-1};
var tempBall4={x:0,y:500,goX:1,goY:-1};
var game=0;
var gameStateReady=0;
var gameStateGame=1;
var gameStateOver=2;
var x=0;
var y=0;
var ms=0;

window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);
window.addEventListener("keyup",onkeyup,false);

function drawScreen(){
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	Context.drawImage(imgBackground,0,0,1024,768);
	Context.drawImage(imgPlayer,x,y,30,30);
	Context.fillStyle="#fff";
	Context.font="24px NanumGothic";
	if(game==gameStateReady){
		Context.fillText("Ready!",470,250);
	}
	else if(game==gameStateGame){
		Context.drawImage(ball,tempBall1.x,tempBall1.y,30,30);
		Context.drawImage(ball,tempBall2.x,tempBall2.y,30,30);
		Context.drawImage(ball,tempBall3.x,tempBall3.y,30,30);
		Context.drawImage(ball,tempBall4.x,tempBall4.y,30,30);
		if(x==tempBall1.x&&y==tempBall1.y)
			game=gameStateOver;
		if(x==tempBall2.x&&y==tempBall2.y)
			game=gameStateOver;
		if(x==tempBall3.x&&y==tempBall3.y)
			game=gameStateOver;
		if(x==tempBall4.x&&y==tempBall4.y)
			game=gameStateOver;
	}
	else if(game==gameStateOver){
		Context.fillText("Over!",400,300);
	}
}
function onGameStart(){
	intervalId=setInterval(moveBall,10);
}
function moveBall(){
	tempBall1.x+=tempBall1.goX*1;
	tempBall1.y+=tempBall1.goY*1;
	tempBall2.x+=tempBall2.goX*1;
	tempBall2.y+=tempBall2.goY*1;
	tempBall3.x+=tempBall3.goX*1;
	tempBall3.y+=tempBall3.goY*1;
	tempBall4.x+=tempBall4.goX*1;
	tempBall4.y+=tempBall4.goY*1;
	drawScreen();
}
function onkeydown(e){
	if(game==gameStateReady){
		if(e.keyCode==13)
			game=gameStateGame;
			onGameStart();
	}
	else if(game==gameStateGame){
		switch(e.keyCode){
			case 38:
				intervalMove=setTimeout("interval=setInterval(up,10)",ms);
				if(y<0)
					y=0;
				break;
			case 40:
				intervalMove=setTimeout("interval=setInterval(down,10)",ms);
				if(y>730)
					y=730;
				break;
			case 37:
				intervalMove=setTimeout("interval=setInterval(left,10)",ms);
				if(x<0)
					x=0;
				break;
			case 39:
				intervalMove=setTimeout("interval=setInterval(right,10)",ms);
				if(x>1000)
					x=1000;
				break;
		}
		ms=cnt*cnt;
	}
	else if(game==gameStateOver){
		if(e.keyCode==13)
			game=gameStateReady;
	}
	drawScreen();
}
function onkeyup(e){
	clearInterval(interval);
	clearTimeout(intervalMove);
	ms=0;
	drawScreen();
}
function up(){
	y-=1;
}
function down(){
	y+=1;
}
function left(){
	x-=1;
}
function right(){
	x+=1;
}