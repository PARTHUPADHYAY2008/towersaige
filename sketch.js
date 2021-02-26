const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var score=0

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

   
    
    stand1 = new Ground(390,300,250,10);
    block8 = new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10 = new Box(390,235,30,40)
    block11 = new Box(420,235,30,40)
    block12 = new Box(450,235,30,40)

    block13 = new Box(360,195,30,40)
    block14 = new Box(390,195,30,40)
    block15 = new Box(420,195,30,40)

    block16 = new Box(390,155,30,40)

    stand2 = new Ground(700,200,200,10)
    block17 = new Box(640,120,30,40)
    block18 = new Box(670,120,30,40)
    block19 = new Box(700,120,30,40)
    block20 = new Box(730,120,30,40)
    block21 = new Box(760,120,30,40)

    block22 = new Box(670,90,30,40)
    block23 = new Box(700,90,30,40)
    block24 = new Box(730,90,30,40)

    block25 = new Box(700,60,30,40)
     //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot1 = new Slingshot(this.ball,{x:100,y:200});
}


function draw(){
    background(56,44,44); 
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    stand1.display()
    stand2.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()
    block15.score()
    block16.score()
    block17.score()
//
    
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()

ellipse(ball.position.x,ball.position.y,40,40)
    slingShot1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot1.fly();
  }