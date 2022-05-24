
## *Instalacion*

- Para poder ver el funcionamiento de este projecto en local lo primero que se debe hacer es clonar este repositorio usando el comando `git clone`junto al enlace del repositorio.
- para configurar la base de datos en mysql se debe crear la base de datos y la tabla usando las instrucciones del archivo `database.sql`que se encuentran en la ruta [Database](https://github.com/Alexander-Cardona-Herrera/test-sis/tree/master/Authenticator/rest_api).
- Para este projecto se necesitaran dos terminales, en la primera terminal configuraremos las dependencias de la Rest_Api ubicandonos directamente la ruta `Authentication/rest_api` y usando los siguientes comandos

		npm install
		npm run dev

- En la segunda terminal nos ubicaremos en la ruta `Authentication/crud`y ejecutaremos los comandos

		npm install
		npm start

Una vez realizados estos pasos puedes ir directamente al enlace http://localhost:4200/ y explorar el comportamiento de la aplicacion