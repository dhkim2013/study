function PGPlayground(){
	this.imgBox = resourcePreLoader.GetImage("img/game_box.png");
	this.imgCrocodile = resourcePreLoader.GetImage("img/game_crocodile.png");
	this.intBoxY = 600 - 136 - 20;
	this.intCrocodileY = 600 - 186 - 30;

	this.arrObjects = new Array();
	this.AddObject("box");
	this.AddObject("box");
	this.AddObject("box");
	this.AddObject("crocodile");
	this.AddObject("box");
	this.AddObject("box");
	this.AddObject("crocodile");
	/*
	for(var i=0; i<5;i++){
		this.AddObject("box");
	}

	for(var i = 0; i<10;i++){
		var box = new GraphicObject(this.imgBox);
		box.SetPosition(237*i - (26 * i), this.intBoxY);
		this.arrObjects.push(box);
	}
	this.lastObj = this.arrObjects[this.arrObjects.length-1];
	return this;
	*/
}

PGPlayground.prototype.AddObject = function(type){
	var obj;
	if(type == "box"){
		obj = new GraphicObject(this.imgBox);
		obj.type = "box";
		if(this.lastObj)
			this.GotoLastPosition(obj);
		/*
		if(this.lastObj){
			if(this.lastObj.type == "crocodile")
				obj.SetPosition(this.lastObj.x + 97, this.intBoxY);
			else
				obj.SetPosition(this.lastObj.x + 237 - 26, this.intBoxY);
		}
		else
			obj.SetPosition(0, this.intBoxY);
	*/
	}else if(type == "crocodile"){
		obj = new SpriteAnimation(this.imgCrocodile, 97, 186, 2,2);
		obj.SetPosition(0,this.intCrocodileY);
		obj.type = "crocodile";
		if(this.lastObj)
			this.GotoLastPosition(obj);
	}
	this.arrObjects.push(obj);
	this.lastObj = obj;
}

PGPlayground.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	/*
	for(var i=0; i<5; i++){
		Context.drawImage(this.imgBox, 237*i - (26 * i),600-136-20);
	}
	*/
	for(var i=0; i<this.arrObjects.length;i++){
		this.arrObjects[i].Render(Context);
	}
}

PGPlayground.prototype.Update = function(){
	var speed = 10;
	for(var i = 0; i< this.arrObjects.length; i++){
		var obj = this.arrObjects[i];
		obj.Translate(-speed,0);
		if(obj.Update)
			obj.Update();
		if(obj.x < -237){
			this.GotoLastPosition(obj);
			this.lastObj = obj;
			obj.Translate(-speed,0);
		}
		this.arrObjects.sort(function(obj1, obj2){return obj1.x-obj2.x});
		//this.arrObjects[i].Translate(-speed,0);
	}
}

PGPlayground.prototype.GotoLastPosition = function(obj){
	if(obj.type == "box"){
		if(this.lastObj.type=="crocodile")
			obj.SetPosition(this.lastObj.x + 97, this.intBoxY);
		else
			obj.SetPosition(this.lastObj.x + 237 - 26, this.intBoxY);
	}else if(obj.type=="crocodile"){
		obj.SetPosition(this.lastObj.x + 237, this.intCrocodileY);
	}
}