// Acá escucho cuando se envía el formulario
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
  
    // Capturo los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const estado = document.getElementById("estado");
  
    // Validación personalizada
    if (nombre === "" || correo === "" || mensaje === "") {
      estado.textContent = "⚠️ Todos los campos son obligatorios.";
      estado.style.color = "red";
      return;
    }
  
    // Validación simple del correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      estado.textContent = "⚠️ Correo electrónico inválido.";
      estado.style.color = "red";
      return;
    }
  
    // Si pasa todo, se muestra éxito y limpio el form
    estado.textContent = "✅ Mensaje enviado correctamente.";
    estado.style.color = "green";
    this.reset();
  });