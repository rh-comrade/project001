// find HCF of given number

const n1 = 36;
const n2 = 60;
var factors = 0
let i=1;
let min = (n1<n2)?n1:n2;
// while (i<=min){
//     if(n1%i===0 && n2%i===0)
//         factors = i
//     i+=1
// }

//  using for loop
for(let i=1;i<=n1;i++){
    if(n1%i===0 && n2%i===0)
        factors = i;
}

// lowest factor
//  using for loop
for(let i=1;i<=n1;i++){
    if(n1%i===0 && n2%i===0)
        factors = i;
}
console.log(factors)