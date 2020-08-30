var fixedRect, movingRect;
var idk, anything;
var something, idunno;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  idk = createSprite(1200, 200, 50, 50);
  idk.shapeColor = "cyan";
  idk.velocityX = -5;
  anything = createSprite(1, 200, 50, 50);
  anything.shapeColor = "cyan";
  anything.velocityX = 5;

  idunno = createSprite(600, 1, 50, 50);
  idunno.shapeColor = "gray";
  something = createSprite(600, 800, 50, 50);
  something.shapeColor = "lightgreen";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (collide(movingRect, something)){
    movingRect.shapeColor = "red";
    something.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "gray";
    something.shapeColor = "lightgreen";
  }

  bounceOff();
  drawSprites();
}
