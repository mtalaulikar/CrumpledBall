
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,480,1200,40);
	d1 = new Dustbin(900,410,20,100);
	d2 = new Dustbin(960,450,100,20);
	d3 = new Dustbin(1010,410,20,100);
	ball = new Ball(100,100,30);
	Engine.run(engine);
  
}


function draw() {
  background("LightBlue");
  ground.display();
  ball.display();
  d1.display();
  d2.display();
  d3.display();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
	}
}

