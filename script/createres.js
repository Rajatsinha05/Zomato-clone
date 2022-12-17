document.querySelector(".nextbluebutton").addEventListener('click', async()=>{
    event.preventDefault();
    let resData={
        name : document.querySelector("#restaurantname").value,
        address: document.querySelector("#restoaddress").value,
        mobile : document.querySelector("#restaurantmob").value,
        landlineNumb : document.querySelector("#restaurnatlandline").value,
        ownerFullname : document.querySelector("#restaurantownerfullname").value,
        ownerEmail : document.querySelector("#restaurantowneremail").value,
        img :document.querySelector("#restaurantImageUrl").value,
        ownerMobile : document.querySelector("#restaurantownermob").value,
        timing: "Opens at 12noon",
        distance: "2.7 km",
        rating: 4.6,
        tags: "Momos, Nepalese, Tibetan, Assamese, Asian, North Eastern, Beverages",
        price: "3,000",
    }
    console.log(resData);
    let res=await fetch(`https://easy-ruby-colt-boot.cyclic.app/restaurant`,{
        method:"POST",
        body : JSON.stringify(resData),
        headers : {
            "Content-Type" : "application/json",
        },
    });
    alert("Restaurant Registered Successfully")
    location.href='../index.html'
});