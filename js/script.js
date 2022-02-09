getProducts().catch(error =>{
  console.log(error);
})
async function getProducts(){
  let response = await fetch('https://testapi.oglsoftware.co.uk/products');
  let data = await response.json();
  console.log(data);
  for (const key in data['data']){
    console.log(data['data'][key]['sku'])
  }
}

// await fetch('https://testapi.oglsoftware.co.uk/products')
//   .then(response => {
//     console.log(response)
//   })

// let test = data['data'][0]['sku'];
// console.log(test);