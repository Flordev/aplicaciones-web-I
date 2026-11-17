
import paginas from "../data/pages.js";

function crearNavbar(esInicio = false) {

    let enlaces = "";

    paginas.forEach(pagina => {

        let direccion = pagina.direccion;

        if (esInicio && direccion !== "../index.html") {
            direccion = "pages/" + direccion;
        }

        enlaces += `
            <a href="${direccion}">
                ${pagina.titulo}
            </a>
        `;
    });

    let direccionLogout = esInicio ? "pages/login.html" : "login.html";

    return `
        <nav>

            <div class="nav-logo">
                <a href="${esInicio ? "index.html" : "../index.html"}">
                    <img src="${esInicio ? "assets/logo.png" : "../assets/logo.png"}" alt="Gohan Mates">
                </a>
            </div>

            <div class="nav-centro">
                ${enlaces}
            </div>

            <div class="nav-usuario">

                <button type="button" id="btnCarrito" class="btn-carrito">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span id="contadorCarrito">0</span>
                </button>

                <a href="${direccionLogout}" id="btnLogout">
                    CERRAR SESIÓN
                </a>

            </div>

        </nav>

        <div id="fondoCarrito" class="fondo-carrito"></div>

        <aside id="panelCarrito" class="panel-carrito">

            <div class="carrito-encabezado">

                <h2>Mi carrito</h2>

                <button type="button" id="btnCerrarCarrito" aria-label="Cerrar carrito">
                    <i class="fa-solid fa-xmark"></i>
                </button>

            </div>

            <div id="listaCarrito" class="lista-carrito"></div>

            <div class="carrito-pie">

                <div class="carrito-total">
                    <span>Total</span>
                    <strong id="totalCarrito">$0</strong>
                </div>

                <button type="button" id="btnFinalizarCompra">
                    Finalizar compra
                </button>

            </div>

        </aside>
    `;
}


function configurarLogout() {

    const botonLogout = document.getElementById("btnLogout");

    if (botonLogout) {

        botonLogout.addEventListener("click", function(evento) {

            evento.preventDefault();

            // Eliminar sesión
            sessionStorage.removeItem("usuarioActivo");

            // Ir al Login
            if (window.location.pathname.includes("/pages/")) {
                window.location.href = "login.html";
            } else {
                window.location.href = "pages/login.html";
            }

        });

    }

    configurarPanelCarrito();

}


function configurarPanelCarrito() {

    const botonCarrito = document.getElementById("btnCarrito");
    const botonCerrar = document.getElementById("btnCerrarCarrito");
    const fondoCarrito = document.getElementById("fondoCarrito");
    const panelCarrito = document.getElementById("panelCarrito");
    const listaCarrito = document.getElementById("listaCarrito");
    const contadorCarrito = document.getElementById("contadorCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    const botonFinalizar = document.getElementById("btnFinalizarCompra");

    if (!botonCarrito) return;


    // Abrir carrito

    botonCarrito.addEventListener("click", function() {

        panelCarrito.classList.add("carrito-abierto");
        fondoCarrito.classList.add("fondo-visible");

    });


    // Cerrar carrito

    function cerrarCarrito() {

        panelCarrito.classList.remove("carrito-abierto");
        fondoCarrito.classList.remove("fondo-visible");

    }

    botonCerrar.addEventListener("click", cerrarCarrito);
    fondoCarrito.addEventListener("click", cerrarCarrito);


    // Mostrar productos del carrito

    function actualizarCarrito() {

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        listaCarrito.innerHTML = "";

        let total = 0;
        let cantidadProductos = 0;

        if (carrito.length === 0) {

            listaCarrito.innerHTML = "<p class='carrito-vacio'>Tu carrito está vacío.</p>";

        } else {

            carrito.forEach(function(producto, indice) {

                let subtotal = producto.precio * producto.cantidad;

                total += subtotal;
                cantidadProductos += producto.cantidad;

                listaCarrito.innerHTML += `

                    <div class="carrito-producto">

                        <img src="${producto.imagen}" alt="${producto.titulo}">

                        <div class="carrito-producto-info">

                            <h3>${producto.titulo}</h3>

                            <p>Cantidad: ${producto.cantidad}</p>

                            <strong>$${subtotal.toLocaleString("es-AR")}</strong>

                            <button type="button" class="btn-eliminar" data-indice="${indice}">
                                Eliminar
                            </button>

                        </div>

                    </div>

                `;

            });

        }

        contadorCarrito.textContent = cantidadProductos;
        totalCarrito.textContent = "$" + total.toLocaleString("es-AR");

    }


    // Eliminar productos

    listaCarrito.addEventListener("click", function(evento) {

        if (evento.target.classList.contains("btn-eliminar")) {

            let indice = Number(evento.target.dataset.indice);

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.splice(indice, 1);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            actualizarCarrito();

        }

    });


    
    // Finalizar compra por WhatsApp

    botonFinalizar.addEventListener("click", function() {

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        if (carrito.length === 0) {

            alert("Tu carrito está vacío.");

        } else {

            const telefono = "5493516327209";

            const usuario = JSON.parse(
                sessionStorage.getItem("usuarioActivo")
            );

            let mensaje = "¡Hola! Quiero realizar el siguiente pedido:\n\n";

            if (usuario) {
                mensaje += "Cliente: " + usuario.nombre + " " + usuario.apellido + "\n\n";
            }

            let total = 0;

            carrito.forEach(function(producto) {

                let subtotal = producto.precio * producto.cantidad;

                total += subtotal;

                mensaje +=
                    producto.titulo + "\n" +
                    "Cantidad: " + producto.cantidad + "\n" +
                    "Subtotal: $" + subtotal.toLocaleString("es-AR") + "\n\n";

            });

            mensaje += "TOTAL: $" + total.toLocaleString("es-AR");

            const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

            const ventana = window.open(url, "_blank");

            // Vaciar carrito si se abrió WhatsApp
            if (ventana) {

                localStorage.removeItem("carrito");

                actualizarCarrito();

                cerrarCarrito();

            } else {

                alert("No se pudo abrir WhatsApp. Revisá si el navegador bloqueó la ventana emergente.");

            }

        }

    });



    // Actualizar cuando se agrega un producto

    window.addEventListener("carritoActualizado", actualizarCarrito);

    actualizarCarrito();

}


export { configurarLogout };

export default crearNavbar;
