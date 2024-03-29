// check array are eual or not by value
var arr1=[10,20,30,40]
var arr2=[10,20,30,40]
var flag = true;

function isEqual(arr1,arr2){

    if(arr1.length != arr2.length){

        flag=false;

    }else{

        for(let i in arr1){

            if(!(arr1[i] == arr2[i])){

                flag=false;

            }

        }

    }

}
 

isEqual(arr1,arr2);

if(flag)

    console.log("array is equal")

else

    console.log("array are not equal")