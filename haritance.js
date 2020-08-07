class Parent{
    constructor(){
        this.fatherName = 'sajjat';
    }
}
class Child extends Parent{  //this is is Haritance
    constructor(name){
        super();
        this.name = name;
    }
    // getFullName(){
    //     return this.name + ' ' + this.fatherName
    // }
}

const baby = new Child('andor');
const baby2 = new Child('sajjat');
// console.log(baby.getFullName());
console.log(baby2, baby);