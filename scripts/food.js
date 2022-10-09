import { fetchData } from "../components/fetchData.js";










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
        let subHeadDEle5 =document.createElement("img");
        let subHeadDEle6 =document.createElement("p");
        let addToCartDiv = document.createElement("div");
        addToCartDiv.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> Add To Cart`;
        addToCartDiv.setAttribute("class","addToCart");
        addToCartDiv.addEventListener("click",addToCart);
        img.src=ele.img;
        img.setAttribute("class","width100")


        
        subHeadDEle1.innerText=`${ele.food} :- ${ele.place}`
        subHeadDEle1.setAttribute("class","tagsFood2")
        subHeadDEle2.innerHTML=`${ele.rating} <i class="fa-solid fa-star starLogo"></i>`
        subHeadDEle2.setAttribute("class","foodRating")
        subHeadDEle3.innerText=`${ele.tags}`;
        subHeadDEle3.setAttribute("class","tagsFood")
        subHeadDEle4.innerText=`₹ ${ele.price}`;
        headDiv1.append(subHeadDEle1,subHeadDEle2,subHeadDEle3,subHeadDEle4);
        headDiv1.setAttribute("class","containerHeadDiv1");
        
        

        subHeadDEle5.src=ele.logo;
        subHeadDEle6.innerText=ele.status;
        headDiv2.append(subHeadDEle5,subHeadDEle6);
        headDiv2.setAttribute("class","containerHeadDiv2");


        mainDiv.append(addToCartDiv,img,headDiv1,headDiv2);
        mainDiv.addEventListener("mouseover",()=>{
            addToCartDiv.style.display="block";
        })
        mainDiv.addEventListener("mouseout",()=>{
            addToCartDiv.style.display="none";
        })
        location.append(mainDiv);


        



    })




}


const fetchDataSupport =async(url)=>{

    try{
        let res = await fetchData(url);
        // console.log(res);
        if(res.length==0){
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


const url =`https://zomatoclone-api.herokuapp.com/posts?q=pizza&_page=1&_limit=20`;
fetchDataSupport(url);




let addToCart=()=>{
    let alert = document.getElementById("alert");
    alert.innerHTML=`Item Added To Cart <i class="fa-sharp fa-solid fa-circle-check"></i>`;
    alert.style.display="block";
    setTimeout(() => {
        alert.style.display="none";
        
    }, 1500);
    
}

