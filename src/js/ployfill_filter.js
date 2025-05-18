const arr = [10,20,30,40,50,50,70];

// polyfill_filter
Array.prototype.myFilter = function (callback){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this))
            newArray.push(this[i])
    }
    return newArray;
}

const filteredArray = arr.myFilter(v=>v>30)
console.log(filteredArray);

