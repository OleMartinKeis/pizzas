

var greeting = {
    fullName: "Ole Martin",
    age: 23,
    message: "Hello I am ",
    greet: function(message, fullName, age) {
        console.log(`${message} ${fullName}, ${age}!!!`)
    }
};

greeting.greet(this.message, this.fullName, this.age);
