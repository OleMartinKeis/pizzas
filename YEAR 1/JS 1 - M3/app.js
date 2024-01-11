const menuIsOpen = false;

if(menuIsOpen) {
    console.log("truthy");
} else {
    console.log("falsy");
}

// Module 2

function greet(name = "John") {
    return `Hello ${name}!`;
}

function createMessage(type = "class", message = "value") {
    return `<div class = "${type}">${message}<div>`;
}

createMessage()



async function getFact() {

    try{
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[8].text);
    }

    catch(error){
        console.log(error);
    }



   
}
getFact();

// Module 3
const greetTwo = (name = "pedro") => {
    console.log(`Hello ${name}!`);
}

greetTwo();

  
const add = (a, b) => {
    return a + b; 
   
}  

console.log(add(4, 9));


async function getCatFacts() {
    try {
      const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
      const results = await response.json();
      console.log(results.length);
    } catch (error) {
      console.log(error);
    }
  }


  fetch()