function findInfo(link) {
  return fetch(link)
    .then((response) => response.json())
    .then((data) => {
    //   console.log("Received data: ", data);
      return data;
    })

    .catch((error) => {
      console.error("Error received", error);
    });
}

let firstResult = findInfo("https://jsonplaceholder.typicode.com/todos/1");

let secondResult = findInfo("https://jsonplaceholder.typicode.com/users/1");

let allResult = Promise.all([firstResult, secondResult]);

allResult.then(([a, b]) =>
  console.log(`Result of PromiseAll are ${a.title} and ${b.username}`),
);

Promise.race([firstResult, secondResult]).then(y => console.log(`Fulfilled request - ${y.id}`));
