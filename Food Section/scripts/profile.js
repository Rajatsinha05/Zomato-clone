import { fetchData } from "../components/fetchData.js";
import {navbar,selectionNavbar } from "../components/navbar.js";

document.getElementById("foodNavbar").innerHTML=navbar();


setTimeout(() => {
    document.querySelector("#navbarSectionFirst>img").addEventListener("click",()=>{
        window.location.href="index.html"
    })
    document.querySelector("#profileSection").addEventListener("click",()=>{
        window.location.href="profile.html"
    })

}, 1);






/// Add Event Listner


document.getElementById("dropUserButton").addEventListener("click",userDropDown);
document.getElementById("userImage").addEventListener("click",userDropDown);
document.getElementById("userNameNav").addEventListener("click",userDropDown);

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





const searchFoodSection =(e)=>{

    if(e.key=="Enter"){
        let value = document.getElementById("search").value;
        localStorage.setItem("foodItem",value);
        const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;
        
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