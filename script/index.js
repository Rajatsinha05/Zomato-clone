
import {signUP,logIn} from "../components/credentials.js";

import {footer} from "../components/footer.js";

document.getElementById("footer").innerHTML=footer();









//link Pages


document.querySelector("#section_item1").addEventListener("click",()=>{
    location.href="./pages/food.html"
})
document.querySelector("#section_item2").addEventListener("click",()=>{
    location.href="./pages/dinning.html"
})
document.querySelector("#section_item3").addEventListener("click",()=>{
    location.href="./pages/nightlife.html"
})
// document.querySelector("#addResturantPage").addEventListener("click",()=>{
//     location.href="./pages/addrestaurant.html"
// })









let flag = true;
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".rightFloat");
    hamburger.addEventListener("click", () => {
        if (flag) {
            document.getElementById("imageInToogleBtn").style.display = "block";
            document.querySelector("body").style.overflow = "hidden"
            flag = false;
        } else {
            document.getElementById("imageInToogleBtn").style.display = "none";
            document.querySelector("body").style.overflow = "auto"

            flag = true;
        }
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        // document.getElementById("imageInToogleBtn").style.display = "none";
    })
    document.querySelectorAll(".rightFloat li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.getElementById("imageInToogleBtn").style.display = "none";
    }))








    //Search Location Functionality




setTimeout(() => {
    
    document.getElementById("searchLocation").addEventListener("input",debounce(locationSearch,1000));
}, 100);
const locationSearch = async()=>{


    const apiKey= `7-FIYtpdWoxB9jL9CRdKwtPhuVtGvEwFx2o2FffIYcU`;
    let cityValue= document.getElementById("searchLocation").value;

    if(cityValue!=""){
        ///Her
        document.getElementById("showLocations").style.display="block"
        const url =`https://autosuggest.search.hereapi.com/v1/autosuggest?at=52.93175,12.77165&q=${cityValue}&administrativeAreaType=state&limit=2&lang=en&apiKey=${apiKey}`
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);

        let appendDIv = document.getElementById("locationSuggestions");
        appendDIv.innerHTML="";
        data.items.map((ele)=>{
            let arr = ele.title.split(", ");
            let title ="";
            if(arr.length>2){
                title = arr[0]+" "+arr[1];
                if(title.length>10){
                    title=arr[0]
                    
                } 
            }
            else{
                title=arr[0];
            }
            let div = document.createElement("div");
            div.innerHTML=`<i class="fa-solid fa-location-dot"></i>
            ${title}`

            appendDIv.append(div);
            div.addEventListener("click",()=>{
                setLocationNameFunc(title,true);
            })


        })
        
    }



}

let debounce = (cb,time)=>{

    let timerId;
    return ()=>{
        if(timerId)clearTimeout(timerId);
        timerId=setTimeout(() => {
            cb();
        }, time);
    }





}


//show Location

setTimeout(() => {
    
    document.getElementById("dropShowLocations").addEventListener("click",showLocations)
    document.getElementById("detectLocation").addEventListener("click",detectLocationSelf);

}, 100);


const showLocations=()=>{
    let selectdiv = document.getElementById("showLocations");
    document.getElementById("locationSuggestions").innerHTML="";
    if(selectdiv.style.display=="none"){

        selectdiv.style.display="block"
        
        
    }
    else{
        selectdiv.style.display="none"

    }
}

const detectLocationSelf =()=>{
    let city ="";
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      async function success(pos) {
        const crd = pos.coords;
        const apiKey=`8ee524530c82ab7b4867bdd1aa5045fe`;
        const url =`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        city=data.name;
        setLocationNameFunc(city,true);
        
        
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
      
}


const setLocationNameFunc=(name,boolean)=>{
    document.getElementById("searchLocation").value=name;
    document.getElementById("cityName1").innerText=name;
    document.getElementById("cityName2").innerText=name;
    document.getElementById("cityName3").innerText=name;
    document.getElementById("cityName4").innerText=name;
    // document.getElementById("cityName3").innerText=name;
    // document.getElementById("cityName4").innerText=name;


    let selectdiv = document.getElementById("showLocations");
      selectdiv.style.display="none"


      if(boolean){

          
          let alert = document.getElementById("alert");
          alert.style.color="white";
          alert.style.backgroundColor="green";
          alert.style.border="1px solid green";
          alert.innerHTML=`${name} Selected <i class="fa-sharp fa-solid fa-circle-check"></i>`;
      alert.style.display="block";
      setTimeout(() => {
          alert.style.display="none";
          
        }, 1500);
    }
        
    localStorage.setItem("searchedCity",name);
}


// Searched Cities


let searchedCity = localStorage.getItem("searchedCity")||"";


if(searchedCity!=""){
    setLocationNameFunc(searchedCity,false);
}



//Food Search 



const searchFoodSection =(e)=>{
    console.log("hello")
    if(e.key=="Enter"){
        let value = document.getElementById("search1").value;
        localStorage.setItem("foodItem",value);
        const url =`https://easy-ruby-colt-boot.cyclic.app/restaurant?`;
        
        // fetchDataSupport(url+`q=${value}&_page=1&_limit=20`);
        window.location.href="./pages/food.html";




    }



}


document.getElementById("search1").addEventListener("keypress",searchFoodSection);




///Login and SignUp






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
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" id="userImage"alt="">
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
            window.location.href="./pages/profile.html"
        })

        document.getElementById("userNameNav").innerText=login.name;

        document.getElementById("logOutBttn").addEventListener("click",()=>{
            let arr = document.getElementById("responsiveNavbarHome").children;
                arr[arr.length-1].remove()
                // arr[arr.length-1].remove()
                arr[arr.length-1].style.display="block"
                arr[arr.length-2].style.display="block"
                localStorage.removeItem("successUser");
                location.href="index.html";
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
