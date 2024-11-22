// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);//スコアを表示

  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);//配列の数値の合計を表示

  //平均値
  let average = sum / scores. length;//配列の数値の合計を要素数で割る
  console.log(average);

  //最大値
  let largest = 0;//最大値を表現する変数に0を代入
  for(let i =0; i < scores.length; i++){
    if(largest < scores[i]){
      largest = scores[i];
    }//配列の数値と最大値を比較して大きいほうの数値で最大値を更新
  }
 console.log(largest);

  //最小値
  let smallest = 100;//最小値を表現する変数に100を代入
  for(let i = 0; i < scores.length; i++){
    if (scores[i] < smallest){
      smallest = scores[i];
    }//配列の数値と最小値を比較して小さいほうの数値で最小値を更新
  }
  console.log(smallest);

  // 横線を引く（棒グラフの目盛り線）
  const n = 10;//描画領域を10分割
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
　//繰り返しを使って等間隔に目盛り線を引く

  // ここからが本番
  noStroke();
  for(let i = 0; i < scores.length; i++){
  const dx = width / scores.length;
  const h = height * scores [i] / 100;
  if (scores [i] === largest){
    fill(255, 0, 0);
  }else if (scores[i] === smallest){
  fill(0, 0, 255);
  }else {
    fill (122);
  }
  rect(i : dx + 2, height - h, dx - 4, h);
  fill(0);
  text(scores[i].toPrecision(3), i * dx, height - h);
 }
  
  stroke(0,255, 0);
  const ah = height  * average/100
  line(0, height - ah, width, height - ah)
}

