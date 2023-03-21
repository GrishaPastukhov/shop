"use strict";

const URL = "https://63ff974c29deaba5cb283901.mockapi.io/api/v1/products";



   async function getProducts() {
    const response = await fetch(URL);
    const products = await response.json();
    return products;
   }
   getProducts().then(products => {
    products;
   });

const nameProduct = document.getElementsByClassName("hits__content--item--title");
const priceProduct = document.getElementsByClassName("hits__content--item--price");
const imgProduct = document.getElementsByClassName("hits__content--item--img")
const imgSlider = document.getElementsByClassName("sale__item");
const discountPriceProduct = document.getElementsByClassName("hits__content--item--pricechange")
const discount = document.getElementsByClassName("hits__content--item--discount")



function discountedPrice(price,discount) {
    let discountPrice = price - (price * (discount/100));
    return discountPrice;
}


function dataProducts() {
    getProducts().then(products => {
        products;
        for (let i = 0; i <= products.length; i++) {
            nameProduct[i].innerText = products[i].name;
            priceProduct[i].innerText = "$" + products[i].price;
            discount[i].innerText = products[i].discount + "%";
            discountPriceProduct[i].innerText = "$" + discountedPrice(products[i].price, products[i].discount);
            imgProduct[i].src = products[i].img;
            imgSlider[i].src = products[i].img;//в объекте только одна картинка, а в этой функции присваиваем две, нужно исправить
            
        }
    }); 
}
dataProducts()


for (let product of imgProduct) {
    product.addEventListener("click", function (event) {
        if (event.target.className === "hits__content--item--img") {
            event.target.classList.remove("hits__content--item--img");
            event.target.classList.toggle("quickView");
    } else {
            event.target.classList.toggle("hits__content--item--img");
            event.target.classList.remove("quickView");
    }
    });
}