var frequency = {};
var mk;
var mv = 0;

var array=[1,2,3,4,1,8,2,7,2,3,2,3,4,5,2]

// find frequency of elemets
array.map((value)=>{
    frequency[value] = (frequency[value] ||0)+1 
})

// find maximum
for(var key in frequency){
    var currentValue = frequency[key];
    if(currentValue > mv){
        mv = currentValue;
        mk = key; // this is what we required
    }
}

console.log(mk)
