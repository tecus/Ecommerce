const carrusel = document.querySelector('.carrusel')
const modalCerrar = document.querySelector('.modal_close')
const modal = document.querySelector('.ventana_modal')
const product = document.querySelector('.product')
const card = document.querySelector('#cards')
const fotosCarrusel = ["../IMG/Carrusel/foto1.jpg", "../IMG/Carrusel/foto2.jpg", "../IMG/Carrusel/foto3.jpg", "../IMG/Carrusel/foto4.jpg" ]
const modalBody = document.querySelector('.modal_body')
const btnCancel = document.querySelector('btn_modal_cancelar')


let indice = 0
setInterval(()=>{
    if(indice<fotosCarrusel.length){
        carrusel.src=fotosCarrusel[indice]
        indice++
    }else{
        indice = 0
    }
},2000)


const  traer = async () => {
    let elementos = null
    const url = "https://fakestoreapi.com/products"
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    elementos = Array.from(datos)
    datos.forEach(product => {
        const {image, title, price, id} = product
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML =
        `<div class="container_card_image"><img class="image_card"  src="${image}"></div>
        <div class="productInfo">
            <div class="productName">
               ${title}
            </div>
            <div class="productPrices">$${price}</div>
        </div>
        <button class="btn" id="${id}">
            Agregar al Carrito
        </button>
        `
        card.appendChild(div);
    });
    let seleccionado = null
    card.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn')){
            limpiarCarrito ()
            seleccionado = elementos.filter(tarjeta => tarjeta.id == e.target.id)
            modal.style.display="flex"
            console.log(seleccionado);
            const {image, title, price, id} = seleccionado[0] 
            const divmodal = document.createElement("div")
                    divmodal.classList.add("product");
                    divmodal.innerHTML =
                    `<div class="container_card_image"><img class="image_card"  src="${image}"></div>
                    <div class="productInfo">
                        <div class="productName">
                           ${title}
                        </div>
                        <div class="productPrices_modal">$${price}</div>
                    </div>
                    <div class="container_botones_modal">
                    <button class="btn_modal_comprar">comprar</button>
                    <button class="btn_modal_cancelar">cancelar</button>
                    </div
                    `
                    modalBody.appendChild(divmodal)
                    modal.addEventListener('click', (e)=>{
                        if(e.target.classList.contains('btn_modal_cancelar')){
                            modalClose() 
                        }else if(e.target.classList.contains('btn_modal_comprar')){
                            if(confirm(`Seguro que desea compar ${seleccionado[0].title}`)===true){
                                localStorage.setItem('producto', JSON.stringify(seleccionado))
                                location.assign('./final.html')
                            }
                        }
                    })
        }
    })
}
traer()
modalCerrar.addEventListener('click', modalClose)

function limpiarCarrito (){
    while (modalBody.firstChild){       
        modalBody.removeChild(modalBody.firstChild)
    }
}

function modalClose() {
    modal.style.display='none'
}

