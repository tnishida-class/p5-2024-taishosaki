// 最終課題を制作しよう
let snows = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  let snowNum = random(100,200);
  for (let i = 0; i< snowNum; i++){
    snows.push(new Snow());
  }
}

function draw(){
  background(30,30,55);
  for(let snow of snows){
    snow.updatePosition();
    snow.drawSnowFlake();
    
   }
  }


class Snow{
  x = random(0, width);
   y = random(-20,-1000);
   size = random(6,20);
   speed = random(1,2);
   
   

   updatePosition(){
    this.y +=this.speed;
    if(this.y > height + 30){
      this. y = random( -20, -300);
    }
   }

   drawSnowFlake(){
    noStroke();
    fill(255);
    circle(this.x, this.y, this.size);
   }
}
