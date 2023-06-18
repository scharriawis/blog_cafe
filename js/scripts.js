const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const formNombre = document.querySelector('#nombre');
const formEmail = document.querySelector('#email');
const formMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

formNombre.addEventListener('input', leerFormulario);
formEmail.addEventListener('input', leerFormulario);
formMensaje.addEventListener('input', leerFormulario);

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();
    //validar formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === ''|| email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;//corta el ciclo...
    }
    
    mostrarAlerta('Todos los datos han sido enviado correctamente');
    
});

function leerFormulario(e){
    datos[e.target.id] = e.target.value
    console.log(datos); 
}

function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('envio');
    }
    formulario.appendChild(alerta);

    //establecer el tiempo de espera
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
