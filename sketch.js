const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG,packageIMG,engine,world;
var packageBody,ground,helicopter;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700,700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(350 , 210 , 50, {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	console.log(packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world,ground);
	console.log(ground);

	helicopter = Bodies.rectangle(300,180,170,100,{isStatic:true});
	World.add(world,helicopter);

	Engine.run(engine);

	box1 = new Box(339,665,200,20);
	box2 = new Box(226,630,20,100);
	box3 = new Box(450,630,20,100);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 rect(ground.position.x,ground.position.y,800,10);
 image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
 image(helicopterIMG,helicopter.position.x,helicopter.position.y,170,100);
 box1.display();
 box2.display();
 box3.display();
 text(mouseX +", "+mouseY,mouseX,mouseY);
 }

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
	 helicopter.x = helicopter.x-20
	 translation ={x:-20,y:0}
     Matter.Body.translate(helicopter,translation)
  }else if(keyCode === RIGHT_ARROW){
	helicopter.x = helicopter.x+20
	translation ={x:20,y:0}
	Matter.Body.translate(helicopter,translation) 
  }else if(keyCode === DOWN_ARROW){
	  Matter.Body.setStatic(packageBody,false);
  }
}



