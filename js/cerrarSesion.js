document.getElementById("logout").addEventListener("click", function() {
    // Aquí se debe realizar el proceso para cerrar la sesión del usuario
  localStorage.removeItem("usuario");
  localStorage.removeItem("contrasena");
  window.location.href = "index.html"; // redireccionar a la página de inicio
  });
  