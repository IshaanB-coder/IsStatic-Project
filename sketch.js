const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world;
var ground;
var ball;
var ball2;

function setup(){
  engine = Engine.create()
  world = engine.world 
  groundOption = {isStatic: true}
ground = Bodies.rectangle(200, 400, 400, 30, groundOption)
World.add(world, ground)
ballOptions = {restitution: 1}
ball = Bodies.circle(200, 10, 25, ballOptions)
World.add(world, ball)
ball2Options = {restitution: 1}
ball2 = Bodies.circle(100, 10, 25, ball2Options)
World.add(world, ball2)


console.log(ground)
}

function draw(){
    background(0);
   Engine.update(engine)
    rectMode(CENTER);
    fill("green")
    rect(ground.position.x, ground.position.y, 400, 30)
    fill("red")
    ellipse(ball.position.x, ball.position.y, 25, 25)
    fill("purple")
    ellipse(ball2.position.x, ball2.position.y, 25, 25)
}