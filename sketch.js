var engine,world,ground,box1,box2,log1,box3,box4,log2,pig1,pig2,bird1,log1A,log2A,box5,sling1,gameState;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

gameState = "attached"

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(300,595,600,10);
	box1 = new Box(350,500,75,75);
	box2 = new Box(560,500,75,75);
	log1 = new Log(450,475,300,10,PI/16);

	box3 = new Box(350,400,75,75);
	box4 = new Box(550,400,75,75);
	log2 = new Log(450,375,300,10,PI/16);

	pig1 = new Pig(450,550,40,40);
	pig2 = new Pig(450,450,40,40);

	bird1 = new Bird(250,400,50,75);

	box5 = new Box(450,300,75,75);
	log1A = new Log(400,275,150,10,PI/9);
	log2A = new Log(500,275,150,10,PI/-9);

	sling1 = new Sling(bird1.body,{x:200,y:200});
  
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
  pig2.display();
  bird1.display();

  box5.display();
  log1A.display();
  log2A.display();

}

function mouseDragged(){
	if(gameState!== "shoot"){
		Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
	}
}

function mouseReleased(){
	sling1.shoot();
	gameState = "shoot"
}

function keyPressed(){
	if(keyCode === 32){
		sling1.attach(bird1.body);
		gameState = "attached";
	}
}



