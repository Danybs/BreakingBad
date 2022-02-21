# Breaking bad

Breaking Bad App, consulta el listado de personajes y sus características (incluidas sus frases celebres).

[https://quizzical-meninsky-d65d0b.netlify.app/]

## Available Scripts

Se pueden lanzar los siguientes scripts:

### `npm run start`

Se lanza la aplicacion automaticamente en el navegador
[http://localhost:8080]

La pagina se actualizara cuando hagas cambios.

### `npm run build`

Se compila la aplicacion en la carpeta `public`

# Componentizacion

La aplicacion parte de un componente App.jsx, que nos carga el header, las rutas y nos instancia la internacionalizacion.
Tenemos las siguientes rutas:

## Page

Componente <main>

## Home

Se llama al servicio que nos carga los personajes y nos lista todos los personajes.
Sobre el componente "Page(main)" se renderiza "CharactersGrid" que nos pinta las "Cards",
si hacemos click en la imagen de la "Card" nos lleva a la pagina de detalle del personaje.

## Character

Se llama al servicio de detalle de los personajes y al de las frases celebres.
Una vez esten cargados los datos se renderiza el componente "CharacterDetails"(Sobre Page.jsx).
Una vez cargado este componente con los datos de los personajes y las frases celebres,
Se renderizara el detalle del personaje con "ComplexList" y "SimpleList", estos dos componentes recorreran
todos los datos (solo con un nivel de anidamiento) y devolveran una lista a mostrar en pantalla.
A continuacion se pintara la frase celebre del personaje con el componente (Quote), la frase celebre sera diferente
cada vez que se acceda al personaje.

## Header

Si queremos volver al inicio de la app solo tendremos que clickar sobre el icono de breaking bad ubicado en el header.
Tambien podemos cambiar el idioma con el "select" verde.
Por defecto el idioma sera el utilizado en el navegador.

## Spinner

Mientras se cargan los datos se mostrara un spinner.

# Errores

## Error

Cuando ocurra un error en la llamada de los servicios, mediante una funcion
devolveremos un objeto error: true y un messsage descriptivo, que seran mostrados en un componente "Error".
Tambien nos mostrara un toast(mensaje emergente) informativo.

## 404

Si navegamos a una ruta que no existe, se mostrara un mensaje de error 404.

# Dependencias

Hemos basado la aplicacion en react por lo que usaremos:
`react` y `react-dom`

Para internacionalizar la aplicacion se utiliza:
`i18next` y `i18next-browser-languagedetector` para detectar el idioma del navegador.

Para cargar las peticiones hemos usado:
`Axios`

En la gestion de enrutado:
`react-router-dom`

Mostramos los mensajes emergentes con:
`react-toastify`

Para compilar y lanzar la aplicacion:
`babel` y `webpack`

No utilice ninguna estrategia de stage management a nivel GLOBAL,
debido a que es una aplicacion pequeña y no hay flujo de datos entre componentes a gran nivel.
Tampoco tenemos usuarios o tokens que gestionar por la aplicacion por lo que no lo vi necesario.
En la parte del multi idioma la gestionamos con la libreria i18n, pero si no podria ser interesante que segun el idioma
seleccionado se almacenara en la store y se cargara el fichero correspondiente.
