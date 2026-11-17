# Gohan Mates 🧉

**Tienda online de mates, accesorios y artículos de bazar.**

## 📌 Descripción del proyecto

Gohan Mates es un sitio web de comercio electrónico desarrollado como proyecto para la materia **Aplicaciones Web I**.

El sitio representa una tienda online dedicada a la venta de mates, accesorios y productos de bazar. Su objetivo es ofrecer una experiencia de navegación sencilla, visual e intuitiva, permitiendo a los usuarios conocer los productos, registrarse, iniciar sesión y preparar sus pedidos para enviarlos mediante WhatsApp.

El diseño utiliza una estética minimalista, con tonos tierra y elementos visuales relacionados con la identidad de la marca.

## 🛠️ Tecnologías utilizadas

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** diseño, estilos, distribución de elementos y adaptación visual.
- **JavaScript:** funcionalidades e interactividad del sitio.
- **JSON:** almacenamiento estructurado de los productos.
- **Fetch API:** lectura de los productos desde el archivo JSON.
- **LocalStorage:** almacenamiento de usuarios registrados y productos del carrito.
- **SessionStorage:** almacenamiento de la sesión del usuario activo.
- **Font Awesome:** incorporación de iconos.
- **Google Fonts:** tipografías utilizadas en el diseño.

## ⚙️ Funcionalidades principales

### Navegación y catálogo
- Página de inicio.
- Secciones de mates, accesorios y bazar.
- Página institucional «Sobre nosotros».
- Navegación entre secciones mediante una barra reutilizable.
- Visualización dinámica de productos según su categoría.

### Registro e inicio de sesión
- Formulario de registro de usuarios.
- Almacenamiento de usuarios en LocalStorage.
- Validación de email y contraseña.
- Inicio de sesión mediante SessionStorage.
- Cierre de sesión y eliminación de la sesión activa.

### Carrito de compras
- Incorporación de productos al carrito.
- Modificación de cantidades.
- Visualización de productos, subtotales y total.
- Eliminación de productos.
- Persistencia de la información mediante LocalStorage.
- Actualización del contador de productos.

### Finalización de compra
- Generación automática de un mensaje con el detalle del pedido.
- Inclusión de productos, cantidades, subtotales y total.
- Redirección a WhatsApp para enviar el pedido.
- Limpieza del carrito después de abrir WhatsApp.

## 📁 Estructura del proyecto

```text
Gohan Mates/
│
├── assets/
│   ├── accesorios.jpg
│   ├── bazar.jpg
│   ├── logo.png
│   └── mate.jpg
│
├── css/
│   └── style.css
│
├── js/
│   ├── components/
│   │   ├── card.js
│   │   └── navbar.js
│   │
│   ├── data/
│   │   ├── pages.js
│   │   └── productos.json
│   │
│   ├── index.js
│   ├── login.js
│   └── registro.js
│
├── pages/
│   ├── accesorios.html
│   ├── bazar.html
│   ├── login.html
│   ├── mates.html
│   ├── registro.html
│   └── sobrenosotros.html
│
├── index.html
└── README.md
```

## 🚀 Ejecución del proyecto

Para visualizar el sitio localmente:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar `index.html` utilizando una extensión como Live Server.
4. Navegar por las distintas secciones del sitio.

Se recomienda utilizar Live Server para permitir la carga de módulos JavaScript y la lectura del archivo JSON mediante Fetch API.

## 💡 Mejora significativa incorporada

Se incorporó un **carrito de compras lateral e interactivo**, que permite consultar los productos seleccionados sin abandonar la página en la que se encuentra el usuario.

Esta funcionalidad permite visualizar cantidades, subtotales y el importe total, eliminar productos y continuar con la compra mediante WhatsApp.

La información del carrito se conserva al navegar entre las diferentes secciones y recargar el sitio, gracias al uso de LocalStorage.

## 📍 Información del proyecto

- **Proyecto:** Gohan Mates.
- **Materia:** Aplicaciones Web I.
- **Año:** 2026.
- **Desarrollo:** Proyecto académico basado en una tienda real de productos personalizados.