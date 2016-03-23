function TestState2(){
	return this;
}

TestState2.prototype.Update = function(){
	if(inputSystem.isKeyDown(13))
		game_state = new TestState1();
}

TestState2.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillText("테스트 2",200,200);
}