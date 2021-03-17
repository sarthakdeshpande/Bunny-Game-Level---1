var bunny,carrot,edges;

var brick,brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9;

function preload() {
}

function setup() {
  createCanvas(600,600);

  bunny = createSprite(300,550,20,20);

  carrot = createSprite(550,50,50,50);

  brick = createSprite(50,300,100,35);
  brick1 = createSprite(200,300,100,35);
  brick2 = createSprite(350,300,100,35);
  brick3 = createSprite(500,300,100,35);
  brick4 = createSprite(640,300,100,35);
  brick5 = createSprite(-25,375,100,35);
  brick6 = createSprite(125,375,100,35);
  brick7 = createSprite(275,375,100,35);
  brick8 = createSprite(425,375,100,35);
  brick9 = createSprite(575,375,100,35);


  edges = createEdgeSprites();
}

function draw() {
  background("lime");  

  bunny.shapeColor="white";

  brick.shapeColor="#8f4f4f";
  brick1.shapeColor="#8f4f4f";
  brick2.shapeColor="#8f4f4f";
  brick3.shapeColor="#8f4f4f";
  brick4.shapeColor="#8f4f4f";
  brick5.shapeColor="#8f4f4f";
  brick6.shapeColor="#8f4f4f";
  brick7.shapeColor="#8f4f4f";
  brick8.shapeColor="#8f4f4f";
  brick9.shapeColor="#8f4f4f";

  if(bunny.isTouching(brick)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick1)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick2)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=300;
    bunny.y=550;
  }

  if(bunny.isTouching(brick5)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick6)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick7)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=3300;
    bunny.y=550;
  }
  
  carrot.shapeColor="#d97642";

  if(keyDown("up")){
    bunny.y = bunny.y - 10;
  }
  
  if(keyDown("down")){
    bunny.y = bunny.y + 10;
  }

  if(keyDown("left")){
    bunny.x = bunny.x - 10;
  }
  
  if(keyDown("right")){
    bunny.x = bunny.x + 10;
  }

  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  
  drawSprites();
  if(bunny.isTouching(carrot)){
    text("YOU WIN",300,50);
    
  }
}
