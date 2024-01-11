

function receivingFunction() {
    console.log("The argument is a " + typeof callbackFunction);
}

function callbackFunction() {
    console.log("I am a callbakc function");
} 

receivingFunction(callbackFunction)

// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(item) {
    console.log(item);
});

//for (let i = 0; i < prizes.length; i++) {
 //   console.log(`Prize ${i + 1}: ${prizes[i]}`);
//}