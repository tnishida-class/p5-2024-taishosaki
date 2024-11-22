//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];  
  }
  

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){//全てのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    
  }
}

function mouseDragged(){// ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){//mag(x,y)はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(1,150), vx: dx, vy: dy };
    balls.push(b);
  }

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
