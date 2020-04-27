var car1;
var wall1;
var deformation,weight,speed


function setup() {
  createCanvas(1600,400);
  car1 = createSprite(100,200,30,30);
  car1.velocityX=15
  wall1 = createSprite(1400,200,60,400);
  weight = random(400,1500)
  speed = random(30,95)
  deformation = (0.5*weight*speed*speed)/22500
}

function draw() {
  background('black');  
  drawSprites();
  if(isTouching(car1,wall1)){
    car1.velocityX = 0
    if(deformation>180) {
      car1.shapeColor = "red"
    }
    if(deformation<180 && deformation>100) {
      car1.shapeColor = "yellow"
    }
    if(deformation<100) {
      car1.shapeColor = "green"
    }
  }
}

