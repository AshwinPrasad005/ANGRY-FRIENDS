var engine,world,ground,box1,box2,log1,box3,box4,log2;

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
	box2 = new Box(500,500,50,50);
	log1 = new Log(450,450,150,10);

	box3 = new Box(400,400,50,50);
	box4 = new Box(500,400,50,50);
	log2 = new Log(450,390,150,10)
  
}


function draw() {
  background("blue");

  ground.display();
  box1.display();
  box2.display();
  log1.display();

  box3.display();
  box4.display();
  log2.display();
  
  drawSprites();
 
}



