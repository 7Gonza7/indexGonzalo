document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const msg = document.getElementById("msg-formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const servicio = document.getElementById("servicio").value;

    if (nombre === "" || correo === "" || servicio === "") {
      msg.textContent = "Por favor completa todos los campos obligatorios.";
      msg.style.color = "red";
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(correo)) {
      msg.textContent = "Correo inválido.";
      msg.style.color = "orange";
      return;
    }

    msg.textContent = "¡Mensaje enviado con éxito!";
    msg.style.color = "green";

    form.reset();
  });
});
