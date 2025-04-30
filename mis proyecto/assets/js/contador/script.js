// Aquí creo una variable para guardar el número actual del contador
let contador = 0;

// Esta función se encarga de mostrar el valor del contador en la página
function actualizarContador() {
  document.getElementById("contador").textContent = contador;
}

// Esta función se ejecuta cuando le doy clic al botón "+" para aumentar
function aumentar() {
  contador++; // Sumo 1
  actualizarContador(); // Actualizo la pantalla
}

// Esta se usa para disminuir el contador cuando presiono "-"
function disminuir() {
  contador--; // Resto 1
  actualizarContador(); // Vuelvo a mostrar el número actualizado
}

// Esta función reinicia el contador a cero
function reiniciar() {
  contador = 0; // Vuelvo a empezar desde cero
  actualizarContador(); // Reflejo el cambio en la pantalla
}