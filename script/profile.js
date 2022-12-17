import { fetchData } from "../components/fetchData.js";
import {navbar,selectionNavbar } from "../components/navbar.js";
import {signUP,logIn} from "../components/credentials.js"
import {footer} from "../components/footer.js";

// document.getElementById("footer").innerHTML=footer();
document.getElementById("foodNavbar").innerHTML=navbar();


setTimeout(() => {
    document.querySelector("#navbarSectionFirst>img").addEventListener("click",()=>{
        window.location.href="../index.html"
    })
    document.querySelector("#profileSection").addEventListener("click",()=>{
        window.location.href="profile.html"
    })

}, 1);






/// Add Event Listner


document.getElementById("dropUserButton").addEventListener("click",userDropDown);
document.getElementById("userImage").addEventListener("click",userDropDown);
document.getElementById("userNameNav").addEventListener("click",userDropDown);







const searchFoodSection =(e)=>{

    if(e.key=="Enter"){
        let value = document.getElementById("search").value;
        localStorage.setItem("foodItem",value);
        const url =`https://easy-ruby-colt-boot.cyclic.app/restaurant?`;
        
        // fetchDataSupport(url+`q=${value}&_page=1&_limit=20`);
        location.href="food.html";




    }



}



// document.getElementById("multipleFilters").addEventListener("click",moreFilters);
document.getElementById("search").addEventListener("keypress",searchFoodSection);




// const fetchCity =async()=>{
//     let res = await fetch('https://api.api-ninjas.com/v1/city?name=Banglore',{
//         "method": 'GET',
//         "headers": { 
//             'X-Api-Key': 'QP+C/QNoJci4IrbD/5+e3g==27lWex6GckegMNfo',
//             "Content-Type": 'application/json'
//         }
//     })

//     let data = await res.json();
//     console.log(data);
// }

// fetchCity();



//Search Functionality
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
    // document.getElementById("cityName2").innerText=name;
    // document.getElementById("cityName3").innerText=name;
    // document.getElementById("cityName4").innerText=name;
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



function showLoginNavbar(){
    let login = JSON.parse(localStorage.getItem("successUser"));
    if(login){
        document.getElementById("userNameNav").innerText=login.name;
    }







}



//User DropDown

showLoginNavbar()




//login Functionality


document.getElementById("UserSIgnUpLogInModal").innerHTML=signUP()+logIn();




document.getElementById("dropUserButton").addEventListener("click",userDropDown);
document.getElementById("userImage").addEventListener("click",userDropDown);
document.getElementById("userNameNav").addEventListener("click",userDropDown);

function userDropDown(){

    let login = JSON.parse(localStorage.getItem("successUser"));
    if(login){
        if(document.getElementById("dropUser").style.display=="none"){
            document.getElementById("dropUser").style.display="grid"
            // document.getElementById("dropUserButton").setAttribute("class","flipClass");
        }
        else{
            
            document.getElementById("dropUser").style.display="none"
            // document.getElementById("dropUserButton").classList[0].remove()
        }
        
    }
    else{
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
    }
}



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

document.getElementById("logOutBttn").addEventListener("click",()=>{
        localStorage.removeItem("successUser");
        location.href="../index.html";
})




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










//// Profile Details Show





const showDetailsProfileSection =()=>{
    let user = JSON.parse(localStorage.getItem("successUser"));

    document.getElementById("profileUserName").innerText=user.name;
    document.getElementById("name").value=user.name;
    document.getElementById("email").value=user.email;






    // document.getElementById("oldPassword").innerText=user.name;
    // document.getElementById("newPassword").innerText=user.name;







}

showDetailsProfileSection();

document.getElementById("email").addEventListener("click",()=>{
    let alert = document.getElementById("alert");
    alert.style.color="white";
    alert.style.backgroundColor="blue";
    alert.style.border="1px solid blue";
    alert.innerHTML=`Can't Change Email <i class="fa-solid fa-xmark"></i>`;
    alert.style.display="block";
    setTimeout(() => {
        alert.style.display="none";
        
    }, 1500);
})


document.querySelector("form").addEventListener("submit",async function(){

    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let oldPass = document.getElementById("oldPass").value;
    let newPass = document.getElementById("newPass").value;
    

    let obj ={
        name:name,
        email:email,
        password:newPass
    }


    try{
        let res = await fetch("https://easy-ruby-colt-boot.cyclic.app/user");
        let data = await res.json();
        console.log(data);
        let bool = false;
        for(let i=0;i<data.length;i++){

            if(data[i].email==email&&data[i].password==oldPass){
                bool=true;
                console.log(i);
                break;
            }



        }
        let alert = document.getElementById("alert");
        if(bool){
            let res = await fetch(`https://easy-ruby-colt-boot.cyclic.app/user`,{
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            let data = await res.json();
            alert.style.color="white";
            alert.style.backgroundColor="green";
            alert.style.border="1px solid green";
            alert.innerHTML=`Details Changed Sucessfully <i class="fa-sharp fa-solid fa-circle-check"></i>`;
            localStorage.setItem("successUser",JSON.stringify(obj));
            // location.href="profile.html";
            // document.getElementById("profile")
            document.getElementById("profileUserName").innerText=name;
            document.getElementById("name").value=name;
            document.getElementById("email").value=email;
            document.getElementById("userNameNav").innerText=name;
        }
        else{
            alert.style.color="white";
            alert.style.backgroundColor="rgb(224, 53, 70)";
            alert.style.border="1px solid rgb(224, 53, 70)";
            alert.innerHTML=`Old PassWord Not Matched <i class="fa-solid fa-xmark"></i>`;
        }
        alert.style.display="block";
        setTimeout(() => {
            alert.style.display="none";
        }, 1500);
    }

    catch(err){
        console.log(err);
    }    

    



})