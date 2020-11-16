const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ground, ball;
var box1,box2;
var ground;
function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    /*var ground_options = {
        isStatic:true, mass: 200
    }
    var ball_option = {
        restitution:1
    }
    

   ground = Bodies.rectangle(500,560,1000,40,ground_options);
   World.add(world,ground);
  ball=Bodies.circle(200,200,50,ball_option);
  World.add(world,ball);
  
   

   console.log(ball);*/
   ground=new Ground(300,500,500,20);
   box1 = new Box(220,50,50,50);
   box2 = new Box(200,100,50,50); 
   
}

function draw(){
    background(100,50,20);
    Engine.update(engine);
    /*rectMode(CENTER);
   // rect(200,200,50,50);
    rect(ground.position.x,ground.position.y,1000,40);
    ellipseMode(RADIUS);
    
    ellipse(ball.position.x,ball.position.y,50,50);*/
    ground.display();
    box1.display();
    box2.display();
    
}