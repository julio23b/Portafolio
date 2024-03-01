const $form = document.getElementById('form');
const $nombre = document.getElementById('nombre');
const $email = document.getElementById('email');
const $asunto = document.getElementById('asunto');
const $mensaje = document.getElementById('mensaje');

$form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nombreValue = $nombre.value.trim();
    const emailValue = $email.value.trim();
    const asuntoValue = $asunto.value.trim();
    const mensajeValue = $mensaje.value.trim();
    
    
    if(nombreValue === ''){
        setErrorFor($nombre,'No puede dejar el nombre en blanco');
    }else if (!nomvalido(nombreValue)){
        setErrorFor($nombre,'No ingreso un nombre valido');    
    }else{
        setSuccessFor($nombre);
    }

    if(emailValue === ''){
        setErrorFor($email,'No puede dejar el email en blanco');     
    }else if (!isEmail(emailValue)){
        setErrorFor($email,'No ingreso un email valido');
    }else{ 
        setSuccessFor($email);
    }

    if(asuntoValue === ''){
        setErrorFor($asunto,'No puede dejar el asunto en blanco');     
    }else{
        setSuccessFor($asunto);
    }

    if(mensajeValue === ''){
        setErrorFor($mensaje,'No puede dejar el mensaje en blanco');     
    }else{
        setSuccessFor($mensaje);
    }


}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function nomvalido(nombre){
    return /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/.test(nombre)
}