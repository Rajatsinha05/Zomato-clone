
document.querySelector("#login-button").addEventListener("click",fetchingTheData);

async function fetchingTheData(event){
    event.preventDefault();

    let obj = {
        loginEmail : document.querySelector(".input-number").value,
        loginPassword : document.querySelector(".input-password").value
    };
    if(obj.loginEmail == "" && obj.loginPassword == ""){
        alert("Email and password required");
        return;
    }

    try{
        const res = await fetch("https://zomatoclone-api.herokuapp.com/user");
        let profileData = await res.json();
        console.log(1);
        console.log(profileData);
        let flag = false;
        for(let user of profileData){
            console.log(user.email);
            if(user.email == obj.loginEmail && user.password == obj.loginPassword){
                console.log(true);
                flag = true;
                break;
            }
        }
        if(flag == true){
            alert("Login Successful");
        }else{
            alert("Invalid Users");
            return;
        }
        
        
    }catch(e){
        console.log(e);
    }
    logindelval();
}
function logindelval(){
    loginEmail = document.querySelector(".input-number").value = "",
    loginPassword = document.querySelector(".input-password").value = ""
}














var a = parseInt(0);
var b = parseInt(0);
var c = parseInt(0)
var d = parseFloat(0.7);

const login_id = document.querySelector(".login-id");
const trigger_login = document.getElementById("trigger-login");

const closeButton = document.querySelector(".close-login-button");


function toggleModalLogin() {
    login_id.classList.toggle("show-modal-login");

}

function windowOnClick(event) {
    
    if (event.target === login_id) {
        console.log(3);
        toggleModalLogin();
        
    }
}
trigger_login.addEventListener("click", toggleModalLogin);
// closeButton.addEventListener("click", toggleModalLogin);
window.addEventListener("click", windowOnClick);
closeButton.addEventListener("click", toggleModalLogin);