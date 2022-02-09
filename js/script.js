getImages()
async function getImages(){
  let response = await fetch('https://testapi.oglsoftware.co.uk/products');
  let data = await response.json();
  console.log(data);
  for(var i = 0; i < data['data'].length; i++){
    console.log(data['data'][i]['sku']);
    console.log("test")
  };
}

// await fetch('https://testapi.oglsoftware.co.uk/products')
//   .then(response => {
//     console.log(response)
//   })

// let test = data['data'][0]['sku'];
// console.log(test);