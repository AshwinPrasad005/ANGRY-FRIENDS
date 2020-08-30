var engine,world,ground,box1,box2,log1,box3,box4,log2,pig1,pig2,bird1;

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
	box1 = new Box(375,500,75,75);
	box2 = new Box(575,500,75,75);
	log1 = new Log(475,475,300,10);

	box3 = new Box(375,400,75,75);
	box4 = new Box(575,400,75,75);
	log2 = new Log(475,375,300,10);

	 pig1 = new Pig(475,500,75);
  
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

  pig1.display();
  
  drawSprites();
 
}



