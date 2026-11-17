
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    // Obtener los datos ingresados
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtener usuarios registrados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario
    const usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.password === password;
    });

    if (usuarioEncontrado) {

        // Guardar sesión
        sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));

        alert("¡Bienvenido/a " + usuarioEncontrado.nombre + "!");

        window.location.href = "../index.html";

    } else {

        alert("Email o contraseña incorrectos.");

    }

});
