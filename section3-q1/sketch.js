// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let size = 50;
let count = 0;
let cycle = 100;//周期
let increment = 1;//円の鼓動を表現
function setup(){
  createCanvas(200, 200);
  count=0;
  cycle=100;//一つのサイクルの長さ　９９までいったら０に戻る
  
}

function draw(){
   background(160, 192, 255);
  count = (count + increment) % cycle;
  // countを0-100の間で増加させる
   if(count < cycle/2){
  　size = count + 50;
  }else{
  　size = (cycle - count)+50;
  }//countが周期の半分未満の時は円を大きくし、半分以上の時は円を小さくする
  　if(keyIsDown(SHIFT)){
    console.log('SHIFT 押してる');
    increment = 4 ;
   }else{
    increment = 1;
    }//キー入力があるときは鼓動の入力を大きくする
    ellipse(width / 2, height / 2, size);//円を描く
}
