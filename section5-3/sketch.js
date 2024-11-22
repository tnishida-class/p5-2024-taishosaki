// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);
  

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
    console.log(daysInYear(i))

    let dow =dayOfWeek(2001,6,25)//日付けを設定
    console.log("2001年6月25日は"+dayOfWeekAsString(dow)+"曜日");
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);//うるう年の計算　4で割り切れるかつ100で割り切れない、または400で割り切れる
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366 : 365;//うるう年なら366、そうでなければ365
  
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;//うるう年なら2/29、そうでなければ2/28
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
} 

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function getOffset (year){//基準日の設定 1970年1月1日木曜日
 let offset = 0
 for(let i = 1970; i < year; i++)
  {
  offset += daysInYear(i);
 }
 return offset}


function dayOfWeek(y, m, d){//日数をカウントする
  // BLANK[2]
  let count = 0;
  for(let i=1; i<m;i++){
    count += daysInMonth(y,i);
  }
  count +=d
  let sum = count + getOffset(y)
  return(sum%7+3)%7//木曜日設定なので





}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
