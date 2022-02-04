import data from "https://testapi.oglsoftware.co.uk/products"
document.getElementById("Test").innerText = "Bonjour";

fetch('./json/people.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });