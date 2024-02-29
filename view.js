const urlParams = new URLSearchParams(window.location.search);
const packageId = urlParams.get('packageId');

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const inputs = document.querySelectorAll('input');
const selectPickup = document.getElementById('selectPickup')
const statusSelect = document.getElementById('statusSelect');
const arrayInputs = Array.from(inputs)

editBtn.addEventListener('click',()=>{
  arrayInputs.forEach(input =>{
    input.removeAttribute('readonly')
    input.style.backgroundColor = 'white';
    input.style.border = 'solid 2px black';
    input.style.outline = 'white';



  });
  selectPickup.removeAttribute('disabled');

 statusSelect.removeAttribute('disabled');
  saveBtn.style.display = 'inline-block';

  editBtn.style.display = 'none';
})


saveBtn.addEventListener('submit',(event)=>{
event.preventDefault()
arrayInputs.forEach(input =>{
input.setAttribute('readonly','readonly')
})
selectPickup.setAttribute('disabled',true);

statusSelect.setAttribute('disabled',true);
saveBtn.style.display = 'none';
editBtn.style.display = 'inline-block'
})




// will be in the edit.js//
// Retrieve data based on your chosen method:
// const urlParams = new URLSearchParams(window.location.search); // Example for URL parameters
// OR
// const dataToEdit = JSON.parse(localStorage.getItem("dataToEdit")); // Example for local storage

// Access input elements:
// const packageIdInput = document.querySelector('input[name="package-id"]');
// const trackingNoInput = document.querySelector('input[name="tracking-no"]');
// ... (select all other inputs using their names)

// Prefill values:
// packageIdInput.value = dataToEdit.packageId;
// trackingNoInput.value = dataToEdit.trackingNo;
// ... (set values for all other inputs using dataToEdit properties)
