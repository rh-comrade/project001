function Stack() {
    this.items = [];

    // stack works in LIFO Manner

    // insert : push()
    this.push = function (val) {
        this.items.push(val);
    }

    // delete : pop()
    this.pop = function () {
        console.log(this.items.pop());
    }

    // see: peek()
    this.peek = function (){
        console.log(this.items[this.items.length-1]);
    }

    // empty: isEmpty()
    this.isEmpty = function (){
        console.log(this.items.length===0)
    }

    // print stack
    this.print = function (){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }
}
// object for functional class stack
var st = new Stack();

// perform operations
st.isEmpty()

st.push(10)
st.push(20)
st.push(40)
st.peek()
st.pop()
st.push(45)
st.print()



