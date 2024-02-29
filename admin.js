const tableContainer = document.querySelector("#table-container");

function viewShipment(){
  fetch("",{
    mode:"no-cors"
  })
  .then(res => res.json())
  console.log(res)
  .then(data => {
    console.log(data)

    data.map((shipment) =>{
      tableContainer.innerHTML += `    <tr>
      <td>${shipment.package-id}</td>
      <td>${shipment.tracking-no}</td>
      <td>${shipment.description}</td>
      <td>${shipment.status}</td>
      <td><a href="view.html">View Details</a></td>
      <td><a href="edit.html">Edit</a></td>
      <td><button id="deleteBtn">delete</button></td>


    </tr>

      `
      function deleteShipment(packageId){
      data.splice(packageId,1)
      } 
    })
  })
}