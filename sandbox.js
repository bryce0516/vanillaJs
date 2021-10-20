// const para = document.querySelector("body > h1");
// let index = 0;
// const get = (callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState);

//     if (request.readyState === 4 && request.status == 200) {
//       callback(undefined, request.response);
//     } else if (request.readyState === 4) {
//       callback("could not fetch data", undefined);
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
//   request.send();
//   index++;
// };

// get((err, data) => {
//   console.log("this is callback", err, data);
// });

const fetchFunction = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.response);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("cannot fetch data");
      }
    });

    request.open("GET", url);
    request.send();
  });
};

fetchFunction("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("this is promise1 resolved", data);
    return fetchFunction("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log("this is promise2 resolved", data);
  })
  .catch((err) => console.log("error has occured : ", err));

// console.log("thsi is result", result);
// console.log(para);
// console.log(1);
// console.log(1);
// setTimeout(() => {
//   console.log("this is callback");
// }, 500);
// console.log(1);
// console.log(1);
// console.log(1);

// const para2 = document.querySelectorAll("p");

// const title = document.getElementById("page-title");
// console.log(para2);

// console.log("this is title", title, typeof title);

// const error = document.getElementsByClassName("error");

// console.log(error, typeof error);

// for (const [key, value] of Object.entries(error)) {
//   console.log(key, value);
// }

// const tag = document.getElementsByTagName("p");

// console.log("tag", tag);

// const target = document.querySelector("p");

// target.innerText = "hey boy";

// const people = ["mario", "yoshi", "jian", "boram"];

// const contents = document.querySelector(".content");

// people.forEach((element) => {
//   contents.innerHTML += `<p>${element}</p>`;
// });
