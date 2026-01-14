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

const URL = "https://api.disneyapi.dev/character";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);


const apiResponse = document.getElementById("api-response");
const putin = async () => {
  apiResponse.innerHTML = "";
    const item = await getData(URL);//wait for api named itme
    const dataa = item.data;//api array is called data
   dataa.forEach((items)=>{
    const card =
    ` <div class="stuff border-2 m-auto mb-3">
    <div class="title  flex justify-center"> ${items.name}</div>
<div class="picture  flex justify-center"> <img src="${items.imageUrl}"/></div>
<div class="films  flex justify-center"> <p>${items.films}</p></div>
</div>
`;
apiResponse.insertAdjacentHTML("beforeend", card);
   }) ;
};
putin();
const all = document.getElementById("all");
all.addEventListener("click", () => {
  
  putin();
});

const grr = document.getElementById("Ariel");

grr.addEventListener("click", async () => {
  const aaaaahh = `https://api.disneyapi.dev/character/189`;
  const item = await getData(aaaaahh);
  
  apiResponse.innerHTML = "";

  const card = `
    <div class="stuff border-2 m-auto mb-3">
      <div class="title flex justify-center">${item.data.name}</div>
      <div class="picture flex justify-center">
        <img src="${item.data.imageUrl}" />
      </div>
      <div class="films flex justify-center">
        <p>${item.data.films}</p>
      </div>
    </div>
  `;

  apiResponse.insertAdjacentHTML("beforeend", card);
});

