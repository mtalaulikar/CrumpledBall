class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/dustbin.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        push();
        noStroke();
        fill("Green");
        
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,960,400,300,300);
        pop();
    }
}