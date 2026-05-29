function validarNombreApellido(){
    let nombreApellido = document.getElementById("nombreApellido").value;
    let error = document.getElementById("errorNombreApellido");

    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    if(nombreApellido.length < 3){
        error.innerHTML = "minimo 3 letras.";
        return false;
    }
    if(!regex.test(nombreApellido)){
        error.innerHTML = "Solo letras.";
        return false;
    }

    error.innerHTML = "";
    return true;
}
function validarDni(){
    let dni = document.getElementById("dni").value;
    let error = document.getElementById("errorDni");

    if(isNaN(dni)){
        error.innerHTML = "Solo numeros.";
        return false;
    }

    if(dni.length != 8){
        error.innerHTML = "Debe tener 8 numeros.";
        return false;
    }

    error.innerHTML = "";
    return true;
}
function validarFecha(){
    let fecha = document.getElementById("fecha").value;
    let error = document.getElementById("errorFecha");

    let fechaNacimiento = new Date(fecha);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if(mes < 0 || (mes == 0 && hoy.getDate() < fechaNacimiento.getDate())){
        edad--;
    }

    if(edad < 18 || !fecha){
        error.innerHTML = "debe tener mas de 18 años";
        return false;
    }

    error.innerHTML = "";
    return true;
}
function preguntas(){
    let respuestas = document.getElementById("mostrarRespuestas");
    let v1 = validarNombreApellido();
    let v2 = validarDni();
    let v3 = validarFecha();

    if(v1 && v2 && v3){
        let nacionalidad = prompt("¿Cual es tu nacionalidad?");
        let nivel = prompt("¿Cual es tu nivel de programacion?");
        let carrera = prompt("¿Por que elegiste esta carrera?");

        if(nacionalidad == null){
            nacionalidad = "No respondio";
        }
        if(nivel == null){
            nivel = "No respondio";
        }
        if(carrera == null){
            carrera = "No respondio";
        }
        respuestas.innerHTML =
        "Pregunta 1: " + nacionalidad +"<br>"+
        "Pregunta 2: " + nivel +"<br>"+
        "Pregunta 3: " + carrera;
    }else{
        alert("Complete correctamente el formulario.");
    }
}
function enviarFormulario(){
    let v1 = validarNombreApellido();
    let v2 = validarDni();
    let v3 = validarFecha();
    let mensaje = document.getElementById("mensajeExito");

    if(v1 && v2 && v3){
        mensaje.innerHTML = "Formulario enviado correctamente.";
        mensaje.style.color = "green";
    }else{
        mensaje.innerHTML = "Complete correctamente el formulario.";
        mensaje.style.color = "red";
    }
}

