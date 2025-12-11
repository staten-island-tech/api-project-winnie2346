async function geData() {
  try {
    //go get data
    const response = await fetch(`insertapilink${poke}`);
    //handles error
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //makes the response into json data we can use
      const data = await response.json();
      console.log(data);
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
getData("gengar");
