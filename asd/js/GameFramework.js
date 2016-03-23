window.addEventListener ("load", onPageLoadComplete, false);

var FPS=100;
var rect_x=100;
var rect_y=100;

/*var game_state=new TestState1();*/

function TestState(){
    /*var test_img=new Image();*/
    /*test_img.src="../images/sprite.png";*/
    var sprite_img=new Image();
    sprite_img.src="../images/sprite.png";
    this.testObject=new SpriteAnimation(sprite_img, 125, 167, 4, 5);
    /*this.testObject.SetPosition (200, 20);*/
    return this;
}

/*function TestState.prototype.Update(){
    this.testObject.Translate(1, 1);
}*/
TestState.prototype.Update=function(){
    this.testObject.Update();
    
    if (inputSystem.isKeyDown(37))
        this.testObject.x-=10;
    if (inputSystem.isKeyDown(39))
        this.testObject.x+=10;
    if (inputSystem.isKeyDown(38))
        this.testObject.y-=10;
    if (inputSystem.isKeyDown(40))
        this.testObject.y+=10;
}

/*function TestState.prototype.Render(){
    var theCanvas=document.body.getElementById ("GameCanvas");
    var Context=theCanvas.getContext ("2d");
    this.testObject.Render(Context);
}*/
TestState.prototype.Render=function(){
    var theCanvas=document.getElementById ("GameCanvas");
    var Context=theCanvas.getContext ("2d");
    this.testObject.Render(Context);
}


function onPageLoadComplete(){
    soundSystem.AddSound("../Sound/shoot.mp3");
    setInterval(gameLoop, 1000/FPS);
    
    game_state=new TestState();
}

function gameLoop(){
    Update();
    Render();
    frameCounter.countFrame();
}

function Update(){
    game_state.Update();
    
    if (inputSystem.isKeyDown(37)){
        rect_x-=10;
    }
    if (inputSystem.isKeyDown(39)){
        rect_x+=10;
    }
    if (inputSystem.isKeyDown(38)){
        rect_y-=10;
    }
    if (inputSystem.isKeyDown(40)){
        rect_y+=10;
    }
}

function Render(){
    var theCanvas=document.getElementById ("GameCanvas");
    var Context=theCanvas.getContext ("2d");
    
    Context.fillStyle="#700";
    Context.fillRect (0, 0, 800, 600);
    Context.fillStyle="#fff";
    Context.font='15px Arial';
    Context.textBaseline="top";
    Context.fillText ("FPS : "+frameCounter.Lastfps, 10, 10);
    /*Context.fillStyle="#ff0";
    Context.fillRect (rect_x, rect_y, 40, 40);*/
    
    game_state.Render();
}

function ChangeGameState(nextGameState){
    if (nextGameState.Update==undefined)
        return;
    if (nextGameState.Render==undefined)
        return;
    game_state=nextGameState;
}