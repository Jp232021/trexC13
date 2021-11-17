
var trex ,trex_running;
var ground,invisbleground;
var groundImage;
var cloud,cloudImage;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);

 
 //crea sprite del suelo
  ground=createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
  ground.x=ground.width/2
  //CREA EL PISO INVISIBLE
  invisbleground=createSprite(200,190,400,10)
  invisbleground.visible=false;
  //var ran=Math.round(random(10,60));
  //console.log (ran);

 //agregar tamaño y posiciòn al t-rex
  trex.scale=0.5;
  trex.x=50;
 
}

function draw(){
 background(150);
 console.log(trex.y);
 //pone velocidad al piso
  ground.velocityX=-2;



  //hacemos el piso infinito
 if(ground.x<0){
    ground.x=ground.width                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              /2;
 }


 if(keyDown("space")&&trex.y>=100){
   trex.velocityY=-10;
 }
   trex.velocityY=trex.velocityY+0.8;


 //evitar que el trex se caiga
   trex.collide(invisbleground);

  spawnclouds();
  spawnObstacles();


  drawSprites();

 }

 function spawnclouds(){
   if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
     cloud.y=Math.round(random(10,60));

    cloud.scale=0.4;
    cloud.velocityX=-3;
    cloud.lifetime=200;
    //Ajustar la profundidad
    cloud.depht=trex.depht;
    trex.depht=trex.depht+=1;
   }
   }
   function spawnObstacles(){
     if(frameCount%60===0){
      var obstacle=createSprite(600,165,10,40);
      obstacle.velocityX=-6;
      // generar obstaculos aleatorios
      var rand=Math.round(random(1,3));
      switch(rand){
        case 1: obstacle.addImage(obstacle1);
        break;
        
        case 2: obstacle.addImage(obstacle2);
        break;

        case 3: obstacle.addImage(obstacle3);
        break;

        case 4: obstacle.addImage(obstacle4);
        break;

        case 5: obstacle.addImage(obstacle5);
        break;
        
        case 6: obstacle.addImage(obstacle6);
        break;

        default:break;
      }
      obstacle.scale=0.5;
      obstacle.lifetime=300;
     }

  }
     


  
  
