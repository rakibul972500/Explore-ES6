
// more arrow 

const getSalary=(person)=> person.salary  ;
const jobHolder={name:'Hero',age:35, salary:3000}  ;
const salary=getSalary(jobHolder);
console.log(salary);

// another way to use arrow function

const getThird=numbers=> numbers[2];
const third= getThird([3, 5 ,7, 2]);
console.log(third);

// another way to uae arrow
// if there is one parameter we can use it with or without bracket
const getPI=()=>Math.PI
console.log(getPI());



// large arrow
const doMath=(x, y, z)=>{
    const sum=x+y+z;
    const mult=x*y*z;
    const result=sum+mult;
    return result;
}
const res=doMath(3,6,2);
console.log(res);



