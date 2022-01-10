const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, ground;
var ball, rope;

function setup() {
  createCanvas(1360, 655);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

}

function draw() {
  background(180);
  Engine.update(engine);

  ground.display();
}



