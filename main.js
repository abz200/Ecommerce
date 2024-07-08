
let subImg =document.getElementsByClassName("sub-img");
let submit =document.getElementById("submit");
let protitle = document.getElementById("pro-title");
let price=document.getElementById("price-n");
let size=document.getElementById("list");
let qtn=document.getElementById("qtn");
let shoppingIcon =document.querySelector(".shopping-cart");
let cartBox =document.querySelector(".cart-box");
let closeCart =document.querySelector("#close-cart");

let subtotal = document.querySelector("#subtotal");

let bar =document.querySelector(".bar");
let header_Link= document.querySelector(".links ul")
let close_header=document.querySelector("#close-link")



let srcImg= document.querySelector(".src-img")
//let mainImg =document.querySelector(".src-img").src;


//Add active class To Header Link
bar.addEventListener("click",function(){
header_Link.classList.add("active");
})

close_header.addEventListener("click",function(){
    header_Link.classList.remove("active")
})



//change product photo
function changeSrc(img){
    srcImg.src = img;
}



//Add class active to cart

shoppingIcon.addEventListener("click",function(){
  cartBox.classList.add("active");
})

closeCart.addEventListener("click",function(){
    cartBox.classList.remove("active");
  })



//create Product
let proArr;

if(localStorage.product !=null){
    proArr =JSON.parse(localStorage.product);
}else{
    proArr=[];
}

submit.onclick = function(){
let proObj ={
    img:srcImg.src,
    title:protitle.innerHTML,
    price :+(price.innerHTML),
    size:size.value,
    quantity:+(qtn.value),
    // subtotal:function(){
    //     return this.price * this.quantity
    // }
    subtotal: +(price.innerHTML)*+(qtn.value)
}
console.log("price"+proObj.price);
console.log("pricetye"+typeof proObj.price);
console.log("qantity"+proObj.quantity);
console.log("qantittype"+typeof proObj.quantity);
//console.log("subtotal"+proObj.quantity*proObj.price);
console.log("subtotaltype"+proObj.subtotal);
console.log("subtotaltype"+ typeof proObj.subtotal);
proArr.push(proObj);

window.localStorage.setItem("product", JSON.stringify(proArr));

clearData();
showData();
totalSubtotal();
}




//Read Product

function showData(){
    let table='';
   

    for(let i=0;i<proArr.length ;i++){
         table+=`<tr>
            
            <td><img src="${proArr[i].img}"></td>
            <td>${proArr[i].title} </td>
            <td>${proArr[i].price}</td>
            <td>${proArr[i].size}</td>
            <td>${proArr[i].quantity}</td>
            <td>${proArr[i].subtotal}</td>
            <td><span class='fa fa-trash-o' title='Delete' onclick="deleteItem(${i})" id="deleteItem"></span>  </td>
        </tr>`;
    }

       document.getElementById("tbody").innerHTML = table;

       if(proArr.length>0)
       {
        document.querySelector("#deleteAll").innerHTML=
        `<button onclick="deleteAll()" id="delete">Delete All (${proArr.length})</button>`
       }else{
        document.querySelector("#deleteAll").innerHTML=""
       }
    

}
showData();



//Delete All

function deleteAll(){
    proArr.splice(0);
    localStorage.clear();
   
    totalSubtotal();
    showData();
}


//Delete Item
function deleteItem(id){
    
    proArr.splice(id,1);
    localStorage.product = JSON.stringify(proArr);
    showData();
    totalSubtotal();
}


//clear Data
function clearData(){

  size.value=size.children[0].value;
   qtn.value=1;
}


 function totalSubtotal(){
    let total=0;
    if(proArr.length >0)
    {
        for(let i=0;i<proArr.length;i++){
            total+=proArr[i].subtotal
        
    }}
    else{
        total=0;
        }
    document.querySelector(".total-subtotal").innerHTML=total;
  
    let totalPrice = document.querySelector(".total-price");
    totalPrice.innerHTML =total;
    
   }
 



      





















//access items

//let imgParent=document.querySelector(".pro-img");
//let imgChild =imgParent.children[0].src;
// let contentParent=document.querySelector(".pro-content");
// let titleChild = contentParent.children[2].innerHTML;
// let priceChild = contentParent.children[3].innerHTML;
// let selectChild = contentParent.children[4].value;
// let qtnChild = contentParent.children[5].innerHTML;

// console.log(titleChild)
// console.log(priceChild)
// console.log(selectChild)
// console.log(qtnChild)


