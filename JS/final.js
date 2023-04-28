let datos = localStorage.getItem("producto");
 datos = JSON.parse(datos);
const card = document.querySelector('.card')
const regresar = document.querySelector('.btn')

document.addEventListener('DOMContentLoaded',()=>{
    const {image, title, price} = datos[0];
    console.log(datos[0]);
   const cardFinal = document.createElement("div")
            cardFinal.classList.add("product");
            cardFinal.innerHTML =
            `<div class="container_card_image"><img class="image_card"  src="${image}"></div>
            <div class="productInfo">
                <div class="productName">
                   ${title}
                </div>
                <div class="productPrices">$${price}</div>
            </div>
            `
            card.appendChild(cardFinal) 
})

regresar.addEventListener('click', ()=>{
    location.assign('../HTML/principal.html')
})