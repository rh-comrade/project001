const arr = [10,20,30,40,50,50,70];

Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}
const arr3= arr.myMap((v)=> v*2)
console.log(arr3);
