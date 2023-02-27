fetch("http://localhost:3003/api", {
  method: "GET",
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    document.getElementById("here").innerHTML = JSON.stringify(result)
  })