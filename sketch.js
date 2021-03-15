var canvas;
var music;
var sur1, sur2, sur3, sur4
var box
var tope, bottome, righte, lefte
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    sur1 = createSprite(110,590,150,20)
    sur1.shapeColor="red"
    //create 4 different surfaces
    sur2 = createSprite(320,590,150,20)
    sur2.shapeColor="green"
    sur3 = createSprite(530,590,150,20)
    sur3.shapeColor="Yellow"
    sur4 = createSprite(730,590,150,20)
    sur4.shapeColor=" blue"
    box = createSprite(random(20,750),300,20,20)
    box.shapeColor="white"
    //tope=createSprite(400,0,800,5)
    //righte=createSprite(800,300,10,600)
    box.velocityX=4
    box.velocityY=1
}

function draw() {
    background("black");
    edges= createEdgeSprites()
   box.bounceOff(edges)
    
    
    if(isTouching(sur1,box)&&box.bounceOff(sur1)){
      box.shapeColor="red"
    }
    if(isTouching(sur2,box)&&box.bounceOff(sur2)){
      box.shapeColor="green"
    }
    if(isTouching(sur3,box)&&box.bounceOff(sur3)){
      box.shapeColor="yellow"
    }
    if(isTouching(sur4,box)&&box.bounceOff(sur4)){
      box.shapeColor="blue"
    }

    /*if(isTouching(box,tope)){
      box.velocityY=box.velocityY*-1
    }
    if(isTouching(box,righte)){
      box.velocityX=box.velocityX*-1
    }
  */
   
    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }