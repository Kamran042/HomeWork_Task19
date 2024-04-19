const submitBtn = document.querySelector("#btnAdd");
const form = document.querySelector("#form");
const nameİnp = document.querySelector("#name");
const surNameİnp = document.querySelector("#surname");
const ageİnp = document.querySelector("#age");
const positionİnp = document.querySelector("#position");
const nationİnp = document.querySelector("#nationality");
const salary = document.querySelector("#salary");
const btnEdit = document.querySelector("#btnEdit");
const employeeList = document.querySelector("#employeeList");
const searchInp = document.querySelector("#search");
const userNameInp = document.querySelector("#userName");
const passwordInp = document.querySelector("#password");
const emailInp = document.querySelector("#email");
const experienceInp = document.querySelector("#experience");
const filterInp = document.querySelector("#filter");
const employees = []
let static = []
let id = 0


class Employee{
    constructor(name,surname,age,userName,password,email,nation,position,salary,experience){
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
        this.userName = userName
        this.password = password
        this.email = email
        this.nation = nation
        this.position = position
        this.salary = salary
        this.experience = experience   
        id++
    }
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const {nameVal, surnameVal, ageVal, userNameVal, passwordVal, emailVal, nationVal,  positionVal, salaryVal,experienceVal} = getDataFromUser()
    if(nameVal && surnameVal && ageVal && positionVal && nationVal && salaryVal && userNameVal && passwordVal && emailVal && experienceVal ){
        createEmployee(nameVal, surnameVal, ageVal, userNameVal, passwordVal, emailVal, nationVal,  positionVal, salaryVal,experienceVal)
        resetForm()
    }else{
        alert('Inputlari doldurun')
    }
    console.log(employees);
   
})

const getDataFromUser = () => {
    let nameVal = nameİnp.value
    let surnameVal = surNameİnp.value
    let ageVal = ageİnp.value
    let userNameVal = userNameInp.value
    let passwordVal = passwordInp.value
    let emailVal = emailInp.value
    let nationVal = nationİnp.value
    let positionVal = positionİnp.value
    let salaryVal = salary.value
    let experienceVal = experienceInp.value
    return {nameVal,surnameVal,ageVal,userNameVal,passwordVal,emailVal,positionVal,nationVal,salaryVal,experienceVal}
}

function createEmployee(name,surname,age,userName,password,email,nation,position,salary,experience){
    const newEmployee = new Employee(name,surname,age,userName,password,email,nation,position,salary,experience)
    employees.push(newEmployee)
    renderUI(employees)
    static = [...employees]

}

function deleteEmployee(id){
    const target = employees.find(x => x.id == id)
    const indexOfTArget = employees.indexOf(target)
    employees.splice(indexOfTArget,1)
    renderUI(employees)
}

function searchEmployee(string){
    let items  = employees.filter(emp => emp.name.includes(string))
    renderUI(items)
}

searchInp.addEventListener('keyup', (e) => {
    if(e.target.value == ''){
        renderUI(employees)
    }else{
        searchEmployee(e.target.value)
    }
})

filterInp.addEventListener('change', (e) => {
    filterEmployee(e.target.value)
    e.target.value
})

function filterEmployee(type){
    switch(type){
        case 'low':
            employees.sort((a,b) => b.salary - a.salary)
            renderUI(employees)
            break;
        case 'high':
            employees.sort((a,b) => a.salary - b.salary)
            renderUI(employees)
            break;
        case 'default':
            renderUI(static)
            break;
    }
}

function editEmployee(id){

}

function  renderUI(list){
    let innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].surname}</td>
            <td>${list[i].age}</td>
            <td>${list[i].userName}</td>
            <td>${list[i].email}</td>
            <td>${list[i].nation}</td>
            <td>${list[i].position}</td>
            <td>${list[i].salary} AZN</td>
            <td>${list[i].experience}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="editEmployee(${list[i].id})">Edit</button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${list[i].id})">Delete</button>
            </td>
        </tr>
        `        
    }
  employeeList.innerHTML = innerHTML;
}

function resetForm() {
    nameİnp.value = "";
    surNameİnp.value = "";
    ageİnp.value = "";
    nationality.value = "";
    position.value = "";
    salary.value = "";
}



