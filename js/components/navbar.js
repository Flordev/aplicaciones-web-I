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
             <img src="${esInicio ? "assets/logo.png" : "../assets/logo.png"}" alt="Gohan Mates">
            </div>

            <div class="nav-centro">
                ${enlaces}
            </div>

            <div class="nav-usuario">
                <a href="${direccionLogout}" id="btnLogout">
                    CERRAR SESIÓN
                </a>
            </div>

        </nav>
    `;
}

function configurarLogout() {

    const botonLogout = document.getElementById("btnLogout");

    botonLogout.addEventListener("click", function(evento) {

        evento.preventDefault();

        if (window.location.pathname.includes("/pages/")) {
            window.location.href = "login.html";
        } else {
            window.location.href = "pages/login.html";
        }

    });
}

export { configurarLogout };

export default crearNavbar;