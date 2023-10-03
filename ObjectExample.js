const user = { 
    name: "Max",
    age: 34,
    greet() { // it may contain function, witout function keyword
        console.log("Hello " + this.name);
    }
};

console.log(user)
console.log(user.name)
user.greet()

// we can use a class keyboard to create the blueprint
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello "+ this.name);
    }
}

let anotheruser = new User("Ashis", 34);
anotheruser.greet();