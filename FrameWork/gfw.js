function onGameInit() {   
    document.title = "웹게임 소전_러너 게임 프로젝트";
    
    FPS = 30;
   	resourcePreLoader.AddImage("img/title_background.png");
   	resourcePreLoader.AddImage("img/title_start_off.png");
	resourcePreLoader.AddImage("img/title_start_on.png");
	resourcePreLoader.AddImage("img/title_battle_off.png");
	resourcePreLoader.AddImage("img/title_battle_on.png");
	resourcePreLoader.AddImage("img/title_ranking_off.png");
	resourcePreLoader.AddImage("img/title_ranking_on.png");
	resourcePreLoader.AddImage("img/title_credit_off.png");
	resourcePreLoader.AddImage("img/title_credit_on.png");
	resourcePreLoader.AddImage("img/game_background00.png");
	resourcePreLoader.AddImage("img/game_background01.png");
	resourcePreLoader.AddImage("img/game_background02.png");
	resourcePreLoader.AddImage("img/game_background03.png");
	resourcePreLoader.AddImage("img/game_crocodile.png");
	resourcePreLoader.AddImage("img/game_player.png");
	resourcePreLoader.AddImage("img/game_box.png");
	
   	//soundSystem.isLoadComplete = true;
   	soundSystem.AddSound("sound/adventure.mp3",1);
    after_loading_state = new TitleState();
    setInterval( gameLoop, 1000 / FPS );  
}



window.addEventListener("load", onGameInit, false);