// write a program which can change the properties of object

var obj = {
    name:'sachin'
}

var obj2 = obj; 
// method 1 freeze
// if we freez the object then we can't do any operation on object e.g insert, update, and delete
// Object.freeze(obj)
// obj2.name = 'dhoni'



// method 2
// if we seal object then we can only able to update object. other operation is not allowed
// Object.seal(obj)
// obj.name = 'dhoni'
// // obj2.name = 'gangully'
// console.log(obj.name)

// prevent extension
// if we do prevent extension on object then we can only able to update and delete data other operation is disabled/not allowed

Object.preventExtensions(obj)
obj.name = "test001"
// obj.runs = 5000; //not allowed
console.log(obj)
