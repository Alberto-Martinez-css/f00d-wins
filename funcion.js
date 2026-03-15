function agregarCarrito(nombre,precio){
let carro = JSON.parse(localStorage.getItem("carrito"))||[];
carrito.push({
nombre:nombre,
precio:precio,
cantidad:1
});
localStorage.setItem("carrito",JSON.stringify(carrito));
}
carrito.forEach(producto => {

    let item = document.createElement("div");

    item.textContent =
        producto.nombre + " - $" + producto.precio;

    document.getElementById("carrito").appendChild(item);

});
let total = 0;

carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
});

document.getElementById("total").textContent =
    "Total: $" + total;