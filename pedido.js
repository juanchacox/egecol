const carro = new Carrito();
const carrito = document.getElementById("shopping-item");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#shopping-list");
const vaciarCarritoBtn = document.queryElementById("vaciar-carrito");


cargarEventos();

function cargarEventos(){
    productos.addEventListener("click", (e)=>{carrito.comprarProucto(e)});

    carrito.addEventListenner("click", (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener("click", (e)=>{carro.vaciarCarrito(e)});
}

