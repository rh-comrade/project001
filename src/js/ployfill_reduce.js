const arr = [10,20,30,40,50,50,70];

// polyfill reduce method
/*
    reudce  return:any   params:callback with 4 params(ac,val,ind,oa)
 */
Array.prototype.reduce = null;

Array.prototype.myReduce = function (callback,initialValue=null){
    let accumulator = initialValue===null?this[0]:initialValue;
    let startingIndex = initialValue===null?1:0;
    for(let i=startingIndex;i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this);
    }
    return accumulator
}

console.log(arr.myReduce((ac,val)=>ac+val));