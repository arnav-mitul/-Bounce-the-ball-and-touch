var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(600,100,30,30);


  ob2=createSprite(100,100,60,60);


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  ob1.y=World.mouseY;
  ob1.x=World.mouseX;
 bounceOff(movingRect,fixedRect)

  if(isTouching(ob1,ob2)){
    ob1.shapeColor="red";
    ob2.shapeColor="white";
  }
  else{
    ob1.shapeColor="green";
    ob2.shapeColor="green";
  }




  drawSprites();
}



 










