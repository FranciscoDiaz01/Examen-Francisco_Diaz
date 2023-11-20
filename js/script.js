//Función que muestra mensaje al clickear el carrito de compra
function alerta(elemento) {
  alert("Your cart is empty");
}

//Función para cambiar de imagen la pasar el mouse
var plantImg = document.querySelector("#plant");

function cambia_imagen() {
  plantImg.src = "assets/succulents-2.jpg";
}

function regresa_imagen() {
  plantImg.src = "assets/succulents-1.jpg";
}

//Función para eliminar el footer
function eliminar_coockies() {
  var cookie = document.querySelector(".cookie");
  cookie.remove();
}
