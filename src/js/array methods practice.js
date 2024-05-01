const arr = [10,20,30,40,50,60]

//1.1 length
/* - return length of array
    - its propterty
*/
console.log(arr.length)

//1.2 push  
/*
    - its method()
    - which takes zero to any number of args 
    - it add elements to last index
 */
arr.push(70,80,90)
console.log(arr)

// 1.3  pop:: removes element from last index and return last removed element
console.log(arr.pop())

// 1.4 unshift():: method -used for insert element at 1st index
arr.unshift(50,50,50)
console.log(arr)

// 1.5 shift(): shift() used to remove an element from first index.
arr.shift(50)
console.log(arr)

// 1.6 indexOf()
/*
    indexOf(-,-) , it gives an index of element in the array.
    It take two arguements .
    Using indexOf, we can check one element is there or not in the array. 
    If there it return that element index, 
    if not it returns -1.
*/
console.log(arr.indexOf(1000,5))

// 1.7 every
/*
every(-,-), which is used to check array elements based on condition, 
which return boolean value.
If all elements in the array,satisfied your condtion then returns true.
If minimum one element in the array, is not satisfied your condtion then returns false.
 */
const result = arr.every((ele,ind,oa)=>{
    return ele > 9;
})
console.log(result)

// some(-)
// some(-,-), which is used to check array elements based on condition, which return boolean value.
// If minimum one element in the array, is satisfied your condtion then returns true.
// If no element in the array, is not satisfied your condtion then returns false.

const res1 = arr.some((ele,ind,oa)=>{
    return ele <10;
})
console.log(res1)

// filter(-)

// filter(-,-), which is used to filter the elements in the array based on condition, which return array.
// Which take 2 arguments, one callback function and thisArg.
// The call back function called by passing three arguements, value ,index,original array.

// map
// map(-), if you want to perform same operation on each and every element in the array , then go with map.

// reduce(-,-)
// reduce(-,-), 
// if you want to convert multiple elements into a single variable.

const res2=arr.reduce(function(initVal,value){
initVal=initVal+value
return initVal
})
console.log(res2)