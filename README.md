# Prueba técnica de desarrollo Frontend para BeMaster

¡Hola! Este es la aplicación web inspirada en Disney+ que desarrollé con React JS para el reto de BeMaster. 
**Podes visitar el sitio web haciendo click aquí**: https://ignaciojsoler.github.io/challenge-bemaster/

### Características funcionales:
- Componente ‘Login’ donde el usuario puede registrarse e iniciar sesión utilizando el Authent de Firebase. El resto de las rutas están configuradas para redireccionar al usuario hacia este componente si no se encuentra logueado.
- El componente ‘Home’ contiene 5 cards que representan las categorías a las que el usuario tiene acceso. Además, contiene distintas sliders (arrastrables) con los que se pueden visualizar las películas disponibles y un componente ‘Navbar’ con el que se puede cerrar sesión haciendo click en el avatar de usuario a la derecha superior. Al cerrar la sesión el usuario es redireccionado a la ruta de login.
- El componente ‘ContentCategory’ presenta, en diferentes sliders arrastrables, el contenido seleccionado relacionado a la categoría seleccionada desde el componente ‘Home’.
- El componente ‘ContentDetails’ permite al usuario visualizar los detalles de la película seleccionada.
- Diseño Responsivo

### Instalación:
- Clonar el proyecto
- En la consola, ejecutar el comando npm install
- Ejecutar el comando npm run dev
- ¡Listo!

### Tecnologías utilizadas:
- React JS
- Typescript
- Redux Toolkit
- React Router
- The Movie Database API
- Axios
- Firebase
- Tailwind CSS
- React Slick
- Sweetalert 2
