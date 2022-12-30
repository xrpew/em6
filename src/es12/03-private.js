class user {
    // constructor
    constructor(){
        c++
        console.log('Nuevo usuario', c)
    }
    greeting(){
        return 'Hello'
    }
}

//this
class user{
    constructor(name){
        this.name = name
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const xrpew2 = new user('Sergio0');
console.log(xrpew2.greeting())


//setters and getters

class user {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n
    }
}

const devxer = new user('Serrgio', 28)
console.log(devxer.uAge);
console.log(devxer.uAge = 20);
