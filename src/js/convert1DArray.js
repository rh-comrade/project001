// Write a function to create nested array into single dimensional array  
// without using predefined array method(flat)

const arr= [[1,2],[3,4,[5,6,7]]]

function convertTo1D(array){
    return arr.join().split(",").map((ele)=>parseInt(ele))
}

const op = convertTo1D(arr);
console.log(op);