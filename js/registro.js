
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Obtener usuarios registrados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el email ya está registrado
    const usuarioExistente = usuarios.find(function(usuario) {
        return usuario.email === email;
    });

    if (usuarioExistente) {

        alert("Este email ya está registrado.");

    } else {

        // Crear nuevo usuario
        const nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            fechaNacimiento: fechaNacimiento
        };

        // Guardar usuario
        usuarios.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("¡Registro exitoso!");

        window.location.href = "login.html";

    }

});
