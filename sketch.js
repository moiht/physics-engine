const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var  options ={
  isStatic : true,  
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);

  var ball_options ={
    restitution:0.9,
    }

  ball = Bodies.circle(200,200,40,ball_options);
  World.add(world,ball);
  //console.log(ball);
  var car_options ={
    restitution:0.9,
    }

 car = Bodies.rectangle(100,200,40,40,car_options);
  World.add(world,car);
  
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  rectMode(CENTER); 
  rect(car.position.x,car.position.y,40,40);
}