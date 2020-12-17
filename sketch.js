
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,mango1;
var mango2,mango3,mango4,mango5;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	img = loadImage("boy.png");
	tree = loadImage("tree.png");
	ground = new Ground(400,490,800,15);

	mango1 = new Mango(500,250,30);
	mango2 = new Mango(700,230,40);
	mango3 = new Mango(574,200,30);
	mango4 = new Mango(675,150,40);
	mango5 = new Mango(525,200,20);

	stone = new Stone(105,325,25);

	rubber = new Rubber(stone.body,{x:105,y:325});
	
	

	Engine.run(engine);
  
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }

function draw() {
	
  rectMode(CENTER);
  background("grey");
  
  image(img,80,250,140,300);
  image(tree,450,50,320,450);
  
  ground.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  stone.display();
  
  drawSprites();

  detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:105,y:325})
        rubber.attach(stone.body);
	}


	
	  
}



