let  data =[{
    
        "id": "1",
        "img": "https://b.zmtcdn.com/data/dish_photos/973/fffe02a7ab75defb1fb3ee0848de8973.jpg",
        "time": "55 min",
        "place": "The Burger Club",
        "food": "Burger",
        "rating": "4",
        "tags": "Cafe, Coffee, Burger, Fast Food, Beverages",
        "price": "150",
        "logo": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        "status": "7025+ orders placed from here recently"
      
},

{
    "id": "2",
    "img": "https://b.zmtcdn.com/data/dish_photos/d27/a314dba2e96843affe75d77cbe084d27.jpg",
    "time": "49 min",
    "place": "Wendy's",
    "food": "Burger",
    "rating": "4",
    "tags": "Burger, Fast Food, American, Beverages",
    "price": "150",
    "logo": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    "status": "4550+ orders placed from here recently"
  }
]



function show(){
let divt= document.createElement("div");
  let imgdiv= document.createElement("div");
  let text = document.createElement("div");
let order = document.createElement("h3");

let h4 = document.createElement("h4");
h4.innerText=`Delivery in ${data[0].time}`;
divt.append(h4);
document.getElementById("box-2").append(divt);
  order.innerText =`Your Order`;
  text.append(order)
  data.map(function(ele,index){
   
let flexdiv= document.createElement("div");

flexdiv.setAttribute("id","itbox")
let img = document.createElement("img")
img.src =ele.img;
let title = document.createElement("h3");
title.innerText=ele.food;


let name = document.createElement("h3");
name.innerText=ele.food;


console.log(name);
let pre = document.createElement("p")
pre.innerText=`₹${ele.price}`;
flexdiv.append(img,title)
imgdiv.append(flexdiv);
text.append(name,pre);
document.getElementById("box-1").append(imgdiv);

document.getElementById("box-2").append(text);

  })

 console.log(text);
 let div6= document.createElement("div");

 let det= document.createElement("h3");
 det.innerText=` your details`
 div6.append(det);
 document.getElementById("box-2").append(div6);









 let div7= document.createElement("div");
 let ord= document.createElement("h3");
 ord.innerText=` Order for someone else`
 let send = document.createElement("p")
 send.innerText=`send personalized message and e-card `
 div7.append(ord,send);
 document.getElementById("box-2").append(div7);
}

show()