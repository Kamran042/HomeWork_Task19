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

const nameİnp = document.querySelector("#name");
const surnameİnp = document.querySelector("#surname");
const ageİnp = document.querySelector("#age");
const nationality = document.querySelector("#nationality");
const position = document.querySelector("#position");
const experience = document.querySelector("#experience");
const btnAdd = document.querySelector("#btnAdd");
const employeeList = document.querySelector("#employeeList");
let counter = 1
const listArr = []

btnAdd.addEventListener("click", () => {
  if (nameİnp.value && surnameİnp.value && ageİnp.value && nationality.value && position.value && experience.value){
    let person = {
        id: counter ,
        name: nameİnp.value,
        surname: surnameİnp.value,
        age: ageİnp.value,
        nationality: nationality.value,
        position: position.value,
        experience: experience.value
    }
    listArr.push(person)

    for (let i = 0; i < listArr.length; i++) {
        employeeList.innerHTML+=`
        <tr>
            <td>${listArr[i].id}</td>
            <td>${listArr[i].name}</td>
            <td>${listArr[i].surname}</td>
            <td>${listArr[i].age}</td>
            <td>${listArr[i].nationality}</td>
            <td>${listArr[i].position}</td>
            <td>${listArr[i].experience}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="${deleteHander(listArr[i].id)}">Edit</button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm"onclick="deleteEmployee(this)">Delete</button>
            </td>
        </tr>
        `
    }
    
    

    counter++

    nameİnp.value = ''
    surnameİnp.value = ''
    ageİnp.value = ''
    nationality.value = '' 
    position.value = '' 
    experience.value = ''

    
    console.log(listArr);
  } else {
    alert('Bos olan yerleri doldurun')
  }
});

function deleteHander(id){
    let taarget  = listArr.find(x => x.id == id)
    let indexOfTarget = listArr.indexOf(taarget)
    // listArr.splice(indexOfTarget, 1)

}