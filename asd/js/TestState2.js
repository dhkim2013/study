function TestState2(){
    return this;
}

TestState2.prototype.Update=function(){
    if (inputSystem.isKeyDown(27)){
        ChangeGameState(new TestState);
    }
}

TestState2.prototype.Render=function(){
    var theCanvas=document.getElementById ("GameCanvas");
    var Context=theCanvas.getContext ("2d");
    Context.fillText ("TestState2", 200, 300);
}