// Escucha cuando se envía el formulario
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario

  // Capturo los valores del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const run = document.getElementById("run").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const estado = document.getElementById("estado");

  // Validación personalizada
  if (nombre === "" || correo === "" || telefono === "" || run === "" || fechaNacimiento === "" || mensaje === "") {
      estado.textContent = "⚠️ Todos los campos son obligatorios.";
      estado.classList.add("error");
      estado.classList.remove("exito");
      return;
  }

  // Validación del correo electrónico
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      estado.textContent = "⚠️ Correo electrónico inválido.";
      estado.classList.add("error");
      estado.classList.remove("exito");
      return;
  }

  // Validación del formato del RUN 
  if (!/^\d{7,8}-[0-9kK]$/.test(run)) {
      estado.textContent = "⚠️ El formato del RUN es incorrecto.";
      estado.classList.add("error");
      estado.classList.remove("exito");
      return;
  }

  // Validación de la fecha de nacimiento (debe ser mayor a 18 años)
  const fecha = new Date(fechaNacimiento);
  const edad = new Date().getFullYear() - fecha.getFullYear();
  if (edad < 18) {
      estado.textContent = "⚠️ Debes ser mayor de 18 años para enviarlo.";
      estado.classList.add("error");
      estado.classList.remove("exito");
      return;
  }

  // Si todo está correcto
  estado.textContent = "✅ Mensaje enviado correctamente.";
  estado.classList.add("exito");
  estado.classList.remove("error");
  this.reset();
});
