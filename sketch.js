

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	box1 = new dustbin(400,650,200,20)
	box2 = new dustbin(300,610,20,100)
	box3 = new dustbin(500,610,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  box1.display();
  box2.display();
  box3.display();

}



