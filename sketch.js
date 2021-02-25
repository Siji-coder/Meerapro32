const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
//const Body       = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimg;
var ball,ballimg;
var chain;
var blocks,blockimg;
var backg;

function preload() {

 boyimg  = loadImage("child3.png");
 backg   = loadImage("bg1.jpg");
 ballimg = loadImage("ball.png");

}

function setup() {

  createCanvas(1437,759.8);

  engine = Engine.create();
  world  = engine.world;
  //Engine.run(engine);

  //boy
  boy = createSprite(200,560,10,40);
  boy.addImage(boyimg);
  boy.scale = 0.7;

  //stand
  stand = new Stand(1100,665,2000,10)

  //blocks
  //9
  b  = new Block(880,635,50,30);
  b1 = new Block(940,635,50,30);
  b2 = new Block(1000,635,50,30);
  b3 = new Block(1060,635,50,30);
  b4 = new Block(1120,635,50,30);
  b5 = new Block(1180,635,50,30);
  b6 = new Block(1240,635,50,30);
  b7 = new Block(1300,635,50,30);
  b8 = new Block(1360,635,50,30);

//8
  b9  = new Block(910,604,50,30);
  b10 = new Block(970,604,50,30);
  b11 = new Block(1030,604,50,30);
  b12 = new Block(1090,604,50,30);
  b13 = new Block(1150,604,50,30);
  b14 = new Block(1210,604,50,30);
  b15 = new Block(1270,604,50,30);
  b16 = new Block(1330,604,50,30);

//7
  b17 = new Block(940,574,50,30);
  b18 = new Block(1000,574,50,30);
  b19 = new Block(1060,574,50,30);
  b20 = new Block(1120,574,50,30);
  b21 = new Block(1180,574,50,30);
  b22 = new Block(1240,574,50,30);
  b23 = new Block(1300,574,50,30);

//6
  b24 = new Block(970, 543,50,30);
  b25 = new Block(1030,543,50,30);
  b26 = new Block(1090,543,50,30);
  b27 = new Block(1150,543,50,30);
  b28 = new Block(1210,543,50,30);
  b29 = new Block(1270,543,50,30);

//5
  b30 = new Block(1000,512,50,30);
  b31 = new Block(1060,512,50,30);
  b32 = new Block(1120,512,50,30);
  b33 = new Block(1180,512,50,30);
  b34 = new Block(1240,512,50,30);

//4
  b35 = new Block(1030,481,50,30);
  b36 = new Block(1090,481,50,30);
  b37 = new Block(1150,481,50,30);
  b38 = new Block(1210,481,50,30);

//3
  b39 = new Block(1060,450,50,30);
  b40 = new Block(1120,450,50,30);
  b41 = new Block(1180,450,50,30);

//2
  b42 = new Block(1090,419,50,30);
  b43 = new Block(1150,419,50,30);

//1
  b44 = new Block(1120,388,50,30);


//ball

/*var options={
  restitution:1.0
}
  ball = Bodies.circle(50,500,200,options);
  World.add(world,ball);
  console.log(ball.body)*/

//chain
  
  ball = new Ball(200, 200, 20, 20);
  chain = new Chain(ball.body,{x:340,y:530});
}

function draw() {

  background(backg);  
  Engine.update(engine);

 
  fill("blue");
  //9
  b.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  //8
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  //7
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  //6
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  //5
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  //4
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  //3
  b39.display();
  b40.display();
  b41.display();
  //2
  b42.display();
  b43.display();
  //1
  b44.display();

  //ball
ball.display();
  chain.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    chain.attach(ball.body);
  }

  }