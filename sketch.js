var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed= random(555, 90);
  weight= random(400, 1500);

  car= createSprite(50, 200, 50, 50);
  
  wall= createSprite(1500, 200, 60,height/2);
  wall.shapeColor= "grey";
}

function draw() {
  background(255,255,255);  
  
  car.velocityX= speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
car.veloctiyX= 0;
var deformaiton= 0.5*weight*speed*speed/22500;
if (deformation>180){
car.shapeColor= "red";
}

if(deformation<180 && deformaiton>100){
  car.shapeColor= "yellow" ;
}

if(deformaiton<100){
  car.shapeColor= "green";
}
  }
  drawSprites();
}