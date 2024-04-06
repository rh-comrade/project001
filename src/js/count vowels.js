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
