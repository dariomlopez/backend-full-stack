# backend-ejercicios-full-stack
## Instrucciones para inicializar la aplicación:

Para comenzar con el proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias necesarias con `npm install`.
<br>Asegurate de tener instalado NodeJS en tu ordenador.
3. Configura la base de datos ejecutando el siguiente comando:
`npm run iniDB`.

4. Inicia la aplicación con `npm start app.js`.

## Instrucciones para inicializar la base de datos:

1. Asegúrate de tener MySQL instalado en tu sistema.
2. Desde tu terminal, accede a tu servidor de MySQL e inicia sesión con un usuario que tenga permisos para crear bases de datos.
3. Ejecuta el script `dump.sql` que se encuentra en la raíz del proyecto. Puedes hacerlo usando el siguiente comando:

mysql -u `<usuario>` -p `<password>` < dump.sql

Asegúrate de reemplazar `<usuario>` y `<password>` con tus credenciales de usuario de MySQL.

4.La base de datos y la tabla de ejercicios se crearán y se llenarán con ejemplos de datos.

¡Listo! Ahora tienes una base de datos lista para usar en tu aplicación.
