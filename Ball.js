class Ball {
    constructor(x,y,radius){
        var options = {
            restitution : 0.2,
            friction : 3,
            density : 0.4

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Images/paper.png");
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        image(this.image,pos.x,pos.y,40,40);
        pop();
    }
}