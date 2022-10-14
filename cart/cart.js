let data = [
  {
    id: "1",
    img: "https://b.zmtcdn.com/data/dish_photos/973/fffe02a7ab75defb1fb3ee0848de8973.jpg",
    time: "55 min",
    place: "The Burger Club",
    food: "Burger",
    rating: "4",
    tags: "Cafe, Coffee, Burger, Fast Food, Beverages",
    price: "150",
    logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    status: "7025+ orders placed from here recently",
  },

  {
    id: "2",
    img: "https://b.zmtcdn.com/data/dish_photos/d27/a314dba2e96843affe75d77cbe084d27.jpg",
    time: "49 min",
    place: "Wendy's",
    food: "Burger",
    rating: "4",
    tags: "Burger, Fast Food, American, Beverages",
    price: "150",
    logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    status: "4550+ orders placed from here recently",
  },{
    "id": "3",
    "img": "https://b.zmtcdn.com/data/dish_photos/a96/0fb2da81f692b0fdcedabb0c844f9a96.jpg",
    "time": "56 min",
    "place": "Burgrill - The Win Win Burger",
    "food": "Burger",
    "rating": "4",
    "tags": "Burger, Fast Food, Healthy Food, Beverages, Desserts",
    "price": "150",
    "logo": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    "status": "2200+ orders placed from here recently"
  },
  {
    "id": "4",
    "img": "https://b.zmtcdn.com/data/dish_photos/0ed/5133eb720cb5f09a367ab0df144c90ed.jpg",
    "time": "60 min",
    "place": "Zaika Restaurant",
    "food": "Burger",
    "rating": "4.2",
    "tags": "North Indian, Chinese, Mughlai, Momos, Fast Food",
    "price": "200",
    "logo": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    "status": "900+ orders placed from here recently"
  }











];

localStorage.setItem("cart", JSON.stringify(data));

var fooddata = JSON.parse(localStorage.getItem("cart")) || [];
console.log(fooddata);

// delete function

const del = (ele, index) => {
  //    alert(`working ${ele.price}`)
  fooddata.splice(index, 1);

  console.log(fooddata);

  get(fooddata);
};

const get = (data) => {
  document.getElementById("tbody").innerText = "";


  var total=0;
//   console.log(typeof(total))
  data.map((ele, index) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "line");
    // tr.style.borderBottom = "1px solid red";
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let img = document.createElement("img");
    img.src = ele.img;
    td1.append(img);
    img.setAttribute("id", "food");
    td1.setAttribute("class", "food");

    td2.innerText = `₹${ele.price}`;
total+=Number(ele.price)






    let boxes = document.createElement("div");
    let h1 = document.createElement("h4");
    var h2 = document.createElement("h4");
    let h3 = document.createElement("h4");
    h1.innerText = "-";
    h2.setAttribute("data-qty", "1");
    let qt = h2.dataset.qty;
    h2.innerText = qt;
    // h2.setAttribute("data-qty","1")
    h2.setAttribute("id", "tq");
    h3.innerText = "+";
    h3.addEventListener("click", () => {
      add(h2, ele, td4);
    });
    h1.addEventListener("click", () => {
      remove(h2, ele, td4, index);
    });

    boxes.append(h1, h2, h3);
    td3.append(boxes);

    boxes.setAttribute("id", "quantity");
    td4.innerText = `₹${ele.price}`;

    td5.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

    td5.addEventListener("click", () => {
      del(ele, index);
    });

    tr.append(td1, td2, td3, td4, td5);
    // let hr = document.createElement("hr");
    // hr.style.width = "2000px"
    // hhr.style.margin = 'auto';

    let hr = document.createElement("div");
    hr.setAttribute("id", "hr");

    document.getElementById("tbody").append(tr, hr);

    console.log(td1);
  });
//   console.log(total);







price(total)








//   addddd
  const add = (h2, ele, td4) => {
    let val = h2.innerText;
    let cr = h2.dataset.qty;
//   let newt=total+Number(ele.price)
    Number(cr);
  
    cr++;
  
    h2.innerText = cr;
    h2.dataset.qty = cr;
    let p = ele.price;
    console.log(p);
    Number(p);
    p = p * cr;
   let newt=total+ Number(ele.price)*cr;




   let pri=localStorage.getItem('price')

  parseInt(pri);
pri+=(Number(ele.price)*cr);
console.log(pri);

price(pri)



    td4.innerText = `₹ ${p}`;
  
    h2.setAttribute("data-qty", cr);
  
    // console.log("t",newt);



  };
  
  





//   remove----------------------------------------------------------------





const remove = (h2, ele, td4, idx) => {
    let val = h2.innerText;
    let cr = h2.dataset.qty;
  
    Number(cr);
  
    cr--;
  
    if (cr <= 0) {
      del(ele, idx);
      return;
    }
  
    h2.innerText = cr;
    h2.dataset.qty = cr;
    let p = ele.price;
  //   console.log(p);
    Number(p);
    p = p * cr;
    let newmp=total- Number(ele.price)*cr;

let pr=localStorage.getItem('price')
pr=pr- Number(ele.price)*cr;

price(pr)


    td4.innerText = `₹ ${p}`;
  
    h2.setAttribute("data-qty", cr);
  
    console.log(newmp);



  };




};

get(fooddata);







// const add = (h2, ele, td4) => {
//   let val = h2.innerText;
//   let cr = h2.dataset.qty;

//   Number(cr);

//   cr++;

//   h2.innerText = cr;
//   h2.dataset.qty = cr;
//   let p = ele.price;
//   console.log(p);
//   Number(p);
//   p = p * cr;

//   td4.innerText = `₹ ${p}`;

//   h2.setAttribute("data-qty", cr);

//   console.log("t",total);
// };












// const remove = (h2, ele, td4, idx) => {
//   let val = h2.innerText;
//   let cr = h2.dataset.qty;

//   Number(cr);

//   cr--;

//   if (cr <= 0) {
//     del(ele, idx);
//     return;
//   }

//   h2.innerText = cr;
//   h2.dataset.qty = cr;
//   let p = ele.price;
// //   console.log(p);
//   Number(p);
//   p = p * cr;

//   td4.innerText = `₹ ${p}`;

//   h2.setAttribute("data-qty", cr);

//   console.log(h2.dataset);
// };







function price(total){



    if(fooddata.length ==0){
        document.getElementById("box-2").innerText='';
    }
    else{
    document.getElementById("box-2").innerText='';
localStorage.setItem("price",total);

    let tmp= document.createElement("div");
let h2= document.createElement("h2");
h2.innerText=`Bill Summary`;
let p1= document.createElement("p");
p1.innerText=`Item total       ₹ ${total}.00`
let p2= document.createElement("p");
p2.innerText=`Delivary charges ₹20` 

let p3= document.createElement("p");
p3.innerText=`Govt.taxes ₹10` 
let p4= document.createElement("p");
p4.innerText=`Feeding India donation ₹2` 
let p5= document.createElement("h3");

let gt=total+20+10+2;
p5.innerText=`Grand Total ₹${gt}`

let cout=document.createElement("div");
cout.setAttribute('id',"odr")
// cout.style.backgroundColor="rgb(247, 93, 93)";
let order=document.createElement("h2")
order.innerHTML=`Place order`
cout.append(order)

let input=document.createElement("input");
input.type="text"
input.setAttribute("placeholder","Use coupons")
tmp.append(h2,p1,p2,p3,p4,p5,input,cout);
document.getElementById("box-2").append(tmp)

}
}