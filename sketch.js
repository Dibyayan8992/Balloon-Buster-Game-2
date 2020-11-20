var background0, backgroundImage,edges;
var ballonRed, ballonImageRed,edges;
var ballonGreen, ballonImageGreen,edges;
var ballonBlue, ballonImageRed,edges;
var ballonPink, ballonImagePink,edges;
var bow, bowImage;
var arrow,arrowImage;


function preload() {
  
  backgroundImage = loadImage("background0.png");
  
  bowImage = loadImage("bow0.png");
  
  balloonImageRed = loadImage("red_balloon0.png");
  balloonImageGreen = loadImage("green_balloon0.png");
  balloonImageBlue = loadImage("blue_balloon0.png");
  balloonImagePink = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 500);

  background0 = createSprite(0,0, 600, 500);
  background0.addImage("background", backgroundImage);
  background0.x = background0.width / 2;
  background0.scale =3;
  
  
  
  for (var i = 60; i < 380; i = i + 60) {
    balloonRed = createSprite(50, i, 20, 50);
    balloonRed.addImage("balloonRed", balloonImageRed);
    balloonRed.scale = 0.1;
  }

  for (i = 110; i < 380; i = i + 60) {
    balloonGreen = createSprite(100, i, 20, 50);
    balloonGreen.addImage("balloonGreen", balloonImageGreen);
    balloonGreen.scale = 0.1;
  }

  for (i = 130; i < 360; i = i + 60) {
    balloonBlue = createSprite(150, i, 20, 50);
    balloonBlue.addImage("balloonBlue", balloonImageBlue);
    balloonBlue.scale = 0.1;
  }

  for (i = 150; i < 289; i = i + 70) {
    balloonPink = createSprite(199, i, 20, 50);
    balloonPink.addImage("balloonPink", balloonImagePink);
    balloonPink.scale = 1.1;
  }

  bow = createSprite(580, 300, 15, 15);
  bow.addImage("bow", bowImage);

  
}

function draw() {
  background("white");
           
  background0.velocityX = -2;
  if (background0.x < 0) {
    background0.x = background0.width/2;
  }
  
  bow.y = mouseY;
  
  
 if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
 }
   
  drawSprites();


}

function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  
  return arrow
  
}







