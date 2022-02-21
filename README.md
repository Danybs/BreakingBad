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

## Home

Se llama al servicio que nos carga los personajes y nos lista todos los personajes.
Sobre el componente "Page(main)" se renderiza "CharactersGrid" que nos pinta las "Cards",
si hacemos click en la imagen de la "Card" nos lleva a la pagina de detalle del personaje.

## Character

Se llama al servicio de detalle de los personajes y al de las frases celebres.
Una vez esten cargados los datos se renderiza el componente "CharacterDetails".
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
