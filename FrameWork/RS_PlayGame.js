function PlayGameState(){
	this.background = new PGBackground();
	this.playground = new PGPlayground();
	this.player = new PGPlayer();


	//this.sprCrocodile = new SpriteAnimation(resourcePreLoader.GetImage("img/game_crocodile.png"),97,186,2,2);
}

PlayGameState.prototype.Init = function(){

}

PlayGameState.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	this.background.RenderLayerBack();
	this.playground.Render();
	this.background.RenderLayerFront();
	this.player.Render();
	//this.sprCrocodile.Render(Context);
}

PlayGameState.prototype.Update = function(){
	this.background.Update();
	this.playground.Update();
	this.player.Update();
	//this.sprCrocodile.Update();
}
