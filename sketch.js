var car1;
var wall; 
var deformation;
var weight;
var speed;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(400,200, 50, 50);
     wall = createSprite(1500,200,60,height/2)

     speed = random(55,90);
     weight = random(400,1500);
      

  car1.shapeColor = "white";
   car1.velocityX = speed;
    wall.shapeColor = "80,80,80"
  
}

function draw() {
  background("black");  
  
  deformation = (0.5*weight*speed*speed)/22500

  check();
  
  drawSprites();
}

function check(){

  if( wall.x - car1.x < wall.width/2 + car1.width/2) {
    car1.velocityX = 0;

    if (deformation >= 180){
      car1.shapeColor = "red";
      
     }
   
     if (deformation <180 && deformation >= 100){
       car1.shapeColor = "yellow";
     }
   
     if (deformation <100){
       car1.shapeColor = "green";
     }
  }
}
