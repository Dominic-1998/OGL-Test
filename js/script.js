getProducts().catch(error =>{
  console.log(error);
});
async function getProducts(){
  let response = await fetch('https://testapi.oglsoftware.co.uk/products');
  let data = await response.json();
  let tbody = document.getElementById('tbody');
  for (const key in data['data']){
    let row = tbody.insertRow(key);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = data['data'][key]['sku'];
    cell2.innerHTML = data['data'][key]['name'];
    cell3.innerHTML = data['data'][key]['description'];
    cell4.innerHTML = data['data'][key]['stock-level'];
    cell5.innerHTML = data['data'][key]['price'];
    // console.log(data['data'][key]['sku']);
    // console.log(data['data'][key]['name']);
    // console.log(data['data'][key]['description']);
    // console.log(data['data'][key]['stock-level']);
    // console.log(data['data'][key]['price']);
    // console.log(data['data'][key]['image']);
  }
};

// await fetch('https://testapi.oglsoftware.co.uk/products')
//   .then(response => {
//     console.log(response)
//   })

// let test = data['data'][0]['sku'];
// console.log(test);