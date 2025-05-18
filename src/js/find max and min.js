// find maximun and minium from array
const arr=[33,322,48,2,53,88,29,844,8,6,5]

function minMax(arr){
   const  min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min,max]
}
const [min,max] = minMax(arr);
console.log(min,max);