// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
  if(i%2 == 1){
    fill(blue)
  }
  else{
    fill(2000)
  
  }}
fill(blue);
  rect(0,0,width,d)//0列目の塗りつぶし

  
fill(blue)
  let size = d * 5;//letを定義
  rect(0, 0, size, size);//左上の長方形

  fill(255);
  rect(size*0.4, 0, d, size)
  rect(0, size*0.4, size, d)
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
