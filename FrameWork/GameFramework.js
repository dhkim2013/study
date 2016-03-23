window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("load",onPageLoadComplete, false);

var FPS = 30;

var game_state = new LoadingState(); 
var after_loading_state;

function onPageLoadComplete(){
  setInterval(gameLoop, 1000/ FPS);
}

function Update(){
  timerSystem.Update();
  game_state.Update();
}

function Render(){
  var theCanvas = document.getElementById("GameCanvas");
  var Context  = theCanvas.getContext("2d");

    game_state.Render();
}

function gameLoop(){   
  Update();
  Render();
  
  frameCounter.countFrame();
}

function ChangeGameState(nextGameState){
  if(nextGameState.Init == undefined)
    return;
  if(nextGameState.Update == undefined)
    return;
  if(nextGameState.Render == undefined)
    return;
  game_state = nextGameState;

  game_state.Init();
}