
// create an using []
const hobbies = ["playing", "reading", "writing"];
console.log(hobbies[2]);

// finding index of an object
const index = hobbies.findIndex((item) => { 
    return item === "reading"
})
console.log("Index of the object", index);

// map function
const modifiedHobbies = hobbies.map((item) => {
    return { "key": item + "_m"};
})
console.log(modifiedHobbies);

// de-structuring
const [firstName, lastName] = ["Ashis", "Laha"];
console.log("destructing it ", lastName);

const {name: userName /* alias*/, age} = {
    name: "Ashis",
    age: 34
} 
console.log(userName);

// spread operator ...
const listOne = [1, 2, 3, 4]
const listTwo = [10, 20, 30]
const finalList = [listOne, listTwo]
console.log("It will create a 2D array", finalList);
// but if we want to spread out them
const spreadOneDArr = [...listOne, ...listTwo];
console.log("It will create 1D array", spreadOneDArr);

// I can merge 2 objects using spread operator
var studentObject = {
    name: "Kulo",
    lastName: " Last",
    age: 20,
    fullName() {
        return this.name + this.lastName
    }
}

var extendStudentObject = {
    address: "India",
    ...studentObject
}
console.log(extendStudentObject.fullName());

// for loop
for (const hobby of hobbies) {
    console.log(hobby);
}