function displayCartItems(){
    let cartItems=document.getElementById('cart-items')
    console.log(cartItems);
    
    let cart=JSON.parse(localStorage.getItem('cart'))
    console.log(cart);
    let total=0;
    cartItems.innerHTML=cart.map((item,index)=>{
        total+=item.price
        return `
         <div class="food-cards">
                <img src="${item.img}" alt="">
                <h3>${item.name}---${item.price}</h3>
                <button onclick="">Remove Item</button>
            </div>
            `


    })
    document.getElementById('total-price').innerText=`${total}/-`
}
displayCartItems()