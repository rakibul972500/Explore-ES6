// function declaration
function add(a,B){
    return a+B;
}

// function expression

const add2 = function(a,B){
    return a+B;
}


// arrow function

const add3=(a, b)=>  a+b;
const sum=add3(5,2);

const rem=(a,b)=> a%b;
const reminder= rem(10,12);

console.log(reminder);