class person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // making a method
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
// calling funcrtion
const Motlob=new person('Motlob Ali',40)
console.log(Motlob);
Motlob.sleep();

const bhubon=new person('Badam kaku', 55);
bhubon.sleep()