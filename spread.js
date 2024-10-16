var numbers=[1, 3, 5];
var numbersNew=[...numbers, 8, 9, 0];
// console.log(numbersNew);

// spread operator for object

const myObj1={
    x:4,
    y:5
}
const myObj2={
    a:6,
    b:7
}

console.log({
    ...myObj1,
    ...myObj2
})
