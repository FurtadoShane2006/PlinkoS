const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
 
var particles = [];
var Plinkos = [];
var Division=[];

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);


    for (var k=0; k<=width; k=k+80) {
       Division.push(new Division(k, 800-300/2, 10, 300));
    }

    for (var j=75; j<=width; j=j+50){
       Plinkos.push(new Plinko(j,75));
    }

    for (var j=50; j<=width-10; j=j+50){    
       Plinkos.push(new Plinko(j,175));
    }

     for (var j=75; j<=width; j=j+50){    
       Plinkos.push(new Plinko(j,275));
    }

     for (var j=50; j<=width-10; j=j+50){    
       Plinkos.push(new Plinko(j,375));
    }    
}

function draw() {
  background("black");
  textSize(20)
  fill ("white");
  text("Score: "+score,20,750);
  Engine.update(engine);
   
   for (var i = 0; i < Plinkos.length; i++) {     
     Plinkos[i].display();     
   }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j=0; j<particles.length; j++) {   
     particles[j].display();
   }

  for (var k=0; k<Division.length; k++) {     
     Division[k].display();
  }
}