// map --> loops through each element of array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array .

// const numbers=[3, 6, 7, 4, 9, 5];
// function paisaDouble(num){
//     return num*2;
// }

// const result=numbers.map(paisaDouble);
// console.log(result);

// more sophisticated way of map

// const numbers=[4, 6, 9, 3, 5]
// const doubled= numbers.map(num=>num*2) ;
// const fiveBonus=numbers.map(num=>num+5);
// console.log(doubled)
// console.log(fiveBonus);


const friends=['Python','kal Nagin', 'Russel er Boinpar', 'Russels viper']
const length= friends.map(snake=>snake.length)
console.log( 'length of every snake:', length);