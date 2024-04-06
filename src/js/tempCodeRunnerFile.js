
const vowelCount = (str)=>{
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const count = [...str.replace(" ","").trim().toLocaleLowerCase()].reduce((cnt,value)=>{
        if(vowels.includes(value))
            return cnt++;
        else
            return cnt;
    },0)
    console.log(count)
}

const str = "Give it a try boy"
vowelCount(str)
