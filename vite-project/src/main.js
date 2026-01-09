import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const URLCAT = "https://api.disneyapi.dev/character";
async function getData(URLCAT) {
  try {
    const response = await fetch(URLCAT);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      document.getElementById("api-response").textContent = data.name;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URLCAT);
//https://disneyapi.dev/

// const nihao = "https://meowfacts.herokuapp.com/?lang=zho";
// async function get(nihao) {
//   try {
//     const response = await fetch(nihao);
//     if (response.status != 200) {
//       throw new Error(response);
//     } else {
//       const data = await response.json();
//       console.log(data);
//       document.getElementById("api-response2").textContent = data.name;
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// get(nihao);
