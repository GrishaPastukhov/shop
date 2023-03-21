'use strict'
const randomId = () =>{
    return Math.floor(Math.random()*100)
}

const products = document.querySelectorAll(".hits__content--item")
products.forEach(el => {
    el.setAttribute('id', randomId())
    const btn = el.querySelector(".hits__content--info-btn")
    const title = el.querySelector(".hits__content--item--title").innerText
    const price = el.querySelector(".hits__content--item--price").innerText
    

    btn.addEventListener("click", () => {
                const dustStorage = localStorage.getItem("dust") || "[]"
                const dust = JSON.parse(dustStorage)
                const product = {title, price}
                localStorage.setItem("dust", JSON.stringify([...dust, product]))
            })
})
const checkoutBtn = document.getElementById('cart');
const checkoutPage = document.querySelector('.checkout');
const deleteBtn = document.querySelector('.checkout__header_btn');
const checkoutList = document.querySelector('.checkout__list');
const dustFunc = function(){
    const dust = localStorage.getItem('dust');
    return JSON.parse(dust);
}
const dust = dustFunc();
checkoutBtn.addEventListener('click', function(){
    if(checkoutPage.classList.contains('hideMenu')){
        checkoutPage.classList.remove('hideMenu')
    }
    else{
        checkoutPage.classList.add('hideMenu')
    }
})
const newElement = function(tagName, className,text){
    const element = document.createElement(tagName);
    if(!!className){
        element.classList.add(className);
    }
    if(!!text){
        element.append(text);
    }
    return element;
}
const createCheckoutItem = function(itemName, itemPrice){
    const li = newElement('li','listItem');
    const name = newElement('p','listItemName',itemName);
    const price = newElement('p', 'listItemPrice',itemPrice);
    li.append(name , price);
    return li;
}
deleteBtn.addEventListener('click', function(){
    checkoutList.innerHTML = '';
    localStorage.clear();
})
dust.map(function({title, price}){
    const newItem = createCheckoutItem(title, price);
    checkoutList.append(newItem);
})
const btn = document.querySelector(".hits__content--info-btn");
btn.addEventListener('click', () => {
    checkoutList.innerHTML = '';
    dust.map(function({title, price}){
        const newItem = createCheckoutItem(title, price);
        checkoutList.append(newItem);
    })
}
);