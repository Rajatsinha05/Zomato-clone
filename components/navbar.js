const navbar = ()=>{
    return ` <nav id="navbar">
    <div id="navbarSectionFirst">
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="">
    <div id="locationAndSearch">
       <div id="location">
        <i class="fa-solid fa-location-dot"></i>
        <div id="dropdownSelect">
            <input type="text" name="" id="searchLocation" placeholder="Your Location">
        </div>
        <i id="dropShowLocations"class="fa-solid fa-caret-down"></i>
        <div id="showLocations">
            <div id= "detectLocation">
            <i class="fa-solid fa-location-dot"></i>
            Detect My Location
            </div>
            <div id="locationSuggestions">

            </div>
        </div>
       </div> 
       <div id="searchNavbar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="" id="search" placeholder="Search for Restaurant">
    </div>
</div>
</div>
<div id="navbarSectionSecond">
    
    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" id="userImage"alt="">
    <p id="userNameNav">
        User
    </p>
    <i class="fa-solid fa-angle-down" id="dropUserButton"></i>
    <div id="dropUser">
        <p id="profileSection">Profile</p>
        <p id="logOutBttn">LogOut</p>
    </div>
   
</div>

</nav>
<div id="responsiveBar">
<div id="locationAndSearch">
       <div id="location">
        <i class="fa-solid fa-location-dot"></i>
        <div id="dropdownSelect">
            <input type="text" name="" id="searchLocation" placeholder="Your Location">
        </div>
        <i id="dropShowLocations"class="fa-solid fa-caret-down"></i>
        <div id="showLocations">
            <div id= "detectLocation">
            <i class="fa-solid fa-location-dot"></i>
            Detect My Location
            </div>
        </div>
       </div> 
       <div id="searchNavbar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="" id="search" placeholder="Search for Restaurant">
    </div>
</div>
</div>`
}


const selectionNavbar=()=>{

    return `<a href="food.html"><div class="selectionDiv" id="selectionDiv1">
    <div class="imageContainer" id="selectionContainer1" >
        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp" id="selectionImg1" alt="">
        
    </div>
    <p>Delivery</p>
</div></a>
<a href="dinning.html">
<div class="selectionDiv" id="selectionDiv2">
    <div class="imageContainer" id="selectionContainer2">
        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" id="selectionImg2" alt="">

    </div>
    <p>Dining Out</p>
</div>
</a>
<a href="nightlife.html">
<div class="selectionDiv" id="selectionDiv3">
    <div class="imageContainer" id="selectionContainer3">
        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" id="selectionImg3" alt="">

    </div>
    <p>NightLife</p>
</div></a>`
}


export {navbar ,selectionNavbar};

