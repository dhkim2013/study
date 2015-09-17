var imgBackground=new Image();
imgBackground.src="space.png"

var imgPlayer=new Image();
imgPlayer.src="ufo.png"

var a="None";
var b="None";
var x=0;
var y=0;
var MouseClicked=false;
var MouseStatus="준비중";

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
}
function onkeydown(e){
	a=e.type;
	if (e.keyCode)
		code=e.keyCode;
	b=code;
	if(b===38&&y!=0)y-=10;
	if(b===40)y+=10;
	if(b===37&&x!=0)x-=10;
	if(b===39&&x!=687)x+=10;
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
