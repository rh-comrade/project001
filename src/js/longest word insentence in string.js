// Write a function to find the longest word in a sentence using reduce method.

const str="Write a function to find the longest word in a sentence using reduce method."
const findLongestWord=(sentence)=>{
    const arr = sentence.split(" ")
    const longWord = arr.reduce((max,ele)=>{
        return  ele.length>max.length?ele:max;  
    })
    console.log(longWord.length)
}
findLongestWord(str)