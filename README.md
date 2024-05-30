# backend-ejercicios-full-stack
#### Proyecto final de curso del Certificado de Profesionalidad IFCT0609 Programación de Sistemas Informáticos.
El backend de esta plataforma fue desarrollado con las siguientes tecnologías y funcionalidades:

- Desarrollo de endpoints para la web utilizando Express.js.
- Implementación y gestión de conexiones a bases de datos utilizando Express.js para asegurar la integridad y eficiencia de los sistemas.
- Integración y configuración de ChatGPT como asistente, brindando orientación y soluciones a los retos de programación planteados en la plataforma.
- Diseño y desarrollo de consultas especializadas a bases de datos, utilizando Node.js y Express.js, para optimizar la interacción entre los usuarios y ChatGPT.

### Algunas de las técnologias usadas:
![JavaScript](https://img.shields.io/badge/JavaScript-ffee00?style=plastic&logo=javascript&logoColor=black)
![ExpressJS](https://img.shields.io/badge/ExpressJS-gray?style=plastic&logo=express)
![Node.JS](https://img.shields.io/badge/Node.JS-83FF33?style=plastic&logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-00aeff?style=plastic&logo=mysql&logoColor=black)
![ChatGPT](https://img.shields.io/badge/ChatGPT-899867?style=plastic)

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

4. La base de datos y la tabla de ejercicios se crearán y se llenarán con ejemplos de datos.

¡Listo! Ahora tienes una base de datos lista para usar en tu aplicación.
