// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,51,153);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = width/2 + cos(theta) * width/4;
    let y = height/2 + sin(theta) * height/4;//キャンバスの中心から円を12等分し、30度ずつずらして配置
    fill(255,204,0)//色
    star(x,y,width/20);//星を描く関数を呼び出す
  }
}

function star(cx, cy, r){
  beginShape();//点つなぎを始める
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;//キャンバスの中心から円を５等分し、360*2/5ずつずらして点をうつ
    vertex(x,y);//次につなぐ点を一つ増やす
  }
  endShape(CLOSE);//点つなぎを終わる
}


  


// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
