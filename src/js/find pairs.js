// Problem: Given an array of integers, write a function to find all pairs of elements in the array
//  that sum up to a specific target number.

const arr = [2, 4, 3, 5, 7, 8];
const n=10;
function findPairs(arr,num){
    var pairs=[]
    for(var i=0;i<arr.length;i++){
        for(j=0;j<arr.length-2;j++){

            if((arr[i] + arr[j])===num){
                pairs.push([arr[i],arr[j]])
            }
        }
    }
    console.log(pairs);
}

findPairs(arr,10);