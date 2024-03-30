// find maximun and minium from array
const arr=[33,322,48,2,53,88,29,844,8,6,5]
var min = arr[0];
var max = arr[0];

function minMax(arr){
    min = Math.min(...arr);
    max = Math.max(...arr);
}
minMax(arr);
console.log(min,max);