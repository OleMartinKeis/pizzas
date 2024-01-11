
//Practical example of Promise-all()

async function doFetch(url) {
    try {
      const data = await fetch(url);
      const json = await data.json();
      
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function main() {
    const data = await Promise.all([
      doFetch('https://jsonplaceholder.typicode.com/todos/1'),
      doFetch('https://jsonplaceholder.typicode.com/todos/2'),
      doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);
  }
  
  main();