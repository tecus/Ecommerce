import {usuarios} from "./user.js";
console.log(usuarios);

const icon = document.querySelector('#icon')
const inputs = document.querySelector('#input_usuario')
const inputChange = document.querySelector('#input_password')
const  btn = document.querySelector('.login')
const mensaje = document.querySelector('.mensaje')

icon.addEventListener('mouseenter',()=>{
    inputChange.type=="password" ?   inputChange.type='text': ''
})

icon.addEventListener('mouseout',()=>{
    inputChange.type=="text" ?   inputChange.type='password': ''
})

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let validador = false
    usuarios.forEach((item)=>{
        if(inputs.value == item.username && inputChange.value == item.userpass){    
            /*window.location.href = 'HTML/principal.html'*/
            location.assign('HTML/principal.html')
            validador = true
        }

    })
    if(validador==false){
        if(!mensaje.firstChild){
            console.log('tiene un hijo');
            const div = document.createElement("div");
            div.textContent = "Datos Incorrectos"
            div.classList.add("textmensaje");
            mensaje.appendChild(div)
    
            setTimeout(()=>{
                div.remove()
            },3000)
        }
    }
})