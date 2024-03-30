var frequency = {};

var array=[1,2,3,4,1,8,2,7,2,3,2,3,4,5,2]

// find frequency of elemets
array.map((value)=>{
    frequency[value] = (frequency[value] ||0)+1 
})

// find maximum
mx = Math.max(...Object.values(frequency))
console.log(mx);
