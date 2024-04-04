var running
var bg
var stand,boyStand
var jumping
var invisibleGround
var block1Img,block1
function preload(){
  stand=loadImage("assests/standing.png")
  running=loadAnimation("assests/running/running1.png","assests/running/running2.png","assests/running/running3.png","assests/running/running4.png","assests/running/running5.png","assests/running/running6.png","assests/running/running7.png","assests/running/running8.png")
  jumping=loadAnimation("assests/jump/jump1.png","assests/jump/jump2.png","assests/jump/jump3.png","assests/jump/jump4.png","assests/jump/jump5.png","assests/jump/jump6.png")
  block1Img=loadImage("assests/blockset1bgremoved.png")
  bg=loadImage("realbg.webp")
  
  
  
   }

function setup() {
  createCanvas(1200,500);
  

  boyStand=createSprite(100,285)
  boyStand.addImage("stand",stand)
  boyStand.addAnimation("go",running)
  boyStand.addAnimation("jump",jumping)
  invisibleGround=createSprite(600,420,1200,10)
  invisibleGround.visible=false
block1=createSprite(450,300,1200,10)
block1.addImage("obstacle1",block1Img)
block1.scale=0.6
}
 
function draw() {
  background(bg);  
  if(keyDown(RIGHT_ARROW)){
boyStand.changeAnimation("go",running)
boyStand.x=boyStand.x+5
  }
  
  if(keyDown(UP_ARROW)&&boyStand.y>272){
    boyStand.changeAnimation("jump",jumping)
    boyStand.velocityY=-15
    console.log(boyStand.y)
      }
boyStand.velocityY+=1
boyStand.collide(invisibleGround)
boyStand.collide(block1)
  drawSprites();
}