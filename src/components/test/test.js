/**
 * Created by Administrator on 2017/4/12.
 */
// var f = (
//   function f(){
//     return "1";
//   },
//     function g(){
//       return 2;
//     }
// )();

var x = [typeof x, typeof y][1]
console.log(typeof x)

var f = (function a(){ return 1 },function b(){ return {} })();

console.log(typeof f)

console.log(typeof function f(){})


{
  var x = (function(foo){
    console.log(foo.foo.bar);
    return typeof foo.bar;
  })({ foo: { bar: 1 } })

}
