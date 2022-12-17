import {navbar,selectionNavbar } from "../components/navbar.js";
import {signUP,logIn} from "../components/credentials.js"
document.getElementById("foodNavbar").innerHTML=navbar();

setTimeout(() => {
    document.getElementById("locationAndSearch").style.display="none";
    document.querySelector("#navbarSectionFirst>img").addEventListener("click",()=>{
        window.location.href="../index.html"
    })
    document.querySelector("#profileSection").addEventListener("click",()=>{
        window.location.href="profile.html"
    })
}, 1);




document.getElementById("addNewBtn").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex"
})
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none"
})

document.querySelector("form").addEventListener("submit", submitDetails);

function submitDetails() {
    event.preventDefault();

    console.log("working");
    let cName = document.getElementById("cityName").value;
    let landmark = document.getElementById("landmark").value;
    let pincode = document.getElementById("pincode").value;

    let userAddressDetails = JSON.parse(localStorage.getItem("userAddressDetails")) || [];

    function UserDetails(c, l, p) {
        this.cName = c;
        this.landmark = l;
        this.pincode = p;
    }
    document.getElementById("userCityName").textContent = cName;
    document.getElementById("userLandmark").textContent = landmark;
    document.getElementById("userPincode").textContent = pincode;
    let user1 = new UserDetails(cName, landmark, pincode);
    userAddressDetails.push(user1);
    localStorage.setItem("userAddressDetails", JSON.stringify(userAddressDetails));
    document.getElementById("showDetails").style.visibility = "visible";
    document.querySelector(".popup").style.display = "none"

}
document.getElementById('wallet').addEventListener('click', () => {

    let element = document.getElementById('wallet');
    element.style.backgroundColor = '#FFFFFF';
    document.querySelector('#wallet>span').style.fontSize = '17px';
    document.querySelector('#wallet>span').style.color = '#282c3f';
    document.getElementById('walletIcon').setAttribute('src', './images/walletIcon1.png')
    document.getElementById('walletItemBox').style.display = 'block';
    document.getElementById('paymentgateway').style.display = 'none';

    document.getElementById('card').style.backgroundColor = '#EDF1F7';
    document.getElementById('banking').style.backgroundColor = '#EDF1F7';
    document.getElementById('upi').style.backgroundColor = '#EDF1F7';

    document.querySelector('#card>span').style.fontSize = '16px';
    document.querySelector('#banking>span').style.fontSize = '16px';
    document.querySelector('#upi>span').style.fontSize = '16px';

    document.querySelector('#card>span').style.color = '#686b78';
    document.querySelector('#banking>span').style.color = '#686b78';
    document.querySelector('#upi>span').style.color = '#686b78';

    document.getElementById('cardIcon').src = './images/CardIcon.png';
    document.getElementById('bankingIcon').src = './images/netBankingIcon.png';
    document.getElementById('upiIcon').src = './images/upiIcon.png';

    document.getElementById('bankingItemBox').style.display = 'none';
    document.getElementById('cardItemBox').style.display = 'none';
    document.getElementById('upiItemBox').style.display = 'none';

    document.getElementById('changingPart').innerText = 'Other banks';

})

document.getElementById('card').addEventListener('click', () => {

    let element = document.getElementById('card');
    document.getElementById('cardDetailsForm').reset();
    element.style.backgroundColor = '#FFFFFF';
    document.querySelector('#card>span').style.fontSize = '17px';
    document.querySelector('#card>span').style.color = '#282c3f';
    document.getElementById('cardIcon').setAttribute('src', './images/CardIcon1.png')
    document.getElementById('cardItemBox').style.display = 'block';
    document.getElementById('paymentgateway').style.display = 'none';

    document.getElementById('wallet').style.backgroundColor = '#EDF1F7';
    document.getElementById('banking').style.backgroundColor = '#EDF1F7';
    document.getElementById('upi').style.backgroundColor = '#EDF1F7';

    document.querySelector('#wallet>span').style.fontSize = '16px';
    document.querySelector('#banking>span').style.fontSize = '16px';
    document.querySelector('#upi>span').style.fontSize = '16px';

    document.querySelector('#wallet>span').style.color = '#686b78';
    document.querySelector('#banking>span').style.color = '#686b78';
    document.querySelector('#upi>span').style.color = '#686b78';

    document.getElementById('walletIcon').src = './images/walletIcon.png';
    document.getElementById('bankingIcon').src = './images/netBankingIcon.png';
    document.getElementById('upiIcon').src = './images/upiIcon.png';

    document.getElementById('walletItemBox').style.display = 'none';
    document.getElementById('bankingItemBox').style.display = 'none';
    document.getElementById('upiItemBox').style.display = 'none';
    document.getElementById('changingPart').innerText = 'Other banks';

})

document.getElementById('banking').addEventListener('click', () => {

    let element = document.getElementById('banking');
    element.style.backgroundColor = '#FFFFFF';
    document.querySelector('#banking>span').style.fontSize = '17px';
    document.querySelector('#banking>span').style.color = '#282c3f';
    document.getElementById('bankingIcon').setAttribute('src', './images/netBankingIcon1.png')
    document.getElementById('bankingItemBox').style.display = 'block';
    document.getElementById('paymentgateway').style.display = 'none';

    document.getElementById('wallet').style.backgroundColor = '#EDF1F7';
    document.getElementById('card').style.backgroundColor = '#EDF1F7';
    document.getElementById('upi').style.backgroundColor = '#EDF1F7';

    document.querySelector('#wallet>span').style.fontSize = '16px';
    document.querySelector('#card>span').style.fontSize = '16px';
    document.querySelector('#upi>span').style.fontSize = '16px';

    document.querySelector('#wallet>span').style.color = '#686b78';
    document.querySelector('#card>span').style.color = '#686b78';
    document.querySelector('#upi>span').style.color = '#686b78';

    document.getElementById('cardIcon').src = './images/CardIcon.png';
    document.getElementById('upiIcon').src = './images/upiIcon.png';
    document.getElementById('walletIcon').src = './images/walletIcon.png';

    document.getElementById('walletItemBox').style.display = 'none';
    document.getElementById('cardItemBox').style.display = 'none';
    document.getElementById('upiItemBox').style.display = 'none';
    document.getElementById('changingPart').innerText = 'Other banks';

})

document.getElementById('upi').addEventListener('click', () => {

    let element = document.getElementById('upi');
    element.style.backgroundColor = '#FFFFFF';
    document.getElementById('upiDetailsForm').reset();
    document.querySelector('#upi>span').style.fontSize = '17px';
    document.querySelector('#upi>span').style.color = '#282c3f';
    document.getElementById('upiIcon').setAttribute('src', './images/upiIcon1.png')
    document.getElementById('upiItemBox').style.display = 'block';
    document.getElementById('paymentgateway').style.display = 'none';

    document.getElementById('wallet').style.backgroundColor = '#EDF1F7';
    document.getElementById('card').style.backgroundColor = '#EDF1F7';
    document.getElementById('banking').style.backgroundColor = '#EDF1F7';

    document.querySelector('#wallet>span').style.fontSize = '16px';
    document.querySelector('#card>span').style.fontSize = '16px';
    document.querySelector('#banking>span').style.fontSize = '16px';

    document.querySelector('#wallet>span').style.color = '#686b78';
    document.querySelector('#card>span').style.color = '#686b78';
    document.querySelector('#banking>span').style.color = '#686b78';

    document.getElementById('cardIcon').src = './images/CardIcon.png';
    document.getElementById('bankingIcon').src = './images/netBankingIcon.png';
    document.getElementById('walletIcon').src = './images/walletIcon.png';

    document.getElementById('walletItemBox').style.display = 'none';
    document.getElementById('cardItemBox').style.display = 'none';
    document.getElementById('bankingItemBox').style.display = 'none';
    document.getElementById('changingPart').innerText = 'Other banks';

});

document.querySelector('#bankSelectBar').addEventListener('mouseenter', () => {
        document.getElementById('downArrowSign').style.color = '#fc8019'
        document.querySelector('.dropDownBanks').style.display = 'block'
    })
    // document.querySelector('.dropDownBanks').addEventListener('mouseleave', () => {
    //     document.getElementById('downArrowSign').style.color = ''
    //     document.querySelector('.dropDownBanks').style.display = 'none'
    // })

let boxes = document.querySelectorAll(".droppDownDivBoxes");



boxes.forEach(element => {
    element.addEventListener('click', (event) => {

        document.getElementById('changingPart').innerText = event.target.innerText;
        document.querySelector('.dropDownBanks').style.display = 'none'

    })
})

let bankBoxes = document.querySelectorAll('.upperBankInnerBox');

bankBoxes.forEach(element => {

    element.addEventListener('click', () => {
        document.getElementById('hdfc').style.border = '1px solid #e9e9eb';
        document.getElementById('icici').style.border = '1px solid #e9e9eb';
        document.getElementById('sbi').style.border = '1px solid #e9e9eb';
        document.getElementById('axis').style.border = '1px solid #e9e9eb';
        document.getElementById('kotak').style.border = '1px solid #e9e9eb';
        element.style.border = '1px solid #60b246'

    })
})

// let cardForm = document.getElementById('cardDetailsForm');



const removeAddressDiv = () => {
    let userCity = document.getElementById("userCityName").innerText;
    let userLandmark = document.getElementById("userLandmark").innerText;
    let userPincode = document.getElementById("userPincode").innerText;


    document.getElementById("headingH2").innerText = userCity;
    document.getElementById("h2BelowPara").innerText = userLandmark + " " + userPincode;
    // document.getElementById("headingH2").innerText=userCity;




    document.getElementById("showDetails").style.visibility = "hidden";

}
document.getElementById("confirmAddress").addEventListener("click", removeAddressDiv)








//Show Cart Produts







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


// Otp For Checkout



document.querySelector(".paymentBtn").addEventListener("click",()=>{
    event.preventDefault();
    document.getElementById("otpDiv").style.display="block";




})





document.getElementById("otpConfirm").addEventListener("submit",()=>{


    event.preventDefault();

    let input1= document.getElementById("otpInput1").value;
    let input2= document.getElementById("otpInput2").value;
    let input3= document.getElementById("otpInput3").value;
    let input4= document.getElementById("otpInput4").value;

    let otp = input1+input2+input3+input4;

    
    
    
    
    
    if(otp=="1234"){
        let successUser  = JSON.parse(localStorage.getItem("successUser"))||{};
        let alert = document.getElementById("alert");
        alert.style.color="white";
        alert.style.backgroundColor="green";
        alert.style.border="1px solid green";
        alert.innerHTML=`${successUser.name} Order Confirmed <i class="fa-sharp fa-solid fa-circle-check"></i>`;
        document.getElementById("UserSIgnUpLogInModal").style.display="none"
        document.querySelector("body").style.overflow="auto"
        document.getElementById("otpDiv").style.display="none";
        document.getElementById("deliveryImg").style.display="block";
        alert.style.display="block";
        setTimeout(() => {
            alert.style.display="none";
            location.href="../index.html"
            localStorage.removeItem("cartProducts");
            localStorage.removeItem("couponApplied");
            document.getElementById("deliveryImg").style.display="none";
            
        }, 2500);
        
        


    }
    else{
        
        let alert = document.getElementById("alert");
        alert.style.color="white";
        alert.style.backgroundColor="rgb(224, 53, 70)";
        alert.style.border="1px solid rgb(224, 53, 70)";
        alert.innerHTML=`Wrong OTP <i class="fa-solid fa-xmark"></i>`;
        alert.style.display="block";
        setTimeout(() => {
            alert.style.display="none";

            document.getElementById("otpInput1").value="";
            document.getElementById("otpInput2").value="";
            document.getElementById("otpInput3").value="";
            document.getElementById("otpInput4").value="";

            
        }, 2500);
        
    }
    



})





