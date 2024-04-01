// Problem:You are given an array of integers.
//  Write a function to find the maximum product of two integers in the array.

const arr = [2, 3, 4, 5, 6];

// bubble sort function
function sortArray(arr){
    const n = arr.length-1;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            if(arr[j] > arr[j+1]){

                //swap j with j+1
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

function maxProduct(arr){
    const a = sortArray(arr);
    const [largest,secondLargest] = a.slice(-2);
    console.log(`max product: ${largest*secondLargest} `)
}
maxProduct(arr)