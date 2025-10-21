function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
  function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    carrito.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });
  }
  function finalizarCompra() {
    alert(" Gracias por tu compra-para finalizar tu compra comunicate al 3564-666310");
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
  }
  mostrarCarrito();
