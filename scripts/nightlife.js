import { fetchData } from "../components/fetchData.js";
import {navbar,selectionNavbar } from "../components/navbar.js";

document.getElementById("foodNavbar").innerHTML=navbar();

document.getElementById("selectionNavbar").innerHTML=selectionNavbar();
document.getElementById("selectionDiv3").style.color="#F05665";
document.getElementById("selectionDiv3").style.borderBottom="2px solid #F05665";
document.getElementById("selectionImg3").src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png";
document.getElementById("selectionContainer3").style.backgroundColor="#EDF4FF";





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


const appendData =(data,location)=>{

    location.innerHTML ="";
    data.map((ele)=>{
        // let rating = (ele.rating/1).toFixed(2);
        let mainDiv = document.createElement("div");
        let img = document.createElement("img");
        let headDiv1 = document.createElement("div");
        let subHeadDEle1= document.createElement("h4");
        let subHeadDEle2= document.createElement("h5");
        let subHeadDEle3= document.createElement("p");
        let subHeadDEle4= document.createElement("p");
        let headDiv2 = document.createElement("div");
        let subHeadDEle5 =document.createElement("p");
        let subHeadDEle6 =document.createElement("p");
        let addToCartDiv = document.createElement("div");
        let time = document.createElement("p");
        addToCartDiv.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> Add To Cart`;
        addToCartDiv.setAttribute("class","addToCart");
        addToCartDiv.addEventListener("click",addToCart);
        img.src=ele.img;
        img.setAttribute("class","width100")
        time.innerText=ele.distance;
        time.setAttribute("class","foodTime")

        
        subHeadDEle1.innerText=`${ele.name}`
        subHeadDEle1.setAttribute("class","tagsFood2")
        subHeadDEle2.innerHTML=`${ele.rating} <i class="fa-solid fa-star starLogo"></i>`
        subHeadDEle2.setAttribute("class","foodRating")
        subHeadDEle3.innerText=`${ele.tags}`;
        subHeadDEle3.setAttribute("class","tagsFood")
        subHeadDEle4.innerText=`₹ ${ele.price}`;
        headDiv1.append(subHeadDEle1,subHeadDEle2,subHeadDEle3,subHeadDEle4);
        headDiv1.setAttribute("class","containerHeadDiv1");
        
        

        subHeadDEle5.innerText=ele.address;
        subHeadDEle6.innerText=ele.timing;
        subHeadDEle6.setAttribute("class","timingPTag");
        headDiv2.append(subHeadDEle5,subHeadDEle6);
        headDiv2.setAttribute("class","containerHeadDiv2");


        mainDiv.append(img,time,headDiv1,headDiv2);
        location.append(mainDiv);


        



    })




}


const fetchDataSupport =async(url)=>{

    try{
        let res = await fetchData(url);
        console.log(res);
        if(res.length==0){
            document.querySelector(".itemsContainer").innerHTML="";
            document.getElementById("noDataFound").style.display="grid";
        }
        else{
            document.getElementById("noDataFound").style.display="none";
            appendData(res,document.querySelector(".itemsContainer"));

        }
    }
    catch(err){
        console.log(err);
    }


}
const fetchDataSupportSort =async(url,ascending)=>{

    try{
        let res = await fetchData(url);
        console.log(res);
        if(res.length==0){
            document.getElementById("noDataFound").style.display="grid";
        }
        else{
            document.getElementById("noDataFound").style.display="none";
            if(ascending){
                appendData(res,document.querySelector(".itemsContainer"));
                
            }
            else{
                appendData(res.reverse(),document.querySelector(".itemsContainer"));
                
            }

        }
    }
    catch(err){
        console.log(err);
    }


}





const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;

let searchFood = localStorage.getItem("foodItem") || true;

if(searchFood){
    
    fetchDataSupport(url+`_page=1&_limit=20&_sort=rating&_order=asc`);
    
}
else{
    fetchDataSupport(url+`q=${searchFood}&_page=1&_limit=20`);
}





let addToCart=()=>{
    let alert = document.getElementById("alert");
    alert.style.color="white";
    alert.style.backgroundColor="green";
    alert.style.border="1px solid green";
    alert.innerHTML=`Item Added To Cart <i class="fa-sharp fa-solid fa-circle-check"></i>`;
    alert.style.display="block";
    setTimeout(() => {
        alert.style.display="none";
        
    }, 1500);
    
}










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




const ratingFilter =()=>{
    let button = document.getElementById("ratingH2L");
    const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;
    document.getElementById("deliveryH2L").style.backgroundColor="white"
    document.getElementById("deliveryH2L").style.color="#bba3a3"
    document.getElementById("multipleFilters").style.backgroundColor="white";
    document.getElementById("multipleFilters").style.color="#bba3a3";

    localStorage.removeItem("filterApplied")



    let searchFood = localStorage.getItem("foodItem") || "Pizza";



    if(document.getElementById("ratingH2L").style.backgroundColor=="rgb(224, 53, 70)"){
        fetchDataSupportSort(url+`q=${searchFood}&_page=1&_limit=20&_sort=rating`,true);
        button.style.backgroundColor="white";
        button.style.color="#bba3a3";
    }
    else{


        fetchDataSupportSort(url+`q=${searchFood}&_page=1&_limit=20&_sort=rating`,false);
        button.style.backgroundColor="rgb(224, 53, 70)";
        button.style.color="white";
        let alert = document.getElementById("alert");
            alert.style.color="white";
            alert.style.backgroundColor="green";
            alert.style.border="1px solid green";
            alert.innerHTML=`Filter Applied <i class="fa-sharp fa-solid fa-circle-check"></i>`;
            alert.style.display="block";
            setTimeout(() => {
                alert.style.display="none";
                
            }, 1500);
    }
    
    
    
    
}
const deliveryFilter =()=>{
    let button = document.getElementById("deliveryH2L");
    const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;
    document.getElementById("ratingH2L").style.backgroundColor="white"
    document.getElementById("ratingH2L").style.color="#bba3a3"
    document.getElementById("multipleFilters").style.backgroundColor="white";
    document.getElementById("multipleFilters").style.color="#bba3a3";

    localStorage.removeItem("filterApplied")
    

    let searchFood = localStorage.getItem("foodItem") || "Pizza";



    if(document.getElementById("deliveryH2L").style.backgroundColor=="rgb(224, 53, 70)"){
        fetchDataSupportSort(url+`q=${searchFood}&_page=1&_limit=20&_sort=time`,false);
        button.style.backgroundColor="white";
        button.style.color="#bba3a3";
    }
    else{


        fetchDataSupportSort(url+`q=${searchFood}&_page=1&_limit=20&_sort=time`,true);
        button.style.backgroundColor="rgb(224, 53, 70)";
        button.style.color="white";
        let alert = document.getElementById("alert");
            alert.style.color="white";
            alert.style.backgroundColor="green";
            alert.style.border="1px solid green";
            alert.innerHTML=`Filter Applied <i class="fa-sharp fa-solid fa-circle-check"></i>`;
            alert.style.display="block";
            setTimeout(() => {
                alert.style.display="none";
                
            }, 1500);
        
    }
    
    
    
    
}


document.getElementById("ratingH2L").addEventListener("click",ratingFilter);
document.getElementById("deliveryH2L").addEventListener("click",deliveryFilter);

const searchFoodSection =(e)=>{

    if(e.key=="Enter"){
        let value = document.getElementById("search").value;
        localStorage.setItem("foodItem",value);
        const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;
        
        // fetchDataSupport(url+`q=${value}&_page=1&_limit=20`);
        location.href="food.html";




    }



}





function moreFilters(){
    let backDiv = document.createElement("div");
    let div =document.createElement("div");
    div.setAttribute("class","filterModal")
    let header = document.createElement("div");
    header.setAttribute("class","filterHeadSection")
    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class","filterModalBody")
    let subdiv1 = document.createElement("div");
    let subdiv2 = document.createElement("div");

    
    let subdiv1_0 = document.createElement("div");
    let subdiv1_1 = document.createElement("div");
    let subdiv1_2 = document.createElement("div");
    let subdiv1_3 = document.createElement("div");
    let subdiv1_4 = document.createElement("div");


    let header_0=document.createElement("div");
    let header_1=document.createElement("p");
    header_0.innerText="Filters";
    header_1.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    
    header.append(header_0,header_1)
    subdiv1_0.innerText = "Sort By";
    subdiv1_1.innerText = "Cuisines";
    subdiv1_2.innerText = "Rating";
    subdiv1_3.innerText = "Cost Per Person";
    subdiv1_4.innerText = "More Filters";

    subdiv1.append(subdiv1_0,subdiv1_1,subdiv1_2,subdiv1_3,subdiv1_4);

    

    subdiv2.innerHTML=`<div class="form-check">
    <input class="form-check-input" type="radio" name="filterRadio" id="rating_false">
    <label class="form-check-label" for="rating_false">
     Rating: High to Low
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="filterRadio" id="time_true">
    <label class="form-check-label" for="time_true">
      Delivery Time
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="filterRadio" id="price_true">
    <label class="form-check-label" for="price_true">
      Cost : Low to High
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="filterRadio" id="price_false">
    <label class="form-check-label" for="price_false">
      Cost : High to Low
    </label>
  </div>`


    let value =localStorage.getItem("filterApplied");
    
    setTimeout(() => {
        
    
    if(value){
            // console.log(value);
            let arr = document.getElementsByName("filterRadio");
            // console.log(arr);
            arr[value].checked=true;
        }
    
    }, 100);

    subdiv2.setAttribute("id","filterModalBody")
    bodyDiv.append(subdiv1,subdiv2);

    let footFilter = document.createElement("div");
    let footButton1 =document.createElement("button");
    let footButton2 =document.createElement("button");

    footFilter.setAttribute("class","footFilter");
    footButton1.innerText="Clear All";

    footButton1.addEventListener("click",()=>{
        document.getElementById("multipleFilters").style.backgroundColor="white";
        document.getElementById("multipleFilters").style.color="#bba3a3";
        let arr= document.querySelector("html").children
        arr[arr.length-1].remove();
        document.querySelector("html").style.overflow="auto"
        localStorage.removeItem("filterApplied");

    })





    footButton2.innerText="Apply";
    footButton2.addEventListener("click",()=>{
        let arr = document.getElementsByName("filterRadio");
        let found=false;
        let para1="";
        let para2=false;

        for(let i=0;i<arr.length;i++){
            if(arr[i].checked){
                localStorage.setItem("filterApplied",i);
                found = true;
                let newArr=arr[i].id.split("_");
                para1=newArr[0];
                if(newArr[1]=="true"){
                    para2=true;
                }
                // console.log(newArr);
            }
        }
        if(found==false){
            let alert = document.getElementById("alert");
            alert.innerHTML=`Please Select any Option <i class="fa-solid fa-xmark"></i>`;
            alert.style.color="red";
            alert.style.backgroundColor="white";
            alert.style.border="1px solid red";
            alert.style.display="block";
            setTimeout(() => {
                alert.style.display="none";
                
            }, 1500);
            
        }
        else{
            let button = document.getElementById("ratingH2L");
            let button1 = document.getElementById("deliveryH2L");
            button.style.backgroundColor="white";
            button.style.color="#bba3a3";
            button1.style.backgroundColor="white";
            button1.style.color="#bba3a3";
            let alert = document.getElementById("alert");
            alert.style.color="white";
            alert.style.backgroundColor="green";
            alert.style.border="1px solid green";
            alert.innerHTML=`Filter Applied <i class="fa-sharp fa-solid fa-circle-check"></i>`;
            alert.style.display="block";
            setTimeout(() => {
                alert.style.display="none";
                
            }, 1500);

            const url =`https://zomatoclone-api.herokuapp.com/restaurant?`;
            let searchFood = localStorage.getItem("foodItem") || "Pizza";
            console.log(para1+" "+para2);
            fetchDataSupportSort(url+`q=${searchFood}&_page=1&_limit=20&_sort=`+para1,para2);
            document.getElementById("multipleFilters").style.backgroundColor="rgb(224, 53, 70)";
            document.getElementById("multipleFilters").style.color="white";
            let arr= document.querySelector("html").children
            arr[arr.length-1].remove();
            document.querySelector("html").style.overflow="auto"
        }
    })

    footFilter.append(footButton1,footButton2);
    div.append(header,bodyDiv,footFilter);
    backDiv.append(div);
    backDiv.setAttribute("class","filterBackDiv")
    document.querySelector("html").append(backDiv);
    document.querySelector("html").style.overflow="hidden"
    
    header_1.addEventListener("click",()=>{
        let arr= document.querySelector("html").children
        arr[arr.length-1].remove();

        document.querySelector("html").style.overflow="auto"
    })

}







document.getElementById("multipleFilters").addEventListener("click",moreFilters);
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