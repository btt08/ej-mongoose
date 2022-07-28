/*
  Partiendo desde el estado actual de nuestra aplicación node definiremos un router nuevo en nuestro directorios /routes donde gestionaremos una api,
  dentro de este enrutado debemos importar nuestro objeto products y tendremos que definir enrutados que recojan datos para realizar busquedas:
  - Definiremos con URL PARAMS:
    Un enrutado que reciba marca y devuelva aquellos productos que correspondan.
    Un enrutado que reciba marca, color y devuelva aquellos productos que correspondan.
    Otro enrutado que reciba marca, color, precio y devuelva aquellos productos que estén por debajo del precio marcado.
  - Definiremos con QUERY PARAMS:
    
    Un enrutado que contemple si existe cada uno de los parámetros (MARCA, COLOR, PRECIO) y devuelva un resultado que se ajuste a los parámetros de búsqueda.
  Siempre deberemos realizar control de errores (que no existan resultados o el formato de los parámetros)
  Desarrollaremos un frontal donde realizaremos las consultas a nuestra API para visualizar el contenido.
  Podemos usar los endpoint que consideremos precisos, no es necesario usar todos.
  Para esto, recogeremos los datos en un formulario y realizaremos la búsqueda en función de los datos aportados por el usuario.
  Debemos validar los datos para que tengan sentido en relación a la consulta a la API.
  Recogeremos los datos del formulario a través de un evento asignado a un botón que construirá la URL y lanzará un fetch.
  Procesaremos la respuesta y mostraremos los datos al usuario (a través de una tabla, por ejemplo), si no hay resultados de busqueda, mostrar mensaje.
  ------------------------------  ¡ ACTUALIZACIÓN !  ------------------------------
  Realizar el backend con Mongoose.
  Dejar backend preparado para devolver los fabricantes.
  Preparar frontal para que imprima todos los productos en una tabla al acceder a la aplicación, de la misma manera volcaremos todos los fabricantes en un desplegable en el formulario.
  El despegable deberá utilizarse para poder definir criterios de búsqueda.
  Al seleccionar un producto debemos mostrar los datos del producto y del fabricante. (Estarán relacionados en el back con una referencia)
*/

const config = require('./modules/config');
const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/productsRouter')
const hostName = config.HOST;
const port = config.PORT;

require('./modules/mongo');
const app = express();

app.use(cors());

app.use(express.static('public'));

app.use('/products', productsRouter);

app.listen(port, hostName, () => {
  console.log(`Servidor lanzado en http://${hostName}:${port}`)
});