// function addEmployee() {
//   // Formdakı məlumatları almaq
//   var name = $("#name").val();
//   var surname = $("#surname").val();
//   var age = $("#age").val();
//   var nationality = $("#nationality").val();
//   var position = $("#position").val();
//   var experience = $("#experience").val();

//   // Bütün sahələrin dolu olub-olmamasını yoxlamaq
//   if (name && surname && age && nationality && position) {
//     // Yeni bir sətir yaradıb cədvələ əlavə etmək
//     var newRow =
//       "<tr>" +
//       "<td>" +
//       name +
//       "</td>" +
//       "<td>" +
//       surname +
//       "</td>" +
//       "<td>" +
//       age +
//       "</td>" +
//       "<td>" +
//       nationality +
//       "</td>" +
//       "<td>" +
//       position +
//       "</td>" +
//       "<td>" +
//       experience +
//       "</td>" +
//       "<td><button class='btn btn-info btn-sm' onclick='editEmployee(this)'>Edit</button></td>" +
//       "<td><button class='btn btn-danger btn-sm' onclick='deleteEmployee(this)'>Delete</button></td>" +
//       "</tr>";

//     // Cədvələ yeni sətiri əlavə etmək
//     $("#employeeList").append(newRow);

//     // Formu təmizləmək
//     $("#registerForm")[0].reset();
//   } else {
//     // İstifadəçiyə bütün sahələri doldurmağı xatırlatmaq
//     alert("Bütün sahələri doldurun.");
//   }
// }

// function deleteEmployee(row) {
//   $(row).closest("tr").remove();
// }

// function editEmployee(row) {
//   // Seçilmiş sətrin bütün məlumatlarını alır
//   var cells = $(row).closest("tr").find("td");

//   // Məlumatları form sahələrinə doldurur
//   var name = cells.eq(0).text();
//   var surname = cells.eq(1).text();
//   var age = cells.eq(2).text();
//   var nationality = cells.eq(3).text();
//   var position = cells.eq(4).text();
//   var experience = cells.eq(5).text();

//   // Form sahələrinə məlumatları doldurmaq
//   $("#name").val(name);
//   $("#surname").val(surname);
//   $("#age").val(age);
//   $("#nationality").val(nationality);
//   $("#position").val(position);
//   $("#experience").val(experience);

//   // Seçilmiş sətri cədvəldən silmək
//   $(row).closest("tr").remove();
// }

const form = document.querySelector("#form");
const nameİnp = document.querySelector("#name");
const surnameİnp = document.querySelector("#surname");
const ageİnp = document.querySelector("#age");
const nationality = document.querySelector("#nationality");
const position = document.querySelector("#position");
const experience = document.querySelector("#experience");
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
    experience.value
  ) {
    e.preventDefault;
    let person = {
      id: id,
      name: nameİnp.value,
      surname: surnameİnp.value,
      age: ageİnp.value,
      nationality: nationality.value,
      position: position.value,
      experience: experience.value,
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
        <td>${items[i].experience}</td>
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
  experience.value = "";
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
    experience.value = `${taarget.experience}`;
    console.log(editArrinde);
}

btnEdit.addEventListener('click',()=>{
    listArr[editArrinde].name =   nameİnp.value 
    listArr[editArrinde].surname =   surnameİnp.value
    listArr[editArrinde].age =   ageİnp.value 
    listArr[editArrinde].nationality =   nationality.value 
    listArr[editArrinde].position =   position.value 
    listArr[editArrinde].experience =   experience.value 
    editArrinde = 0
    btnAdd.style.display = "block";
    btnEdit.style.display= "none";
    renderUI(listArr);


})
