// Abrir automáticamente al cargar
window.addEventListener('load', () => {
  document.getElementById('miDialog').show(); // no modal
  // o
  document.getElementById('miDialog').showModal(); // modal con fondo oscuro
});