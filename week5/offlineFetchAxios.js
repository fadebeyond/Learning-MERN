//AXIOS VS FETCH

//Fetch

// function main() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1").then(
//     async (response) => {
//       const json = await response.json();
//       console.log(json.body.length);
//     }
//   );
// }

// //Better syntax fetch
// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const json = await response.json();
//   console.log(json.body.length);
// }
// main();

//Axios

const axios = require("axios");
async function main() {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(response.data.body.length);
}
//prettier way to use axios
async function main() {
  const response = await axios({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
    },
    data: {
      //this is basically body axios just defines this as data
      username: "harkirat",
    },
  });
  console.log(response.data.body.length);
}

main();
