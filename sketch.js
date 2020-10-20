var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var boxLeftSprite, boxRightSprite, boxBaseSprite;
var boxRightBody, boxLeftBody, boxBaseBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(packageSprite.x , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = new Box(345,height-95,20,100);
	box2 = new Box(445,height-95,20,100);
	box3 = new Box(395,645,125,20);

 
}


function draw() 
{
	Engine.update(engine);
	
	rectMode(CENTER);
	
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	drawSprites();
	keyPressed();
	helicopterMove();
	box1.display();
	box2.display();
	box3.display();


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}

function helicopterMove(){
	if (keyDown("LEFT_ARROW")){
		helicopterSprite.x=helicopterSprite.x-10;
			this.translation={x:-10, y:0}
			Matter.Body.translate(packageBody, this.translation);
	}
	else if (keyDown("RIGHT_ARROW")){
		helicopterSprite.x=helicopterSprite.x+10;
			this.translation={x:+10, y:0}
			Matter.Body.translate(packageBody, this.translation);
	}
}