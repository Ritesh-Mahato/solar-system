var sun;
var pizza,burger;
var t=250;
var pizza_image,planet_image,sun_image;
function preload(){
  pizza_image=loadImage("planet1 for whj c-21.jpg");
  burger_image=loadImage("planet2 for whj c-21.webp");
}

function setup() {
  createCanvas(1200,800);
 
  sun = createSprite(600,400,t,t);
  //sun.shapeColor="red";
  //sun.setCollider("circle",0,0,t,t);
  //sun.debug=true;

  pizza=createSprite(1050,400,65,65);
 // pizza.shapeColor="red";
  
  pizza.scale=0.1;
  //pizza.setCollider("circle",0,0,65,65);
  //pizza.debug=true;

  burger=createSprite(150,400,55,55);
 // burger.shapeColor="orange";
  
  //burger.setCollider("circle",0,0,55,55);
  //burger.debug=true;

}

function draw() {
  background(0);  
  if(World.frameCount%10==0){
    t+=10;
    sun = createSprite(600,400,t,t);
    sun.shapeColor="red";
    //sun.setCollider("circle",0,0,t,t);
  }

    if(sun.collide(burger)){
      burger.destroy();
    }
    if(sun.collide(pizza)){
      pizza.destroy();
    }
  
  
  drawSprites();
}
function isTouching(ob1,ob2){

  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2
      &&ob2.x-ob1.x<ob2.width/2+ob1.width/2
      &&ob2.y-ob1.y<ob2.height/2+ob1.height/2
      &&ob1.y-ob2.y<ob2.height/2+ob1.height/2){
      return true;
      }
      else{
        return false;
      }
    }