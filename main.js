

const form = document.querySelector("#form");
const nameİnp = document.querySelector("#name");
const surnameİnp = document.querySelector("#surname");
const ageİnp = document.querySelector("#age");
const nationality = document.querySelector("#nationality");
const position = document.querySelector("#position");
const salary = document.querySelector("#salary");
const btnAdd = document.querySelector("#btnAdd");
const btnEdit = document.querySelector("#btnEdit");
const employeeList = document.querySelector("#employeeList");
let id = 1;
const listArr = [];

btnAdd.addEventListener("click", (e) => {
  if (
    nameİnp.value &&
    surnameİnp.value &&
    ageİnp.value &&
    nationality.value &&
    position.value &&
    salary.value
  ) {
    e.preventDefault;
    let person = {
      id: id,
      name: nameİnp.value,
      surname: surnameİnp.value,
      age: ageİnp.value,
      nationality: nationality.value,
      position: position.value,
      salary: salary.value,
    };
    id++;
    listArr.push(person);
    renderUI(listArr);
    console.log(listArr);
  } else {
    alert("Bos olan yerleri doldurun");
  }
});

function renderUI(items) {
  let innerhtml = "";
  for (let i = 0; i < items.length; i++) {
    innerhtml += `
    <tr>
        <td>${items[i].id}</td>
        <td>${items[i].name}</td>
        <td>${items[i].surname}</td>
        <td>${items[i].age}</td>
        <td>${items[i].nationality}</td>
        <td>${items[i].position}</td>
        <td>${items[i].expesalaryrience}</td>
        <td>
            <button class="btn btn-info btn-sm" onclick="editHander(${items[i].id})">Edit</button>
        </td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleteHander(${items[i].id})">Delete</button>
        </td>
    </tr>
    `;
  }
  employeeList.innerHTML = innerhtml;

  nameİnp.value = "";
  surnameİnp.value = "";
  ageİnp.value = "";
  nationality.value = "";
  position.value = "";
  salary.value = "";
}

function deleteHander(id) {
  let taarget = listArr.find((x) => x.id == id);
  let indexOfTarget = listArr.indexOf(taarget);
  listArr.splice(indexOfTarget, 1);
  renderUI(listArr);
  console.log(listArr);
}

let editArrinde = 0
function editHander(id){
    btnAdd.style.display = "none";
    btnEdit.style.display= "block";
    let taarget = listArr.find((x) => x.id == id);
    let indexOfTarget = listArr.indexOf(taarget);
    editArrinde = indexOfTarget
    nameİnp.value = `${taarget.name}`;
    surnameİnp.value = `${taarget.surname}`;
    ageİnp.value = `${taarget.age}`;
    nationality.value = `${taarget.nationality}`;
    position.value = `${taarget.position}`;
    salary.value = `${taarget.salary}`;
    console.log(editArrinde);
}

btnEdit.addEventListener('click',()=>{
    listArr[editArrinde].name =   nameİnp.value 
    listArr[editArrinde].surname =   surnameİnp.value
    listArr[editArrinde].age =   ageİnp.value 
    listArr[editArrinde].nationality =   nationality.value 
    listArr[editArrinde].position =   position.value 
    listArr[editArrinde].salary =   salary.value 
    editArrinde = 0
    btnAdd.style.display = "block";
    btnEdit.style.display= "none";
    renderUI(listArr);


})
