import {signUP,logIn} from "../components/credentials.js";
import {footer} from "../components/footer.js";

document.getElementById("footer").innerHTML=footer();

        document.getElementById("UserSIgnUpLogInModal").innerHTML=signUP()+logIn();


        document.getElementById("logInNavButton").addEventListener("click",()=>{
                document.getElementById("signUp").style.display="none";
                document.querySelector("body").style.overflow="hidden";
                if(document.getElementById("UserSIgnUpLogInModal").style.display=="none"){
                    document.getElementById("UserSIgnUpLogInModal").style.display="block"
                    document.getElementById("logIn").style.display="block";
                }
                else{
                    
                    document.getElementById("UserSIgnUpLogInModal").style.display="none"
                    document.getElementById("logIn").style.display="none";
                }
                
        })

        document.getElementById("signUpNavButton").addEventListener("click",()=>{
                document.getElementById("logIn").style.display="none";
                document.querySelector("body").style.overflow="hidden";
                if(document.getElementById("UserSIgnUpLogInModal").style.display=="none"){
                    document.getElementById("UserSIgnUpLogInModal").style.display="block"
                    document.getElementById("signUp").style.display="block";
                }
                else{
                    
                    document.getElementById("UserSIgnUpLogInModal").style.display="none"
                    document.getElementById("signUp").style.display="none";
                }
                
        })

            
    document.getElementById("signUpCloseBttn").addEventListener("click",()=>{
        document.getElementById("UserSIgnUpLogInModal").style.display="none"
        document.getElementById("logIn").style.display="none"
        document.querySelector("body").style.overflow="auto";
        
    })
    document.getElementById("logInCloseBttn").addEventListener("click",()=>{
        document.querySelector("body").style.overflow="auto";
        document.getElementById("UserSIgnUpLogInModal").style.display="none"
        document.getElementById("signUp").style.display="none";

    })

    document.getElementById("logInLink").addEventListener("click",()=>{
        document.getElementById("signUp").style.display="none";
        document.getElementById("logIn").style.display="block";
    })
    document.getElementById("signUpLink").addEventListener("click",()=>{
        document.getElementById("signUp").style.display="block";
        document.getElementById("logIn").style.display="none";
    })

    document.getElementById("submitSignUp").addEventListener("submit",StoreTheData)
  document.querySelector("#submitLogIn").addEventListener("submit",fetchingTheData);

  async function StoreTheData(event) {
    event.preventDefault();
    var obj = {
      name: document.getElementById("signUpName").value,
      email: document.getElementById("signUpEmail").value,
      password : document.getElementById("signUpPassword").value
    };
    try {
      let res = await fetch("https://easy-ruby-colt-boot.cyclic.app/user", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
    //   console.log(data);
    } catch (e) {
      console.log(e);
    }
    
        let alert = document.getElementById("alert");
        // cartProducts.push(ele);
        // localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
        alert.style.color="white";
        alert.style.backgroundColor="green";
        alert.style.border="1px solid green";
        alert.innerHTML=`SucessFully Registered <i class="fa-sharp fa-solid fa-circle-check"></i>`;
        
        alert.style.display="block";
        setTimeout(() => {
            alert.style.display="none";
            
        }, 1500);
        deletetheintput();
    }
    const deletetheintput = () =>{
      document.getElementById("signUpName").value = "";
      document.getElementById("signUpEmail").value = "";
      document.getElementById("signUpPassword").value=""
      document.getElementById("signUp").style.display="none";
        document.getElementById("logIn").style.display="block";
      
    }
    
    
    
    
    async function fetchingTheData(event){
    event.preventDefault();
    
    let obj = {
        loginEmail : document.querySelector("#emailLogin").value,
        loginPassword : document.querySelector("#logInPassword").value
    };
    if(obj.loginEmail == "" && obj.loginPassword == ""){
        alert("Email and password required");
        return;
    }
    
    try{
        const res = await fetch("https://easy-ruby-colt-boot.cyclic.app/user");
        let profileData = await res.json();
        // console.log(1);
        // console.log(profileData);
        let flag = false;
        let name = "";
        for(let user of profileData){
            // console.log(user.email);
            if(user.email == obj.loginEmail && user.password == obj.loginPassword){
                console.log(true);
                name=user.name
                localStorage.setItem("successUser",JSON.stringify(user));
                flag = true;
                break;
            }
        }
        let alert = document.getElementById("alert");
        // alert.style.display="block";
        if(flag == true){
            alert.style.color="white";
            alert.style.backgroundColor="green";
            alert.style.border="1px solid green";
            alert.innerHTML=` Welcome ${name}  <i class="fa-sharp fa-solid fa-circle-check"></i>`;
            document.getElementById("UserSIgnUpLogInModal").style.display="none"
            document.querySelector("body").style.overflow="auto"
            showLoginNavbar();
            alert.style.display="block";
            
    
        }else{
            alert.style.color="white";
            alert.style.backgroundColor="rgb(224, 53, 70)";
            alert.style.border="1px solid rgb(224, 53, 70)";
            alert.innerHTML=`Wrong Credentials <i class="fa-solid fa-xmark"></i>`;
            alert.style.display="block";
        }
        setTimeout(() => {
            alert.style.display="none";
            
        }, 1500);
        deletetheintput();
        
    }catch(e){
        console.log(e);
    }
    
    document.getElementById("emailLogin").value = "",
    document.querySelector("#logInPassword").value = ""
    
    }
    
    
   
function showLoginNavbar(){
    let login = JSON.parse(localStorage.getItem("successUser"));
    if(login){
        let arr = document.getElementById("responsiveNavbarHome").children;
        arr[arr.length-1].style.display="none"
        arr[arr.length-2].style.display="none"
        // arr[arr.length-1].remove()
        document.getElementById("responsiveNavbarHome").innerHTML+= `<li id="loginLi"><div id="navbarSectionSecond">
        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" id="userImage"alt="">
        <p id="userNameNav">
            User
        </p>
        <i class="fa-solid fa-angle-down" id="dropUserButton"></i>
        <div id="dropUser">
            <p id="profileSection">Profile</p>
            <p id="logOutBttn">LogOut</p>
        </div>
       
    </div></li>`

    document.getElementById("dropUserButton").addEventListener("click",userDropDown);
    document.getElementById("userImage").addEventListener("click",userDropDown);
    document.getElementById("userNameNav").addEventListener("click",userDropDown);
    setTimeout(() => {
        
        document.querySelector("#profileSection").addEventListener("click",()=>{
            window.location.href="profile.html"
        })

        document.getElementById("userNameNav").innerText=login.name;

        document.getElementById("logOutBttn").addEventListener("click",()=>{
            let arr = document.getElementById("responsiveNavbarHome").children;
                arr[arr.length-1].remove()
                // arr[arr.length-1].remove()
                arr[arr.length-1].style.display="block"
                arr[arr.length-2].style.display="block"
                localStorage.removeItem("successUser");
                location.href="../index.html";
        })

    }, 1);
    

    }







}



//User DropDown

showLoginNavbar()

function userDropDown(){
    if(document.getElementById("dropUser").style.display=="none"){
        document.getElementById("dropUser").style.display="grid"
        // document.getElementById("dropUserButton").setAttribute("class","flipClass");
    }
    else{
        
        document.getElementById("dropUser").style.display="none"
        // document.getElementById("dropUserButton").classList[0].remove()
    }
}
