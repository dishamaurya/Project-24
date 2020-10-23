var ball,ground1;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//create ground
	ground1 = new Ground(400,height,800,20);

	box1 = new Box(600,685,150,10);
	box2 = new Box(530,660,10,50);
	box3 = new Box(670,660,10,50);

	ball = new Ball(200,685);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  drawSprites();

  keyPressed();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {

        Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:-85 });

	}
}



