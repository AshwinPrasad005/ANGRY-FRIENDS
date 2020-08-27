var engine,world,ground,box1,box2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(300,595,600,10);
	box1 = new Box(400,500,50,50);
	box1 = new Box(500,500,50,50);
  
}


function draw() {
  background("blue");

  ground.display();
  box1.display();
  box2.display();
  
  drawSprites();
 
}



