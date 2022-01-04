function preload(){
  BirdImg=loadImage("Bird.png")
  Tree1=loadImage("TreeImage.png")
  Tree2=loadImage("TreeImage2.png")
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  Bird1 = new Bird()


}

function draw() {
  background(0);
  Bird1.body.velocityX=11 
  camera.position.x=Bird1.body.x+600
  Bird1.gravity();
  if(keyDown("space")){
    Bird1.fly()
  }
  if(frameCount%100===0){
    Obstacle1 = new Obstacle(Bird1.body.x+2000)
  }

  drawSprites();
}
