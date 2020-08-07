// const person = {name: 'sajjat', age: 20, job: 'developer', address: 'comilla', friends: ['sajjat', 'rabbi']};
//         // const address = person.address;
// const { address, friends} = person

// console.log(address, friends)

// const frinds = ['sajjat', 'saleh', 'rabbi', 'fahad'];
// const [pehlaDost, ...bakiFrinds] = frinds;
// console.log(bakiFrinds)

const person = {name: 'sajjat', age: 20, job: 'developer', address: 'comilla', friends: ['sajjat', 'rabbi']};
const { age } = person;
console.log(age);



const complexObject = {
    info:{
        address: 'south Chortha',
        leader: 'the man of heuman'
    }
}

const { address} = complexObject.info;
console.log(address)