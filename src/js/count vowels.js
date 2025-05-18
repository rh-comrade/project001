// problem vowel count in given string
const vowelCount = (str)=>{
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const count = [...str.trim().toLocaleLowerCase()].reduce((cnt,value)=>{
        if(vowels.includes(value))
            return cnt+1;
        else
            return cnt;
    },0)
    console.log("vowel count: ",count)
}

const str = "Give it a try boy"
vowelCount(str)


const findOcc = (str)=>{
    const oc = str.trim().split('').reduce((obj,val)=>{
        obj[val] = (obj[val] || 0)+1;
        return obj;
    },{})
    
    // find key and value with max 
    const pair = Object.entries(oc).reduce((max,[key,value])=>{
        return value> max.value?{key,value}:max;
    },{key:null,value:0})
    
    console.log(pair);
    
}
findOcc(str)