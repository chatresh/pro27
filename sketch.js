const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hold;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var op={
      isStatic:1.0
    }
     

    hold = Bodies.rectangle(200,70,200,20,op);
    World.add(world,hold);
    pendball = Bodies.circle(200,250,125,op);
    World.add(world,hold);
    Chain = new Chain(hold,pendball);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    textSize(14);
    text("press space to oscillate the pendulum with the help of mouse",10,20)
    text("press enter to stop pendulum from oscillating",50,40);
    push();
    fill(21,70,187);
    ellipse(pendball.position.x,pendball.position.y,125);
    pop();
    push(); 
    fill(185,254,21);
    rectMode(CENTER);
    rect(hold.position.x,hold.position.y,200,20);
    pop();
    
    
    Chain.display();
    if(keyCode===32){
      pendball.position.y = mouseY;
      pendball.position.x = mouseX;
      }
      
      else if (keyCode===ENTER){
      pendball.position.x = 200;
      pendball.position.y=250; 
      }
      
      }