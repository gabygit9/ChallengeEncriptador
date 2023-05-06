 
    function encriptacion() {
        const mensaje = document.getElementById("mensaje");
        const mensajeOriginal = mensaje.value;
        const msj = mensajeOriginal.toLowerCase();
        return msj.replace(/e/g,"enter")
                  .replace(/i/g,"imes")
                  .replace(/a/g,"ai")
                  .replace(/o/g,"ober")
                  .replace(/u/g,"ufat");
    }

    function valido(event) {
        event.preventDefault();
        textoEncriptado= encriptacion(mensaje.value);
        document.querySelector(".texto-encriptado").value= textoEncriptado;
        const cuadroBlanco = document.getElementById("codigo");
        cuadroBlanco.style.display = "none";
        const contenedor= document.getElementById("contenedor");
        contenedor.style.display= "block";
        console.log('Mensaje encriptado:', encriptacion());
    }
    
    const botonEncriptar = document.getElementById('encriptar');
    botonEncriptar.addEventListener('click', valido);


    function desencriptacion (){
        const mensaje = document.getElementById("mensaje");
        const mensajeOriginal = mensaje.value;
        let msj = mensajeOriginal.toLowerCase();
        return msj.replace(/enter/g,"e")
                  .replace(/imes/g,"i")
                  .replace(/ai/g,"a")
                  .replace(/ober/g,"o")
                  .replace(/ufat/g,"u");
    }

    function validoDes(event) {
        event.preventDefault();
        desencriptacion();
        document.querySelector(".texto-encriptado").value=desencriptacion();
        const cuadroBlanco = document.getElementById("codigo");
        cuadroBlanco.style.display = "none";
        const contenedor= document.getElementById("contenedor");
        contenedor.style.display= "block";
        console.log(desencriptacion());
    }

    const botonDesencriptar = document.getElementById("desencriptar");
    botonDesencriptar.addEventListener('click', validoDes);

    function copyToClickBoard(){
        let content = document.querySelector(".texto-encriptado");
       content.select();
       document.execCommand('copy');
    }

    const botonCopiar= document.getElementsByClassName("copiar")[0];
    botonCopiar.addEventListener('click', copyToClickBoard);
 
    
