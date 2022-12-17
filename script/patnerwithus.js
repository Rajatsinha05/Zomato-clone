var h =document.getElementById("alreadylistedinput-right");
h.addEventListener("keypress", async function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        var query=h.value;
        console.log(query);
        let res = await fetch(`https://easy-ruby-colt-boot.cyclic.app/restaurant`);
        let data = await res.json();
        console.log(data);
        let b=false;
        var card = document.getElementById("displaybox");
        card.innerHTML=``;
        data.map((elem)=>{
            if(elem.name == query){
                card.innerHTML +=`
               <div><h1 id="psresname">${elem.name}</h1>
               <img src="${elem.img}" id="psimg"/>
               <p>Address-${elem.address}</p>
               <button onclick="claimnowfn()" id="claimbutton">Claim this Restaurant</button></div>`
            //    console.log(kjhj);
               b=true;
            }
        })
        if(b==false){
            card.innerHTML +=`
            <div><h1 id="psresname">Cannot find Restaurant You Searched for</h1>
            <p>Please Click on below button to create your restaurant</p>
            <button onclick="registerfn()" id="claimbutton">Register Your Restaurant</button></div>`
            console.log(kjhj);
        }
    }
})

function claimnowfn(){
    // alert("This restaurant is already claimed by our another user");
    let alert = document.getElementById("alert");
    alert.style.color="white";
    alert.style.backgroundColor="rgb(224, 53, 70)";
    alert.style.border="1px solid rgb(224, 53, 70)";
    alert.innerHTML=`Already Claimed by our Another User <i class="fa-solid fa-xmark"></i>`;
    alert.style.display="block";
    setTimeout(() => {
        alert.style.display="none";
        
    }, 1500);
}
function registerfn(){
    location.href="./createarestaurantpage.html";
}