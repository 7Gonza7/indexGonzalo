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
