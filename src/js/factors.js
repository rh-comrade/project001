// find HCF of given number

const n1 = 36;
const n2 = 60;
var factors = 0
let i=1;
while (i<=n1){
    if(n1%i===0 && n2%i===0)
        factors = i
    i+=1
}
console.log(factors)