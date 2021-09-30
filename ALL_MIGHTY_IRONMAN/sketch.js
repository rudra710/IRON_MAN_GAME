var ironman , ironmanImage;
var diamond ,diamondImage, thanos, thanosImage ;
var diaGroup, thaGroup;
var backgroundImage;

var PLAY=1
var ENd=0;
var gameState=1;

var score;

function preload(){
  thanosImage = loadImage("thanos.png")
  backgroundImage = loadImage("background.jpg")
  ironmanImage = loadImage("ironman1.png");
  diamondImage = loadImage("diamond.png");
 
}



function setup() {
  createCanvas(1500,750);
  
  ironman = createSprite(80,510,20,20);
  ironman.addImage(ironmanImage);
  ironman.scale=0.1;

  ground=createSprite(650,525,3600,20);
  ground.visible=false;
  
  
  score=0;
  
  
  thaGroup=createGroup();
  diaGroup= new Group();
}


function draw() {
background(backgroundImage);
  
 if(gameState===1){
       ironman.collide(ground);

    dia();
    tha();
   
    survival=Math.round(frameCount/3);
   
   ground.velocityX=-10;
   if(ground.x<0){
     ground.x=ground.width/2;
     
   }
   
   if(keyDown("space")&& ironman.y>=100){
     ironman.velocityY=-20;
     
   }
   ironman.velocityY=ironman.velocityY+0.8;
  console.log("  hello"+" teacher");
   
   if(ironman.isTouching(diaGroup)){
     score=score+1;
     diaGroup.destroyEach();
   }
   else if(ironman.isTouching(thaGroup)){
    textSize(120);
    stroke("yellow");
    fill("red")
    text("game over",500,400);
    gameState=0;
     

   }

 }
  if(gameState===0){
    ironman.velocity=0;
    ironman.visible=false;
     diaGroup.destroyEach();
     thaGroup.destroyEach();
    ground.velocityX = 0;
  }

  drawSprites();
  stroke("grey");
  textSize(30);
  strokeWeight(2);
  text(" survival time : "+ survival ,340,40);
  text(" collected emerald : "+score,40,40);   
 
}

function dia(){
  if(frameCount%80===0){
    var diamond =createSprite(1400,Math.round(random(410,380)),20,20);
    diamond.addImage(diamondImage);
    diamond.velocityX=-10-score/2;
    diamond.lifetime=130
    diamond.scale=0.3;
    diaGroup.add(diamond);
  }
}
function tha(){
  if(frameCount%160===0){
    var thanos=createSprite(1400,420,20,20)
    thanos.addImage(thanosImage);
    thanos.scale=0.8;
    thanos.lifetime=130;
    thanos.velocityX=-10-score/2;
    thaGroup.add(thanos);
  }
}




