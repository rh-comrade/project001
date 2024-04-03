// 1. to get the player object whose name is "Kohli"
// 2. to get the players whose runs grater than 18000
// 3. is All palyers Hit min one century - true/false
// 4. Add one extra property to all players "fif", value is half of the hun property value.

const players=[
    {
    "name":"Sachin",
    "runs":20000,
    "loc":"Mumbia",
    "hun":100
    },
    {
    "name":"Dhoni",
    "runs":18000,
    "loc":"Ranchi",
    "hun":40
    },
    {
    "name":"Dravid",
    "runs":10000,
    "loc":"Banglore",
    "hun":32
    },
   {
    "name":"Kohli",
    "runs":19000,
    "loc":"Delhi",
    "hun":76
    },
]

// 1. to get the player object whose name is "Kohli"
const findplayer = players.find(val=>{
    if(val.name === "Kohli")
        return true;
})
console.log(findplayer)

// 2. to get the players whose runs grater than 18000
const graterRuns = players.filter(val=>{
    if(val.runs>=18000)
        return true
})
console.log(graterRuns)

// 3. is All palyers Hit min one century - true/false
const century = players.some(val=>{
    if(val.hun ===100)
        return true
})
console.log(century)

// 4. Add one extra property to all players "fif", value is half of the hun property value.
const newporps = players.map((obj)=>{
    return{ ...obj,
        fif :(obj.hun)/2
    }
})
console.log(newporps)