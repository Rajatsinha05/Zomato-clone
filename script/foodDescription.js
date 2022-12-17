import { fetchData } from "../components/fetchData.js";
import {navbar,selectionNavbar } from "../components/navbar.js";
import {signUP,logIn} from "../components/credentials.js"
import {footer} from "../components/footer.js";

document.getElementById("footer").innerHTML=footer();
document.getElementById("foodNavbar").innerHTML=navbar();

setTimeout(() => {
    document.querySelector("#navbarSectionFirst>img").addEventListener("click",()=>{
        window.location.href="../index.html"
    })
    document.querySelector("#profileSection").addEventListener("click",()=>{
        window.location.href="profile.html"
    })

}, 1);



setInterval(() => {
    if(document.getElementById("search").placeholder=="Search for Restaurant"){
        document.getElementById("search").placeholder="Search for Cusine";
    }
    else if(document.getElementById("search").placeholder=="Search for Cusine"){
        document.getElementById("search").placeholder="Search for Dish"
    }
    else if(document.getElementById("search").placeholder=="Search for Dish"){
        document.getElementById("search").placeholder="Search for Restaurant";
    }
}, 2000);









let addToCart=(ele)=>{
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))||[];

    let boolean = false;

    for(let i=0;i<cartProducts.length;i++){

        if(ele.id==cartProducts[i].id){
            boolean=true;
            break;
        }


    }
    
    let alert = document.getElementById("alert");
    if(!boolean){
        cartProducts.push(ele);
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
        alert.style.color="white";
        alert.style.backgroundColor="green";
        alert.style.border="1px solid green";
        alert.innerHTML=`Item Added To Cart <i class="fa-sharp fa-solid fa-circle-check"></i>`;
        
    }
    else{
        alert.style.color="white";
        alert.style.backgroundColor="rgb(224, 53, 70)";
        alert.style.border="1px solid rgb(224, 53, 70)";
        alert.innerHTML=`Already in Cart <i class="fa-solid fa-xmark"></i>`;
        

    }
    

    

    
    
    alert.style.display="block";
    setTimeout(() => {
        alert.style.display="none";
        
    }, 1500);
    let arr = JSON.parse(localStorage.getItem("cartProducts"))||[]
    document.getElementById("badgeNumber").innerText= arr.length;
}


// Show Products


let foodShow = JSON.parse(localStorage.getItem("foodShow")) ||{};

let showProduct = (data,location)=>{

    location.innerHTML="";
    let container = document.createElement("div");
    let bigPhotoCntainer =document.createElement("div");
    let photoDiv = document.createElement("div");
    let bigPhotoDiv = document.createElement("img");
    let smallPhotos = document.createElement("div");
    let smallPhotos1= document.createElement("img");
    let smallPhotos2= document.createElement("img");
    let smallPhotos3= document.createElement("img");
    let smallPhotos4= document.createElement("img");
    let smallPhotosdiv1= document.createElement("div");
    let smallPhotosdiv2= document.createElement("div");
    smallPhotosdiv1.append(smallPhotos1);
    smallPhotosdiv2.append(smallPhotos2);
    bigPhotoDiv.src=data.img;
    bigPhotoCntainer.append(bigPhotoDiv);
    smallPhotos4.src=`https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg`


    async function getSimilarPhotos(){
        
        try{

            let res = await fetch(`https://easy-ruby-colt-boot.cyclic.app/posts?food=${data.food}&page=1&_limit=3`)
            let data1 = await res.json();
            smallPhotos1.src=data1[0].img;
            smallPhotos2.src=data1[1].img;
            smallPhotos3.src=data1[2].img;
            
            console.log(data1);
        }catch(err){
            console.log(err);
        }



    }

    getSimilarPhotos();
    
    let smallPhotos3Div = document.createElement("div");
    
    let p = document.createElement("p");
    p.innerText=`View Gallery`;
    p.setAttribute("class","centerTextOverlap");
    smallPhotos3Div.append(smallPhotos3,p);
    smallPhotos3Div.setAttribute("class","centerDivOverlap");
    
    
    let divInner = document.createElement("div");
    divInner.innerHTML=`<i class="fa-solid fa-camera"></i>
    <p>Add Photos</p>`
    divInner.setAttribute("class","centerTextOverlap");
    
    
    let smallPhotos4Div = document.createElement("div");
    smallPhotos4Div.setAttribute("class","centerDivOverlap");
    smallPhotos4Div.append(smallPhotos4,divInner);
    smallPhotos.append(smallPhotosdiv1,smallPhotos3Div,smallPhotosdiv2,smallPhotos4Div);
    smallPhotos.setAttribute("class","smallPhotosDiv");
    photoDiv.append(bigPhotoCntainer,smallPhotos);
    photoDiv.setAttribute("class","descriptionPhotoDiv")


    //2nd Div
    

    let secondMainDiv = document.createElement("div");
    let title = document.createElement("h2");
    title.innerText=`${data.food}`

    let ratingDiv = document.createElement("p");
    ratingDiv.innerHTML=`<div>${data.rating} <i class="fa-solid fa-star starLogo"></i></div><span><strong>100+</strong> Food Reviews</span></div><div>${(+data.rating+ +0.2).toFixed(1)} <i class="fa-solid fa-star starLogo"></i></div><span><strong>500+</strong> Delivery Reviews</span></div>`
    ratingDiv.setAttribute("class","foodDescriptionRating")
    secondMainDiv.append(title,ratingDiv)
    secondMainDiv.setAttribute("class","foodDescriptionTitle")

    //3rd div
    let  thirdDiv = document.createElement("div");
    thirdDiv.innerHTML=`<div>Fast Food, Pizza, Sandwich, Shake, Juices, Coffee, Beverages</div><div>${data.place}</div><div><span id="openNow">Open   now</span>  
    7am  –  11pm (Today)
    <i class="fa-solid fa-circle-info"></i>
    
    </div>`
    let fourthDiv = document.createElement("div");
    let fourthDivButton1=document.createElement("button");
    let fourthDivButton2=document.createElement("button");
    let fourthDivButton3=document.createElement("button");

    fourthDivButton1.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> Add to Cart`
    fourthDivButton2.innerHTML=`<i class="fa-solid fa-diamond-turn-right"></i> Direction`
    fourthDivButton3.innerHTML=`<i class="fa-solid fa-share"></i> Share`

    fourthDiv.setAttribute("class","buttonDiv");
    fourthDiv.append(fourthDivButton1,fourthDivButton2,fourthDivButton3);

    fourthDiv.addEventListener("click",()=>{
        addToCart(data);
    })



    let headerSectionDiv = document.createElement("div");

    headerSectionDiv.append(secondMainDiv,thirdDiv,fourthDiv);
    headerSectionDiv.setAttribute("id","headerSectionDiv");
    headerSectionDiv.style.position="sticky";
    headerSectionDiv.style.top="0%";


    thirdDiv.setAttribute("class","foodDescriptionThird")
    location.append(photoDiv,headerSectionDiv);
    
}

showProduct(foodShow,document.getElementById("showItem"));



document.getElementById("dropUserButton").addEventListener("click",userDropDown);
document.getElementById("userImage").addEventListener("click",userDropDown);
document.getElementById("userNameNav").addEventListener("click",userDropDown);






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
                    title=arr[0];
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
    document.getElementById("cityName4").innerText=name;
    document.getElementById("iframe").setAttribute("src",`https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
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

const searchFoodSection =(e)=>{

    if(e.key=="Enter"){
        let value = document.getElementById("search").value;
        localStorage.setItem("foodItem",value);
        const url =`https://easy-ruby-colt-boot.cyclic.app/restaurant?`;
        
        // fetchDataSupport(url+`q=${value}&_page=1&_limit=20`);
        location.href="food.html";




    }



}


document.getElementById("search").addEventListener("keypress",searchFoodSection);




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
