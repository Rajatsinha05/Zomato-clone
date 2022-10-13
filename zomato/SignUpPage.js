var a = parseInt(239);
var b = parseInt(79);
var c = parseInt(95);
let d = parseInt(63);
let e = parseInt(61);
let f = parseInt(61);

let g = parseFloat(0.833);

function check() {
  var number = document.getElementById("input-number").value;
  var email = document.getElementById("input-email").value;
  var checkbox = document.getElementById("checkbox").checked;
  let password = document.getElementById("input-password").value;

  if (checkbox == true && number != "" && email != "") {
    var btn = document.querySelector(".signup-button");
    btn.style.backgroundColor = "rgb(" + [a, b, c].join(",") + ")";
  }

  if (checkbox == false || number == "" || email == "") {
    var btn = document.querySelector(".signup-button");
    
    btn.style.backgroundColor = "rgb(" + [d, e, f, g].join(",") + ")";
  }if(checkbox == false ){
    btn.style.backgroundColor = "whitesmoke";
  }
}

async function StoreTheData(event) {
  event.preventDefault();
  var obj = {
    number: document.getElementById("input-number").value,
    email: document.getElementById("input-email").value,
    checkbox: document.getElementById("checkbox").checked,
    password : document.getElementById("input-password").value,
  };
  if (obj.password === "" || obj.email === "") {
    alert("Name and email required");
    return;
  }
  try {
    let res = await fetch("https://zomatoclone-api.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  deletetheintput();
}
const deletetheintput = () =>{
    document.getElementById("input-number").value = "";
    document.getElementById("input-email").value = "";
    checkbox = document.getElementById("checkbox").checked = false;
    if (checkbox == false || number == "" || email == "") {
        var btn = document.querySelector(".signup-button");
        
        btn.style.backgroundColor = "rgb(" + [d, e, f, g].join(",") + ")";
    }
}



// modal 

const signup_id = document.querySelector(".signup-id");
const trigger = document.getElementById("trigger");

const closeButton = document.querySelector(".close-button");

function toggleModal() {
  signup_id.classList.toggle("show-modal");
}

function windowOnClick(event) {
  
  if (event.target === signup_id) {
    console.log(3);
    toggleModal();
  }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
