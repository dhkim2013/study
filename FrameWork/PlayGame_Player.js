function PGPlayer(){
	this.sprPlayer = new SpriteAnimation(resourcePreLoader.GetImage("img/game_player.png"),156,222,4,4);
	this.x = 50;
	this.y = 255;
	this.isJumping = false;
	this.jumpingPower = 0;
	this.sprPlayer.SetPosition(this.x, this.y);
}

PGPlayer.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	this.sprPlayer.Render(Context);
}

PGPlayer.prototype.Update = function(){
	this.sprPlayer.Update();
	if(this.isJumping == false){
		if(inputSystem.isKeyDown(32)){
			this.isJumping = true;
			this.jumpingPower = -20;
			//console.log(this.jumpingPower);
		}
	}else{
			this.y += this.jumpingPower;
			this.jumpingPower += 1.5;
			if(this.y >= 255){
				this.y = 255;
				this.isJumping = false;
			}
			this.sprPlayer.SetPosition(this.x,this.y);
	}
	
}