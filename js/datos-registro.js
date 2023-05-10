

function validarFormulario() {
    const usuario= document.getElementById("usuario").value; 
    const contrasena= document.getElementById("contrasena").value; 
   
    // Validar nombre
    if (nombre.length < 10) {
         alert("El nombre debe tener mínimo 10 caracteres");
       return false;
   }
  
    // Validar correo
    var expresionCorreo = /\S+@\S+\.\S+/;
    if (!expresionCorreo.test(usuario)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
  
    // Validar contraseña
    if (contrasena.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }
  
    if (!(/[A-Z]/.test(contrasena))) {
      alert("La contraseña debe tener al menos una letra mayúscula.");
      return false;
    }
  
    if (!(/\d/.test(contrasena))) {
      alert("La contraseña debe tener al menos un número.");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("registro-boton").addEventListener("click", function(event) {
    if (!validarFormulario()) {
      event.preventDefault(); // Cancelar el envío del formulario si no es válido
    } else {
      const boton = document.getElementById("registro-boton");

        boton.addEventListener("click", function() {
        window.location.href = "paginadeinicio.html";
});
    }
  });


function btnRegistrar(){

  const usuario= document.getElementById("usuario").value; 
  const contrasena= document.getElementById("contrasena").value; 

    

    let datosDeUsuario = {
        "datosUsuario": {
            "usuario": usuario,
            "contrasena": contrasena 
        }
    }
    console.log(datosDeUsuario);
    
}



