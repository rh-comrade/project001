const arr = [10,20,30,40,50,50,70];

// build own polyfill find method
/*
    method  return              accept  
    find    number/undefind     callback(value,index,originalArray)
 */
Array.prototype.myFind = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this))
            return this[i]
    }
    return undefined;
}

console.log(arr.myFind(v=>v===70));
