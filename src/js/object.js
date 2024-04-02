// write a program which can change the properties of object

var obj = {
    name:'sachin'
}

var obj2 = obj; 
// method 1 freeze
// Object.freeze(obj)
// obj2.name = 'dhoni'



// method 2
Object.seal(obj)
obj.name = 'dhoni'
// obj2.name = 'gangully'
console.log(obj.name)