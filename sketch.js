var hero;


function preload(){
  heroAni = loadImage("Superhero-01.png","Superhero-02.png");
  bgImg = loadImage("GamingBackground.png");
  fireImg = loadImage("fire.png");
}

function setup(){
  createCanvas(1360,621);

  bg = createSprite(1000,250,200,200);
  bg.addImage(bgImg);
  bg.velocityX = -3;
  bg.scale = 1;

  hero = createSprite(100,250,20,20);
  hero.addAnimation("heroAnimation",heroAni);
  hero.scale = 0.118;
 
}


function draw() {
  background("white");
  
 
 

  if(bg.x<100){
	  bg.x = bg.width/2;
  }

  if(keyDown("up")){
   hero.y = hero.y - 7;
  }

  if(keyDown("down")){
   hero.y = hero.y + 7;
  }

  spawnFire();
  
  drawSprites();
  stroke("white")
  fill("white")
  textSize(20);
  text("Press up and down arrow to move the superhero",200,50);


 
}

 function spawnFire(){
   if(frameCount % 40 === 0){
     var fire = createSprite(1320,200,20,20);
     fire.velocityX = -10;
     
     fire.y = Math.round(random(40,580));
     fire.addImage(fireImg);
     fire.scale = 0.09;
     fire.lifetime = 1000;
    }
}



