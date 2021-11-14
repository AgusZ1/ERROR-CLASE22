var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  gameObject1 = createSprite(350,200,50,80);
  gameObject2 = createSprite(500,200,50,80);
  gameObject3 = createSprite(650,200,50,80);
  gameObject4 = createSprite(800,200,50,80);

  movingRect.shapeColor = "green"
  fixedRect.shapeColor ="green"
  movingRect.debug = true
  fixedRect.debug = true
  gameObject1.shapeColor ="green"
  gameObject2.shapeColor ="green"
  gameObject3.shapeColor ="green"
  gameObject4.shapeColor ="green"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.x = mouseX
  movingRect.y = mouseY
  
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  } 

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
    }
  else{ 
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

 
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    //object1.shapeColor = "red"
    //object2.shapeColor = "red"
    return true;
  }
  else{ 
    //object1.shapeColor = "green" 
    //object2.shapeColor = "green"
    return false;
  }
}






















