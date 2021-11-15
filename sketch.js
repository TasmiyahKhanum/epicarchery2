const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var playerBase,baseImg;
var player,aim,angle,arrow;
var dartboard,dartboardimg;
var player,playerImg;


function preload() {
  backgroundImg = loadImage("background.png");
  baseImg = loadImage("base.png");
  dartboardimg = loadImage("board.png");
  playerImg = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle=-90;

  var options = {
    isStatic: true
  };

  player = Bodies.rectangle(248,200,100,170,options);
  World.add(world,player);

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  dartboard=Bodies.rectangle(870,200,100,150,options);
  World.add(world,dartboard);

  aim = new Archer(350, 260, 120, 100, angle);
  arrow = new Arrows(aim.x,aim.y,angle);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseImg,playerBase.position.x,playerBase.position.y,180,150)
  image(dartboardimg,dartboard.position.x,dartboard.position.y,100,150);
  image(playerImg,player.position.x,player.position.y,100,170);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  aim.display();
  keyPressed();
  /*if(arrow.isTouching(dartboard)){
    arrow.velocityX=0;
    arrow.velocityY=0;
  }*/
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    arrow.shoot();
    arrow.display();
  }
}



