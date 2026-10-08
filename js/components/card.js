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

            </div>

        </div>
    `;
}


function configurarCantidad() {

    const botonRestar = document.querySelector(".btn-restar");
    const botonSumar = document.querySelector(".btn-sumar");
    const cantidad = document.querySelector(".cantidad-producto");

    let numero = 1;


    botonSumar.addEventListener("click", function() {

        numero++;

        cantidad.textContent = numero;

    });


    botonRestar.addEventListener("click", function() {

        if (numero > 1) {

            numero--;

            cantidad.textContent = numero;

        }

    });

}


export { configurarCantidad };

export default crearCard;