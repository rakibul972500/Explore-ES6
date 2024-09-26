const bottle={
    name:'RFL',
    price: 350,
    color:'aqua',
    isClean:true

}

console.log('object:', bottle)
const keys= Object.keys(bottle);
console.log( 'keys:', keys)
const values=Object.values(bottle);
console.log('values are:',values)

// delete isClean property

// delete bottle.isClean;
// another pachano way to delete
const {isClean, ...shortBottle} = bottle;
console.log(shortBottle);