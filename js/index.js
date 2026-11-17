
import crearNavbar, { configurarLogout } from "./components/navbar.js";
import crearCard, { configurarCantidad } from "./components/card.js";

// Obtener el contenedor del navbar
const navbar = document.getElementById("navbar");

// Mostrar el navbar
navbar.innerHTML = crearNavbar(true);

// Configurar el botón de cerrar sesión
configurarLogout();


// Obtener los productos del archivo JSON
fetch("js/data/productos.json")

    .then(response => response.json())

    .then(data => {

        // Filtrar los productos por categoría
        const mates = data.filter(producto => producto.categoria === "mates");
        const accesorios = data.filter(producto => producto.categoria === "accesorios");
        const bazar = data.filter(producto => producto.categoria === "bazar");


        // Mostrar 3 mates
        document.getElementById("productos-mates").innerHTML =
            mates.slice(0, 3).map(producto => {

                producto.imagen = "assets/" + producto.imagen;

                return crearCard(producto);

            }).join("");


        // Mostrar 3 accesorios
        document.getElementById("productos-accesorios").innerHTML =
            accesorios.slice(0, 3).map(producto => {

                producto.imagen = "assets/" + producto.imagen;

                return crearCard(producto);

            }).join("");


        // Mostrar los productos de bazar
        document.getElementById("productos-bazar").innerHTML =
            bazar.slice(0, 3).map(producto => {

                producto.imagen = "assets/" + producto.imagen;

                return crearCard(producto);

            }).join("");


        // Configurar los botones de cantidad
        configurarCantidad();

    })

    .catch(error => {

        console.error("Error al cargar los productos:", error);

    });
