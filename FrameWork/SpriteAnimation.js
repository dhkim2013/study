function SpriteAnimation( img, width, height, totalFrameCount, fps ){
    this.x      = 300;
    this.y      = 400;
    this.img    = img;
  
    this.width  = width;
    this.height = height;
    
    this.totalFrameCount = totalFrameCount;   
    this.currentFrame = 0;    
    

    //this.updateFrame = fps / FPS;
    this.animationTimer = new Timer();
    this.fps = fps;
    
    return this;
}

SpriteAnimation.prototype.Render = function( context ){
    context.drawImage( this.img,
         this.width * this.currentFrame, 0, 
         this.width, this.height,
         this.x, this.y,
         this.width, this.height );
}


SpriteAnimation.prototype.Update = function( context ){
    if(this.animationTimer.nowFrame>1000/this.fps){
       //console.log(this.animationTimer.nowFrame);
        this.currentFrame++;
        if(this.currentFrame >= this.totalFrameCount)
            this.currentFrame = 0;
        this.animationTimer.Reset();
    }
}

SpriteAnimation.prototype.Translate = function( x, y ){
    this.x += x;
    this.y += y;
}

SpriteAnimation.prototype.SetPosition = function( x, y ){
    this.x = x;
    this.y = y;
}
