var imgBackground=new Image();
imgBackground.src="space.png"

var imgPlayer=new Image();
imgPlayer.src="ufo.png"

var ball=new Image();
ball.src="meteo.png";

var intervalId;
var tempBall1={x:0,y:0,goX:1,goY:1};
var tempBall2={x:600,y:0,goX:-1,goY:1};
var tempBall3={x:500,y:500,goX:-1,goY:-1};
var tempBall4={x:0,y:500,goX:1,goY:-1};
var game=0;
var gameStateReady=0;
var gameStateGame=1;
var gameStateOver=2;
var a="None";
var b="None";
var x=0;
var y=0;
var MouseClicked=false;

window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);
window.addEventListener("keyup",onkeyup,false);
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);

function drawScreen(){
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	Context.drawImage(imgBackground,0,0);
	Context.drawImage(imgPlayer,x,y);
	Context.fillStyle="#fff";
	Context.font="24px NanumGothic";
	if(game==gameStateReady){
		Context.fillText("Ready!",470,250);
	}
	else if(game==gameStateGame){
		Context.drawImage(ball,tempBall1.x,tempBall1.y);
		Context.drawImage(ball,tempBall2.x,tempBall2.y);
		Context.drawImage(ball,tempBall3.x,tempBall3.y);
		Context.drawImage(ball,tempBall4.x,tempBall4.y);
	}
	else if(game==gameStateOver){
		Context.fillText("Over!",400,300);
	}
}
function onGameStart(){
	intervalId=setInterval(moveBall,100);
}
function moveBall(){
	tempBall1.x+=tempBall1.goX*10;
	tempBall1.y+=tempBall1.goY*10;
	tempBall2.x+=tempBall2.goX*10;
	tempBall2.y+=tempBall2.goY*10;
	tempBall3.x+=tempBall3.goX*10;
	tempBall3.y+=tempBall3.goY*10;
	tempBall4.x+=tempBall4.goX*10;
	tempBall4.y+=tempBall4.goY*10;
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
			if(y>0)
				y-=10;
			break;
		case 40:
			if(y<500)
				y+=10;
			break;
		case 37:
			if(x>0)
				x-=10;
			break;
		case 39:
			if(x<840)
				x+=10;
			break;
	}
	}
	else if(game==gameStateOver){
		if(e.keyCOde)
			game=gameStateReady;
	}
	drawScreen();
}
function onkeyup(e){
	a=e.type;
	if (e.keyCode)
		code=e.keyCode;
	b=code;
	drawScreen();
}
function onMouseDown(e){
	MouseStatus="클릭!";
	var theCanvas=document.getElementById("GameCanvas");
	MouseClicked=true;
	x=e.clientX-theCanvas.offsetLeft-42;
	y=e.clientY-theCanvas.offsetTop-50;
	drawScreen();
}
function onMouseMove(e){
	MouseStatus="Moving now"
	if(MouseClicked){
		var theCanvas=document.getElementById("GameCanvas");
		x=e.clientX-theCanvas.offsetLeft-42;
		y=e.clientY-theCanvas.offsetTop-50;
		drawScreen();
	}
}
function onMouseUp(e){
	MouseStatus="클릭 끝!";
	MouseClicked=false;
	x=480;
	y=300;
	drawScreen();
}	
