
document.getElementById("cartModalButton").addEventListener("click",()=>{
    let cartModal= document.getElementById("popUpCart");
    let arr = document.getElementById("cartModalButton").children;
    arr[0].innerHTML=""

    if(cartModal.style.display=="none"){
        document.querySelector("#cartDivIframe>embed").src="./cart.html";
        document.getElementById("")
        cartModal.style.display="block"
    document.getElementById("cartDivIframe").style.display="block";

        document.querySelector("body").style.overflow="hidden"
        // arr[0].innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        // document.getElementById("badgeNumber").style.display="none";

    }
    else{
        document.getElementById("cartDivIframe").style.display="none";

        cartModal.style.display="none"
        document.querySelector("body").style.overflow="auto"
        // arr[0].innerHTML=`<i class="fa-solid fa-cart-shopping"></i>`;
        // document.getElementById("badgeNumber").style.display="block";
    }
})

document.getElementById("closeCartModal").addEventListener("click",()=>{
    document.getElementById("popUpCart").style.display="none";
    document.getElementById("cartDivIframe").style.display="none";
    document.querySelector("body").style.overflow="auto";
    showCartNumber();
})



showCartNumber();


function showCartNumber(){
    let arr = JSON.parse(localStorage.getItem("cartProducts"))||[]
    document.getElementById("badgeNumber").innerText= arr.length;





}