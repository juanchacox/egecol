class Carrito{

    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains("Add to cart")){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
            
        }
    }

    leerDatosProducto(producto){
        const infoProducto= {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h4").textContent,
            precio : producto.querySelector(".product-price span").textContent,
            id : producto.querySelector("a").getAttribute("data-id"),
            cantidad : 1

        }
        this.insertarCarrito(infoProducto);
    }

    insertarCarrito(producto){
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${proucto.id}"></a>
            </td>  
         `;
        listaProductos.appendChild(row);

    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains("borar-producto")){
            e.target.parentElement.parentElement.remove();
            productoID = producto.querySelector("a").getAttribute("data-id");
        }
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
           listaProductos.removeChild(listaProductos.firstChild);           
        }
        return false;
    }
}