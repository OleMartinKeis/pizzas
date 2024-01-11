// Question 1. Declare and initialise three variables with appropriate names and values. One variable with a number value, one with a boolean value and one with a string value.

// Answer 1. 
var pet; 
pet = "dog"; 
var price; 
price = "21";
var onSale ="true"
console.log(pet)
console.log(price)
console.log(onSale)

// Question 2. Declare two variables. Assign your first name to one of the variables and your last name to the other. Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.

// Answer 2.
var firstName = "Ole"
var lastName = " Keiseraas"
var name = firstName + lastName;
console.log(name)


// Question 3. Check the type of the value "frog" with the typeof operator and assign the result to a variable. Console log the variable value with a label, e.g. “The type of frog is ___”.

// Answer 3.
var animal = "frog";
var typeOfAnimal = typeof animal;
console.log(typeOfAnimal)
//the type of frog is a string


// Question 4. Declare and initialise a variable called orderHasShipped with a boolean value. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "The order shipped". If not, console log the string value "The order did not ship".

// Answer 4.
var orderHasShipped = true
if (orderHasShipped === true) {
    console.log("Your order has been shipped")
} else {
    console.log("Your order has not been shipped")
}


// Question 5. Create a for loop that counts from 7 to 13. Console log the value of the counter variable inside the loop.

// Answer 5.
for (var i = 7; i <= 13; i++) {
    console.log(i);
}