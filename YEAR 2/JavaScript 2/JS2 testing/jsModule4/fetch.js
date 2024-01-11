// in this example we are going to create a new blog post on the server; 

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  // We can use our own options object and pass this into the fetch() function. 
  //This can make our code more concise and neater to work with.

  // An object that contains our options
const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  
  // Using the `fetchOptions` object we created aboves
  fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));