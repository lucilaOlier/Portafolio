const btnEnviar= document.getElementById('btn__enviar')
const nombre = document.getElementById('name')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const parrafo = document.getElementById('warning')



btnEnviar.addEventListener("click", e=>{
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let warning = ""
    let entrar = false
    parrafo.innerHTML = ""
    //val = 0;
    
    if(nombre.value == ''){
        warning += `Complete el nombre <br>`
        //val ++;
        entrar = true
        
    }
    if(nombre.value.length > 50){
        warning += `Escribir bien el nombre <br>`
        entrar = true
        //val ++;
    }
    if (email.value == ''){
        warning += `Complete el email <br>`
        entrar = true
        //val ++;
    }
    if(!regexEmail.test(email.value)){
        warning += ` Escribir bien el email <br>`
        entrar = true 
       // val ++;
    }
    if(asunto.value == ''){
        warning += `Complete el asunto <br>`
        entrar = true
       // val ++;
    }
    if(asunto.value.length > 50){
        warning += `Escribir con menos de 50 caracteres <br>`
        entrar = true
        //val ++;
    }  
    if(mensaje.value == ''){
        warning += `Complete el mensaje <br>`
        entrar = true
       // val ++;
    }
    if(mensaje.value.length > 300){
        warning += `Escribir el mensaje con menos caracteres <br>`
        entrar = true
       // val++;
    }
    if(entrar){
        parrafo.innerHTML = warning;
    }
   /* if(val == 0){
        btnEnviar.disabled= false;
    }else{
        btnEnviar.disabled = true;
        console.log("funciona ")
    }*/
    console.log("se envio")
})
    