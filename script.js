// class Person {
//     name;
//     surname;

//      constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
// }


// let person = new Person('John', 'Doe');
// console.log('Name: ' + person.name + ', Surname: ' + person.surname);



class Person {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class User extends Person {
    #password;

    constructor(name, surname, password) {
        super(name, surname) 
        this.#password = password;
    }


    getPassword() {
        return this.#password;
    }
}


let user = new User('John', 'Doe', '24134');
console.log('Name: ' + user.name + ', Surname: ' + user.surname);
console.log('Password: ' + user.getPassword());