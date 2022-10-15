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
    document.getElementById('walletIcon').setAttribute('src', './walletIcon1.png')
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

    document.getElementById('cardIcon').src = './CardIcon.png';
    document.getElementById('bankingIcon').src = './netBankingIcon.png';
    document.getElementById('upiIcon').src = './upiIcon.png';

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
    document.getElementById('cardIcon').setAttribute('src', './CardIcon1.png')
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

    document.getElementById('walletIcon').src = './walletIcon.png';
    document.getElementById('bankingIcon').src = './netBankingIcon.png';
    document.getElementById('upiIcon').src = './upiIcon.png';

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
    document.getElementById('bankingIcon').setAttribute('src', './netBankingIcon1.png')
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

    document.getElementById('cardIcon').src = './CardIcon.png';
    document.getElementById('upiIcon').src = './upiIcon.png';
    document.getElementById('walletIcon').src = './walletIcon.png';

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
    document.getElementById('upiIcon').setAttribute('src', './upiIcon1.png')
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

    document.getElementById('cardIcon').src = './CardIcon.png';
    document.getElementById('bankingIcon').src = './netBankingIcon.png';
    document.getElementById('walletIcon').src = './walletIcon.png';

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
        location.href="index.html"
    }, 4800);
})




//Show Cart Produts


let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))||[];

showProducts(cartProducts)
function showProducts(data){

    if(data.length==0){
        document.getElementById("emptyCart").style.display="block";
        document.getElementById("divForCartDataUpperDiv").style.display="none";
    }
    else{
        
        document.getElementById("emptyCart").style.display="none";
        document.getElementById("divForCartDataUpperDiv").style.display="grid";

        displayProducts(data);



    }




}






function displayProducts(products) {
  document.querySelector("#divForCartData").innerText = "";
  products.map(function (elem, index,arr) {
    let productDiv = document.createElement("div");
    let productDescription = document.createElement("div");
    let prodcutimg = document.createElement("img");
    let productName = document.createElement("p");
    let deleteIcon = document.createElement("div");
    let amountDiv = document.createElement("div");
    let qtyDiv = document.createElement("div");
    let priceDiv = document.createElement("div");
    let discountAmt = document.createElement("p");
    let actualAmt = document.createElement("h4");

    prodcutimg.setAttribute("src", elem.img);
    productName.innerText = elem.food+" "+elem.place;
    productName.setAttribute("class","cartName")
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    qtyDiv.innerHTML =
      '<p>Quantity</p><span id="qtySpan"></span> : <select id="mySelect"> <option value="1" checked >1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select>';
    qtyDiv.childNodes[3].value = elem.qty||1;
    qtyDiv.childNodes[3].addEventListener("change", function () {
      changeQty(index,arr);
    });
    // console.log(deleteIcon.childNodes);
    deleteIcon.childNodes[0].addEventListener("click", function () {
      deleteItem(elem, index);
    });
    discountAmt.innerText = (Number(elem.price)+Number(elem.price)*10/100).toFixed(1);
    actualAmt.innerText = Number(elem.price).toFixed(1);
    // Quantity Selecter
    priceDiv.append(discountAmt, actualAmt);
    productDescription.append(prodcutimg, productName, deleteIcon);
    productDescription.setAttribute("class", "productDescription");
    amountDiv.append(qtyDiv, priceDiv);
    amountDiv.setAttribute("class", "amountdiv");
    productDiv.append(productDescription, amountDiv);
    // productDiv.setAttribute("src", "../allProducts/products.html");
    productDiv.setAttribute("target", "_partent");
    productDiv.addEventListener("click", function () {
      showProductMain(elem);
    });
    document.getElementById("divForCartData").append(productDiv);
    productDiv.setAttribute("class", "productDiv");
    qtyDiv.setAttribute("class", "qtyDiv");
   });
    // document.getElementById("billItems").innerText = cartProducts.length;
    document.getElementById("ItemTotal").innerText = bagMrp(cartProducts).toFixed(1);
    if (localStorage.getItem("couponApplied") == 1) {
      document.getElementById("offByPromo").innerText = ((((bagOrignalPrice(cartProducts))/100)*10).toFixed(1));
    } else {
      document.getElementById("offByPromo").innerText = 0;
    }
    document.getElementById("amountTotal").innerText = (getTotal(cartProducts)).toFixed(1);
    document.querySelector(".paymentBtn").value =` Pay ₹${(getTotal(cartProducts)).toFixed(1)}`

    // document.getElementById("grandTotal").innerText =
    //   document.getElementById("total").innerText;
  
}







function showProductMain() {
    // window.location.href = "../allProducts/product.html";
    // localStorage.setItem("specificProduct", elem);
  }
  
  function getShipping(arr) {
    if (bagMrp(arr) >= 499) {
      return "0";
    }
    return "70";
  }
  function bagDiscount(arr) {
    return (
      arr.reduce(function (sum, ele) {
        return sum + +ele.price;
      }, 0) - bagOrignalPrice(arr)
    );
  }
  function bagDiscount1(arr){
    return(arr.reduce(function (sum, ele) {
      return sum + +ele.strikedoffprice;
    }, 0));
  
    
  }
  
  function bagMrp(arr) {
    return arr.reduce(function (sum, ele) {
      return +sum + +ele.price;
    }, 0);
  }
  
  
  function bagOrignalPrice(arr) {
    var res =arr.reduce(function (sum, ele) {
      return +sum + +ele.price;
    }, 0);
    return res;
  }
  
  function getTotal(cartProducts) {
    return (
      bagOrignalPrice(cartProducts)-Number(document.getElementById("offByPromo").innerText)
    );
  }
  
  function changeQty(i,arr) {
    var qtyValue = event.target.value;
    var priceOfItem = arr[i].price;
    // var discountItem = elem.strikedoffprice;
    var qtyItem = arr[i].qty ||1;
  
    arr[i].price = (Number(priceOfItem) / Number(qtyItem)) * Number(qtyValue);
    // elem.strikedoffprice =
    //   (Number(discountItem) / Number(qtyItem)) * Number(qtyValue);
    arr[i].qty = qtyValue;
    localStorage.setItem("cartProducts", JSON.stringify(arr));
    showProducts(arr);
  }
  
  function deleteItem(elem, index) {
    var maindiv = event.target.parentElement.parentElement.parentElement;
    maindiv.setAttribute("class", "animation");
    maindiv.innerText = "";
    let warning = document.createElement("h4");
    warning.setAttribute("class", "removeWarning");
    let yesOrNo = document.createElement("div");
    yesOrNo.setAttribute("class", "yesOrNo");
    let yesButton = document.createElement("button");
    let noButton = document.createElement("button");
  
    warning.innerText = "Remove item from Bag?";
    yesButton.innerText = "Yes";
    yesButton.addEventListener("click", function () {
      removeItemFromCart(index);
    });
    noButton.innerText = "No";
  
    yesOrNo.append(yesButton, noButton);
    maindiv.append(warning, yesOrNo);
    noButton.addEventListener("click", function () {
      showProducts(cartProducts);
    });
  }
  
  function removeItemFromCart(index) {
    cartProducts.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    showProducts(cartProducts);
  }
  

  document.querySelector("#applyPromoCode").addEventListener("click", applyCoupon);
  
  function applyCoupon() {
    event.preventDefault();
    if (document.getElementById("promoCodeValue").value == "Zomato10") {
      localStorage.setItem("couponApplied", 1);
    } else {
      localStorage.setItem("couponApplied", 0);
    }
    showProducts(cartProducts);
  }