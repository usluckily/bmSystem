/**
 * Created by Administrator on 2017/4/20.
 */
// function sleep(d){
//   for(var t = Date.now();Date.now() - t <= d;);
// }
// sleep(5000);
// console.log('xxxxx');

let x = 0 , y = false;
setTimeout(function(){
  y = true;
},100);
while(x < 10){
  let bl = y;
  if(bl == true)x = 1;
  console.log(bl);
}
console.log('yyy:'+x);



