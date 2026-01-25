async function findInfo(link) {
   try{ 
    const response = await fetch(link);
    const data = await response.json();
    return data;
    }
    catch (error){ console.error("Error received", error)}}
   



let firstResult = findInfo("https://jsonplaceholder.typicode.com/todos/1");

let secondResult = findInfo("https://jsonplaceholder.typicode.com/users/1");

let allResult = Promise.all([firstResult, secondResult]);

allResult.then(([a, b]) =>
  console.log(`Result of PromiseAll are ${a.title} and ${b.username}`),
);

Promise.race([firstResult, secondResult]).then(y => console.log(`Fulfilled request - ${y.id}`));
