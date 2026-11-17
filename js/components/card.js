
function crearCard(producto) {

    return `
        <div class="card">

            <div class="card-imagen">
                <img src="${producto.imagen}" alt="${producto.titulo}">
            </div>

            <div class="card-info">

                <h2>${producto.titulo}</h2>

                <p>${producto.descripcion}</p>

                <strong>$${producto.precio}</strong>

                <div class="cantidad">

                    <button class="btn-restar">-</button>

                    <span class="cantidad-producto">1</span>

                    <button class="btn-sumar">+</button>

                </div>

                <button class="btn-agregar" data-producto="${encodeURIComponent(JSON.stringify(producto))}">
                    Agregar al carrito
                </button>

            </div>

        </div>
    `;
}


function configurarCantidad() {

    const botonesRestar = document.querySelectorAll(".btn-restar");
    const botonesSumar = document.querySelectorAll(".btn-sumar");
    const cantidades = document.querySelectorAll(".cantidad-producto");

    botonesSumar.forEach(function(boton, indice) {

        boton.addEventListener("click", function() {

            let numero = Number(cantidades[indice].textContent);

            numero++;

            cantidades[indice].textContent = numero;

        });

    });


    botonesRestar.forEach(function(boton, indice) {

        boton.addEventListener("click", function() {

            let numero = Number(cantidades[indice].textContent);

            if (numero > 1) {

                numero--;

                cantidades[indice].textContent = numero;

            }

        });

    });

}


function configurarCarrito() {

    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    const cantidades = document.querySelectorAll(".cantidad-producto");

    botonesAgregar.forEach(function(boton, indice) {

        boton.addEventListener("click", function() {

            const producto = JSON.parse(
                decodeURIComponent(boton.dataset.producto)
            );

            const cantidad = Number(cantidades[indice].textContent);

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(function(item) {
                return item.id === producto.id;
            });

            if (productoExistente) {

                productoExistente.cantidad += cantidad;

            } else {

                carrito.push({
                    ...producto,
                    cantidad: cantidad
                });

            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Reiniciar la cantidad
            cantidades[indice].textContent = 1;

            // Avisar que el carrito se actualizó
            window.dispatchEvent(new Event("carritoActualizado"));

            alert("Producto agregado al carrito");

        });

    });

}


export { configurarCantidad, configurarCarrito };

export default crearCard;
