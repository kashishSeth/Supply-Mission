var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "Green"

	rect1 = createSprite(400,650,200,20);
	rect1.shapeColor = "Red";

	rect2 = createSprite(500,610,20,100);
	rect2.shapeColor = "Red";

	rect3 = createSprite(300,610,20,100);
	rect3.shapeColor = "Red";

	packageSprite=createSprite(10, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;

	helicopterSprite=createSprite(-10, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 2;
	helicopterSprite.lifeTime = 60;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

}	


function draw() {
  rectMode(CENTER);
  background(rgb(168,224,255));
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.bounceOff(rect1);
  packageSprite.bounceOff(rect2);
  packageSprite.bounceOff(rect3);

  if(helicopterSprite.x > 800) {
	fill("Black");
	textSize(50);  
	text("Game Over",300,350);
  }
   

  drawSprites();
  
  fill("Green");
  rect(400,690,800,54);

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.visible = true; 
	Matter.Body.setStatic(packageBody, false);
  }
}



