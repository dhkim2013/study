function TitleState(){
	this.flagButtonStart = false;
	this.flagButtonBattle = false;
	this.flagButtonRanking = false;
	this.flagButtonCredit = false;

	this.imgBackground = resourcePreLoader.GetImage("img/title_background.png");
	this.imgButtonStartOff = resourcePreLoader.GetImage("img/title_start_off.png");
	this.imgButtonStartOn = resourcePreLoader.GetImage("img/title_start_on.png");
	this.imgButtonBattleOff = resourcePreLoader.GetImage("img/title_battle_off.png");
	this.imgButtonBattleOn = resourcePreLoader.GetImage("img/title_battle_on.png");
	this.imgButtonRankingOff = resourcePreLoader.GetImage("img/title_ranking_off.png");
	this.imgButtonRankingOn = resourcePreLoader.GetImage("img/title_ranking_on.png");
	this.imgButtonCreditOff = resourcePreLoader.GetImage("img/title_credit_off.png");
	this.imgButtonCreditOn = resourcePreLoader.GetImage("img/title_credit_on.png");


	return this;
}

TitleState.prototype.Init = function(){
	soundSystem.PlayBackgroundMusic("sound/adventure.mp3");
}

TitleState.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.drawImage(this.imgBackground, 0, 0);
	if(this.flagButtonStart)
		Context.drawImage(this.imgButtonStartOff, 0, 0);
	else
		Context.drawImage(this.imgButtonStartOn, 0, 0);
	if(this.flagButtonBattle)
		Context.drawImage(this.imgButtonBattleOff, 0, 0);
	else
		Context.drawImage(this.imgButtonBattleOn, 0, 0);
	if(this.flagButtonRanking)
		Context.drawImage(this.imgButtonRankingOff, 0, 0);
	else
		Context.drawImage(this.imgButtonRankingOn, 0, 0);
	if(this.flagButtonCredit)
		Context.drawImage(this.imgButtonCreditOff, 0, 0);
	else
		Context.drawImage(this.imgButtonCreditOn, 0, 0);
}

TitleState.prototype.Update = function(){
	this.UpdateUI();
}

TitleState.prototype.UpdateUI = function(){
	if(inputSystem.mouseX > 370 && inputSystem.mouseY > 337 && inputSystem.mouseX < 370+62 && inputSystem.mouseY < 337+35){
		if(this.flagButtonStart == false){
			this.flagButtonStart = true;
			console.log(this.flagButtonStart);
		}
	}
	else{
		this.flagButtonStart = false;
		console.log(this.flagButtonStart);
	}
	if(inputSystem.mouseX > 370 && inputSystem.mouseY > 390 && inputSystem.mouseX < 370+62 && inputSystem.mouseY < 390+35){
		if(this.flagButtonRanking == false)
			this.flagButtonRanking = true;
	}
	else{
		this.flagButtonRanking = false;
	}
	if(inputSystem.mouseX > 370 && inputSystem.mouseY > 450 && inputSystem.mouseX < 370+62 && inputSystem.mouseY < 450+35){
		if(this.flagButtonBattle == false)
			this.flagButtonBattle = true;
	}
	else{
		this.flagButtonBattle = false;
	}
	if(inputSystem.mouseX > 370 && inputSystem.mouseY > 500 && inputSystem.mouseX < 370+62 && inputSystem.mouseY < 500+35){
		if(this.flagButtonCredit == false)
			this.flagButtonCredit = true;
	}
	else{
		this.flagButtonCredit = false;
	}
}

TitleState.prototype.onMouseDown = function(){
	if(this.flagButtonStart){
		console.log(this.flagButtonStart);
		ChangeGameState(new PlayGameState());
	}
	if(this.flagButtonBattle)
		ChangeGameState();
	if(this.flagButtonRanking)
		ChangeGameState();
	if(this.flagButtonCredit)
		ChangeGameState();
}