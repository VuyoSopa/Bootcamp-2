const container = document.querySelector(".container");
const signup = document.querySelector(".signup-link");
const signin = document.querySelector(".login-link");

loadData();


function register() {
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let users = [];
    let A_user = {};
    let details = "user";
   
    let message = document.getElementById("alert-message");
    message.innerHTML = "Ensure you input a value in all fields!"

    if (username && password) {

      users = JSON.parse(localStorage.getItem(details))

      A_user.username = username
      A_user.password = password

      users.push(A_user)
      localStorage.setItem(details, JSON.stringify(users))
      console.log(A_user)
      
      return details
    }
      //  console.log(confirmPassword.value)
       
     else if(password.value !== confirmPassword.value){
      return ("confirm password")
    } else if ((username.value == "" && password.value == "" && confirmPassword.value == "" )){
      return message
    }
      else {
      ("This form has been successfully submitted!")
      return(
        `This form has a username of ${username.value} and password of ${password.value}`
      );
  
  //  [sfiso, pass]
  // [{username:sfiso, pass:"123"}, {username:sfiso, pass:"123"}]
  // arrNames[0]

  /**
   let arrUsers = [];
   arrUsers = JSON.parse(localStorage.getItem("users"))

   
   
  let A_user = arrUsers[0];         {username:sfiso, pass:"123"}
A_user.username

   */
   };

}


function login() {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let userData = JSON.parse(localStorage.getItem('details'))
  console.log (userData)

  
  let arrUsers = JSON.parse(localStorage.getItem("user"))

  for (i=0; i < arrUsers.length; i++)
  {
    let auserFromLo = arrUsers[i];

    if(auserFromLo.username === username || auserFromLo.password === password)  
    {
      console.log("Üser found")
      // break;
    }


  }

  // if (username.value == "" || password.value == "") {
  //   alert("Ensure you input a value in both fields!");
  // } else {
  //   // perform operation with form input
  //   alert("This form has been successfully submitted!");
  //   console.log(
  //     `This form has a username of ${username.value},password of ${password.value} and ${confirmPassword.value}`
  //   );

  //   username.value = "";
  //   password.value = "";
  // }
};


function save() {
  
  let data = JSON.parse(localStorage.getItem('user_data')) || []
// let data = [];
  let textInput = document.getElementById("textInput")
  let dateInput = document.getElementById("dateInput")
  let textarea = document.getElementById("textarea")
  
 if(textInput && textarea){

  
  // data = JSON.parse(localStorage.getItem("user_data"));

  let new_cards = {

    textInput: textInput.value,
    date: dateInput.value,
    description: textarea.value
  }

  data.push(new_cards)
  localStorage.setItem("user_data", JSON.stringify(data));
  loadData();
 } else if (textInput === '' || textarea ==='' || dateInput === ''){
  return("Ensure you input a value")
}

  // console.log(data);
};

function edit(i) {
  
  let data = JSON.parse(localStorage.getItem('user_data')) || []
  console.log(data)

  let textInput = document.getElementById(`textInput_${i}`).value;
  let dateInput = document.getElementById(`dateInput_${i}`).value;
  let textarea = document.getElementById(`textarea_${i}`).value;

  // if(data){
  //   data.propertyToUpdate = 'new value';
  // }
  
    data[i].textInput = textInput;
    data[i].date = dateInput;
    data[i].description = textarea;
  
    data.push(new_cards)
  localStorage.setItem("user_data", JSON.stringify(data));
  console.log(data)

  let modal = new bootstrap.Modal(document.getElementById(`editmodal_${i}`));
  modal.hide();

  loadData()
  window.location.reload()
  

}


loadData()

let arr =[]
arr.splice


function deleteTask(e, index) {
  let data  = JSON.parse(localStorage.getItem('user_data'))
  data.splice(index, 1)
  localStorage.setItem("user_data", JSON.stringify(data));
  console.log(data)

  loadData()
}

function loadData(){
  // let card = document.getElementsByClassName("table")
  let list = JSON.parse(localStorage.getItem('user_data')) || []
    // console.log(list)
  let data = document.querySelector('.tbody')
   data.innerHTML= '';

 for (i = 0; i < list.length; i++){ 
  console.log(list)


  // li += document.createElement("li");
  data.innerHTML += `
  <div class="container">
  <tr>
  <td>${i + 1}</td>
  <td>${list[i].textInput}</td>
  <td>${list[i].description}</td>
  <td>${list[i].date}</td>
  <td> 
  
  
<div class="modal-dialog modal-dialog-scrollable">
  
</div>
  <span class="material-symbols-outlined" id="view">
visibility
</span>
<span class="material-symbols-outlined" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick= "edit()">
edit
</span>
<span class="material-symbols-outlined" id="delete" onclick="deleteTask()">
  delete
  </span>
</td>
  <td>

  </td>
  
</tr>
<div>
<div class="modal"
<div class="modal-body" id="editmodal">

<div class="forms">
<form
class="modal fade"
id="form"
tabindex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>

  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>
</div>

<div class="modal" id="editmodal">

<div class="modal-body">
  <p class="title">Title</p>
  <input type="text" class="form-control" id="textInput_${i}" placeholder="Title" value="${list[i].textInput}"/>
  <div id="msg"></div>
  <p class="descriptionTwo">Description</p>
  <textarea
    name=""
    class="form-control"
    id="textarea"
    cols="30"
    rows="5"
    placeholder="Description"
    id="textarea_${i}" value= "${list[i].description}"
  ></textarea>
  <br />
  <p class="dateTwo">Due Date</p>
  <input type="date" class="form-control" name="" id="dateInput_${i}" placeholder="" value="${list[i].dateInput}"/>
  <br />
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-primary">Save changes</button>
</div>

</div>
</div>
</form>
</div>
</div>
 
  ` 
}
// console.log(data)
// document.getElementById("list").innerHTML = details;

} 
// window.location.replace("list.html")

//delete list from array
// function deleteTask(){
// let result = itemsArray.indexOf( deleteTask.textContent);
// let newlist = itemsArray.splice(result, 1);
// //update the local storage
// localStorage.setItem('items', JSON.stringify(itemsArray))

// }
loadData()
function cancel() {
  console.log("Cancel button clicked!");

  let cancelButton = document.getElementById("cancelButton");

  cancelButton.addEventListener("click", cancel)
  window.location.replace("list.html")
}

function view(){

}

