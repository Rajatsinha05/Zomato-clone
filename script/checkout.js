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



document.querySelector("#cardDetailsForm").addEventListener("submit",()=>{
    event.preventDefault();
    console.log("hello")
    document.getElementById("deliveryImg").style.display="block";
    setTimeout(() => {
    document.getElementById("deliveryImg").style.display="none";
        location.href="../index.html"
    }, 4800);
})




//Show Cart Produts


