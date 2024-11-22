// テキスト「キーボード操作に反応する」
let x, y;
const g = 1;//重力
const jump = 20;//ジャンプ力
const ground = 20;
const size = 20;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vy=0
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y-15, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }//左に移動
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }//右に移動
  if(keyIsDown("A".charCodeAt(0))&&keyIsDown(LEFT_ARROW)){x -= 10;}
  if(keyIsDown("A".charCodeAt(0))&&keyIsDown(RIGHT_ARROW)){x += 10;}



  let gy = height - ground;
  line(0, gy, width, gy);//地面の線

  
  y +=vy;

  if(y < height - ground - size / 2){//地面より上、つまり空中にいる
    vy += g;//下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size/ 2;
   }
}

function keyPressed(){
  if(key == " ")//スペースキーを押したらジャンプ
  if(y >= height - ground - size / 2){//地面にいるときだけジャンプ＝空中ジャンプ不可
    vy = -jump;
  }
}


// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
