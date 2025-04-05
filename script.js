
document.getElementById("add-to-cart-btn").addEventListener("click",()=>{
   const name=document.getElementById("name").value;
   const quantity=document.getElementById("quantity").value;
//    console.log(name,quantity)
setToLocalStorage(name,quantity)





})
const displayProduct=(name,quantity)=>{
   const container=document.getElementById("cart-container")
   const li=document.createElement("li")
       li.innerText=`${name}:${quantity}
       `
       container.appendChild(li)

}


const getCartFromLocalStorage=()=>{
let cart={};
const cartFromLocalStorage=localStorage.getItem("cart")
if(cartFromLocalStorage){
  cart=JSON.parse(cartFromLocalStorage)
//   console.log("nai")
}
return cart
}
const setToLocalStorage=(name,quantity)=>{
   const localCart=getCartFromLocalStorage()
   localCart[name]=quantity;
   // localCart["quantity"]=quantity;
   localStorage.setItem("cart",JSON.stringify(localCart))

   
}

const displayLocalStorageData=()=>{
   // console.log("nai")
   const item=getCartFromLocalStorage()
   console.log(item)
   for (const key in item) {
         displayProduct(key,item[key])
         
       }
     
   
   
 
   
   
   
   }

displayLocalStorageData()

