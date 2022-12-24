window.onload=Iniciar;

function Iniciar(){

    var botonEncriptar = document.getElementById("botonEncriptar");
     botonEncriptar.addEventListener('click',EncriptarMensaje);

     var botonEncriptar = document.getElementById("botonDesencriptar");
     botonDesencriptar.addEventListener('click',DesencriptarMensaje);

     let textoOculto  = document.getElementById("textoOculto");

 

     let botonCopiar = document.getElementById("botonCopiar");
     botonCopiar.addEventListener('click',CopiarMensaje);

function ObtenerTexto(){

    let texto = document.getElementById('textoDesencriptado').value;
    return texto;
}
function EncriptarMensaje(){

    let textoDesencriptado = ObtenerTexto();
    let textoEncriptado;

    if(typeof(textoDesencriptado)==='string'){
        textoDesencriptado=textoDesencriptado.replaceAll('e','enter');
        textoDesencriptado=textoDesencriptado.replaceAll('i','imes');
        textoDesencriptado=textoDesencriptado.replaceAll('a','ai');
        textoDesencriptado=textoDesencriptado.replaceAll('o','ober');
        textoDesencriptado=textoDesencriptado.replaceAll('u','ufat'); 

           textoEncriptado=textoDesencriptado; 
    }

mostrarMensaje(textoEncriptado);

}

function mostrarMensaje(texto){

    

     mostradorTextoEncriptado=document.getElementById("texto");
    document.getElementById('muneco').style.display="none";
    document.getElementById('textoDeAdvertencia').style.display="none";
    document.getElementById('textoDeAdvertencia2').style.display="none";
    document.getElementById('botonCopiar').style.display="block";
    document.getElementById('rectangulo').style.height="700px";
    mostradorTextoEncriptado.innerHTML = texto;
    document.getElementById("texto").style.visibility="visible";
    textoOculto = texto;
    console.log("texto oculto" + textoOculto);
}

function DesencriptarMensaje(){

    let textoEncriptado = ObtenerTexto();
    let textoDesencriptado;

    if(typeof(textoEncriptado)==='string'){
        textoEncriptado=textoEncriptado.replaceAll( 'enter','e');
        textoEncriptado=textoEncriptado.replaceAll( 'imes','i');
        textoEncriptado=textoEncriptado.replaceAll('ai','a');
        textoEncriptado=textoEncriptado.replaceAll('ober','o');
        textoEncriptado=textoEncriptado.replaceAll('ufat','u'); 

        textoDesencriptado=textoEncriptado; 
    }

mostrarMensaje(textoDesencriptado);


}

function CopiarMensaje(){
    mostradorTextoEncriptado=document.getElementById("texto").textContent;

    console.log(mostradorTextoEncriptado);

       if(navigator.clipboard){
        navigator.clipboard.writeText(mostradorTextoEncriptado).then(()=>{
            console.log('text copy');
        })
       }
    



}


}


