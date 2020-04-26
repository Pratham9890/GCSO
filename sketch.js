var car1,car2,car3;
var wall1,wall2,wall3;
var div1;



function setup() {
  createCanvas(1500,600);
  car1 = createSprite(100,50,20,20);
  car1.velocityX=6
  wall1 = createSprite(1400,50,20,100);
  div1 = createSprite(750,110,1500,20);
  div1.shapeColor = 'white'
  car2 = createSprite(100,170,20,20);
  car2.velocityX=5
  wall2 = createSprite(1400,170,20,100);
  div2 = createSprite(750,230,1500,20);
  div2.shapeColor = 'white'
  car3 = createSprite(100,290,20,20);
  car3.velocityX=4.5
  wall3 = createSprite(1400,290,20,100);
  
}

function draw() {
  background('black');  
  drawSprites();
  if(isTouching(car1,wall1)){
  car1.velocityX = 0
  }
  if(isTouching(car2,wall2)){
  car2.velocityX = 0
  }
  if(isTouching(car3,wall3)){
  car3.velocityX = 0
  }
}

