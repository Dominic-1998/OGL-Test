getProducts().catch(error =>{
  console.log(error);
});
async function getProducts(){
  let response = await fetch('https://testapi.oglsoftware.co.uk/products');
  let data = await response.json();
  for (const key in data['data']){
    let rowData = "<tr><td id='sku'>"+data['data'][key]['sku']+"</td><td id='name'>"+data['data'][key]['name']+"</td><td id='desc'>"+data['data'][key]['description']+"</td><td id='stock'>"+data['data'][key]['stock-level']+"</td><td id='price'>"+data['data'][key]['price']+"</td><td id='img'><img src='"+data['data'][key]['image']+"' height='100'/></td></tr>";
    document.getElementById('tbody').innerHTML += rowData;
  }
};

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// IGNORE BELOW CODE, I WAS JUST TESTING!

// await fetch('https://testapi.oglsoftware.co.uk/products')
//   .then(response => {
//     console.log(response)
//   })

// let test = data['data'][0]['sku'];
// console.log(test);
// let row = tbody.insertRow(key);
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);
// let cell4 = row.insertCell(3);
// let cell5 = row.insertCell(4);
// cell1.innerHTML = data['data'][key]['sku'];
// cell2.innerHTML = data['data'][key]['name'];
// cell3.innerHTML = data['data'][key]['description'];
// cell4.innerHTML = data['data'][key]['stock-level'];
// cell5.innerHTML = data['data'][key]['price'];
// console.log(data['data'][key]['sku']);
// console.log(data['data'][key]['name']);
// console.log(data['data'][key]['description']);
// console.log(data['data'][key]['stock-level']);
// console.log(data['data'][key]['price']);
// console.log(data['data'][key]['image']);