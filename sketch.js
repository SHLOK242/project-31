


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7
var sling1
var tree1
var stone1
var boy
var world
var slingShot
var SlingForce=100

function preload()
{
boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 650);
boy=createSprite(200,590,50,50)
boy.addImage(boyImg)
boy.scale=0.1
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree1=new Tree()
ground1=new Ground()
stone1=new Stone()
mango1=new Mango(1100,250,50)
mango2=new Mango(1200,100,50)
mango3=new Mango(1000,200,50)
mango4=new Mango(900,150,50)
mango5=new Mango(1300,250,50)
mango6=new Mango(1250,150,50)
mango7=new Mango(1000,50,50)
sling1=new SlingShot(stone1.body,{x:150,y:540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
 
 tree1.display()
 ground1.display()
 stone1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 sling1.display()
 
 detectCollision(stone1,mango1)
 detectCollision(stone1,mango2)
 detectCollision(stone1,mango3)
 detectCollision(stone1,mango4)
 detectCollision(stone1,mango5)
 detectCollision(stone1,mango6)
 detectCollision(stone1,mango7)
}


function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling1.fly()
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		sling1.attach(stone1.body)
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango+lstone){
	Matter.Body.setStatic(lmango.body,{isStatic:false})
}
}
