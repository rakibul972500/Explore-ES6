//destructuring from object
const nayok={
    name:'hero',
    title:'alom',
    age:35,
    income:00898,
    cell:'0158907798'
}
const {name,age,income,cell:contact}=nayok;
console.log(name)
console.log(age)
console.log(income)
// console.log(cell)
console.log(contact)

console.log('----------------------------------------------------------')
// destructuring array using function

function pachisDinMainPaisaDoule(a,b){
    return [a*2, b*2];
}
const [akk, duii]=pachisDinMainPaisaDoule(20, 50);
console.log(akk,duii);
