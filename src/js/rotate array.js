// problem: rotate given array based on key
// var arr1=[10,20,30,40] if key=1 then o/p:[20,30,40,10]

const arr=[1,2,3,4,5,6,7];

// this approch is good for only small size array
/*
let key=3;
var p = []
var n=[]
for(let i in arr){
    if(i<key-1)
        p.push(arr[i])
    else
        n.push(arr[i])
}
var arr = [...n,...p]
console.log(arr)
*/

function reverse(array, start, end) {
    // two pointer approch
    while (start < end) {
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}


function rotateArray(arr,key){
    const n = arr.length;
    key = key%n  // if key is greater than n
    // reverse array
    reverse(arr,0,n-1)
    // reverse upto key
    reverse(arr,0,key-1)
    // reverse from key to last
    reverse(arr,key,n-1)
}
rotateArray(arr,2);
console.log(arr)
