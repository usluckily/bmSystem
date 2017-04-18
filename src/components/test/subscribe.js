/**
 * Created by Administrator on 2017/4/14.
 */
let str = 'a=1&b=2&c=3';
let arr = str.split('&') , obj = {};
for(var i in arr){
  obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
}
console.log(obj)
