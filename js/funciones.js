/* aqui van todas las funcionalidades que usaré para esat app web*/

/* funcion que guarda y compara los datos para el registro de usuario*/
function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    
    // Verificar si el correo electrónico ya existe
    var usuariosRegistrados = localStorage.getItem("usuariosRegistrados");
    if (usuariosRegistrados) {
      usuariosRegistrados = JSON.parse(usuariosRegistrados);
      if (usuariosRegistrados[correo]) {
        alert("El correo electrónico ya ha sido utilizado. Por favor, utilice otro correo electrónico.");
        return;
      }
    } else {
      usuariosRegistrados = {};
    }
    
    // Guardar los datos del usuario en el almacenamiento local
    usuariosRegistrados[correo] = {
      "nombre": nombre,
      "contrasena": contrasena
    };
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados))
    alert("Usuario registrado con éxito");
    
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "index.html";
  }

  