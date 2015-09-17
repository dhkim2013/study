window.addEventListener("load",drawScreen,true);
function drawScreen(){
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	Context.fillStyle="#3498db";
	Context.fillRect(0,0,1000,700);
	var gradient=Context.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","black");
	gradient.addColorStop("1.0","white");
	Context.strokeStyle=gradient;
	Context.lineWidth=5;
	Context.strokeRect(5,5,700,400);
	Context.moveTo(5,5);
	Context.lineTo(700,400);
	Context.strokeStyle="#000";
	Context.stroke();
	Context.moveTo(700,5);
	Context.lineTo(5,400);
	Context.strokeStyle="#FFF";
	Context.stroke();
}
