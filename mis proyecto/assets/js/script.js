// Cambiar a modo oscuro cuando se hace click en el botón
document.getElementById("modo-oscuro").addEventListener("click", function() {
  document.body.classList.toggle("modo-oscuro");
  // Cambiar el texto del botón dependiendo del estado
  if (document.body.classList.contains("modo-oscuro")) {
    this.textContent = "🌙"; // Modo oscuro activado
  } else {
    this.textContent = "🌞"; // Modo claro activado
  }
});

// Formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const estado = document.getElementById("mensaje-estado");

  if (nombre === "" || email === "" || mensaje === "") {
    estado.textContent = "Todos los campos son obligatorios.";
    estado.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    estado.textContent = "Correo inválido.";
    estado.style.color = "red";
    return;
  }

  estado.textContent = "Mensaje enviado correctamente.";
  estado.style.color = "green";

  this.reset();
});
