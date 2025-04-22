// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos el formulario por su ID
    const formulario = document.getElementById("formulario-contacto");
  
    // Escuchamos el evento submit
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenimos que el formulario se envíe de forma tradicional
  
      // Obtenemos los valores ingresados por el usuario
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
      const estado = document.getElementById("mensaje-estado");
  
      // Validamos que todos los campos estén completos
      if (nombre === "" || email === "" || mensaje === "") {
        estado.textContent = "Por favor completa todos los campos.";
        estado.style.color = "red";
        return;
      }
  
      // Validamos el formato del correo electrónico
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexCorreo.test(email)) {
        estado.textContent = "El correo ingresado no es válido.";
        estado.style.color = "red";
        return;
      }
  
      // Si todo está correcto, mostramos un mensaje de éxito
      estado.textContent = "Mensaje enviado correctamente.";
      estado.style.color = "lightgreen";
  
      // Limpiamos el formulario
      formulario.reset();
    });
  });
  