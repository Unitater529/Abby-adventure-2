var fox1;
var farm;
var treat1;
var treat2;
var monster;


function preload(){
fox1=loadAnimation("images/fox-1.png","images/fox-2.png","images/fox-3.png","images/fox-4.png","images/fox-5.png");
farm=loadImage("images/farm1.png");
}


function setup(){
createCanvas(displayWidth,displayHeight);
farm1 = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.2,displayHeight*1.2);
fox = createSprite(100,displayHeight/2+50,displayWidth,displayHeight);

fox.addAnimation("fox1",fox1);
farm1.addImage(farm);
farm1.scale= 2.3;

}

function draw(){
    drawSprites();
  
    farm1.velocityX= -10;
  
}