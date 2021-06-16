const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var  slingShot ;
var hexa,hexa_image;

function preload(){
  hexa_image=loadImage("download (1).png")


}

function setup() {
  createCanvas(900,500);
  
  
engine = Engine.create();
world = engine.world;

  ground1 = new Ground(400,350,330,10);
  ground = new Ground(750,250,250,10)
  backGround = new Ground(450,500,900,20)

  // Making Blocks

  //ground(){
 //For Line 1
 //For Line 2
 //For Line 3
  //}

  //For Line 1
  block1 = new Box(265,320,45,50);
  block2 = new Box(310,320,45,50);
  block3 = new Box(355,320,45,50);
  block4 = new Box(400,320,45,50);
  block5 = new Box(445,320,45,50);
  block6 = new Box(490,320,45,50);
  block7 = new Box(535,320,45,50);

// For Line 2
  block8 = new Box3(310,270,45,50);
  block9 = new Box3(355,270,45,50);
  block10 = new Box3(400,270,45,50);
  block11 = new Box3(445,270,45,50);
  block12 = new Box3(490,270,45,50);

  // For Line 3
  block13 = new Box2(355,220,45,50);
  block14 = new Box2(400,220,45,50);
  block15 = new Box2(445,220,45,50);

  // For Line 4
  block16 = new Box1(400,170,45,50);

  //Making Boxs For Second Ground

  //For Line 1
  box1 = new Box(670,220,40,50);
  box2 = new Box(710,220,40,50);
  box3 = new Box(750,220,40,50);
  box4 = new Box(790,220,40,50);
  box5 = new Box(830,220,40,50);

  // For Line 2
  box6 = new Box2(710,170,40,50);
  box7 = new Box2(750,170,40,50);                        
  box8 = new Box2(790,170,40,50);

  // For Line3
  box9 = new Box3(750,120,40,50);

  hexa =Bodies.circle(50,200,20);
  World.add(world,hexa)
  slingShot = new SlingShot(this.hexa,{x:100,y:200})
  

  Engine.run(engine)
  

  

  
  
  
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
    
  
 

  ground1.display();
  ground.display()

  // Display Blocks
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  // Display Boxs
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  backGround.display()

  SlingShot.display(){

    
    imageMode(CENTER)
    image (hexa_image,hexa.position.x,hexa.position.y,40,40);
    
  }
}