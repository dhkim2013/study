function TestState1(){
    return this;
}

TestState1.prototype.Update=function(){
    if (inputSystem.isKeyDown(13))
        ChangeGameState(new TestState2());
}

TestState1.prototype.Render=function(){
    var theCanvas=document.getElementById ("GameCanvas");
    var Context=theCanvas.getContext ("2d");
    Context.fillText ("TestState1", 100, 200);
}