## A continuacion se presentan las respuestas a las preguntas formuladas para evaluar el conocimiento especifico en los puntos de interes

**1. ¿Quién creó el lenguaje de programación de Python?**

Guido Van Rossum en 1991

**2. ¿Qué pasa cuando escribes? `gcc main.c`**

Algunos lenguajes, como en este caso C, son compilados, esto quiere decir que deben ser pasados por el proceso de compilación de manera manual usando el comando “gcc”, solo o junto con cualquiera de sus diversas _flags_. Lo que sucede “tras bambalinas” es que el archivo en cuestión pasa por 4 etapas

 1. _Preprocessing_ (preprocesado): elimina comentarios, agrega el código del _Header_ y cualquier archivo mencionado en este
 2. Compilation_ (compilado): pasa lo obtenido del preprocesado a código Assembly, que es un lenguaje de bajo nivel
 3. Assembly_: pasa lo obtenido del compilado que está en lenguaje _Assembly_ a código binario que es finalmente el lenguaje máquina.
 4. Linking_: por último se ensamblan todas las partes del programa junto con las librerías incluidas en los archivos para generar un único archivo ejecutable


**3. ¿Cuál es el propósito de '`if __name__ '==' __main __ ':` ` en Python?**

Esta línea de código se utiliza cuando se quiere que un código se ejecute solo si se está ejecutando desde el mismo modulo y que no sea posible utilizarlo desde fuera de su propio modulo a través de una importación.

**4. ¿En Python, Que es el método `__init__` ?**

El método __init__ es un método especial que equivale al “constructor” en otros lenguajes. Su principal función es establecer un estado inicial en el objeto nada más instanciarlo, es decir, inicializar los atributos.

**5. ¿Cuál es la diferencia entre una clase y un “objeto o instancia”?**

Las clases son los modelos sobre los cuáles se construirán nuestros objetos y contienen los métodos de nuestro interés, como el antes mencionado metodo __init__, mientras que los objetos son instancias de esa clase.

**6. ¿Explique cómo funciona lo siguiente:**

    res.file ? jumpLis() : sap()

En este caso estamos viendo un operador ternario, en donde su sintaxis es **_“condición ? expr1 : expr2”_** , la condición se evalúa como cierta o falsa, si es cierta ejecutara la expr1 y si es falsa la expr2, asi que en este caso si existe res.file llamar funcion jumpLis(), y si no existe el res.file llamar la función sap().

**7. ¿Qué es mutable e inmutable?**

Un objeto o variable inmutable es aquel que no puede ser modificado una vez ha sido creado, caso contrario a los mutables que si pueden ser modificados después de su creación

**8. ¿Cuál es el significado de sobrescribir un método en Programación Orientada a Objetos?**

La Sobreescritura de métodos es la forma por la cual una clase que hereda puede redefinir los métodos de su clase Padre, de esta manera puede crear nuevos métodos con el mismo nombre de su superClase

**9. ¿Qué es un shell?**

La Shell es la capa mas externa de un sistema operativo y funciona como la interfaz de dicho sistema operativo, aquí puedo ejecutar comandos, procesos, manipular archivos y demás

**10. ¿Cuál es la diferencia entre un terminal y una shell?**

La terminal es un entorno de entrada y salida de texto en el que se ejecuta la Shell que es el interpretador de comandos

**11. ¿Cuál es la diferencia entre un hard link y un symbolic link en linux?**

Un symbolic link es un puntero especial que establece vínculos entre archivos. Es muy similar a la función de acceso directo disponible en los sistemas operativos Windows. Un symbolic link simplemente es un acceso directo de un archivo que sirve como referencia a otro archivo o directorio. Un hard link sirve como referencia o puntero al archivo original, lo que significa que es la copia exacta del archivo original al que apunta.

**12. ¿En Python si quisiera usar datos que luego de su creación no “se puedan cambiar” que estructura de datos usaría?**

En Python particularmente usaría una Tupla

**13. ¿Cuál es la diferencia entre git y github?**

Git es una herramienta de control de versiones distribuida que puede gestionar el historial de código fuente de un proyecto de desarrollo, mientras que GitHub es una plataforma basada en la nube construida alrededor de la herramienta Git.

**14. ¿Qué es una cola “queue” y cómo funciona?**

Una Cola o Queue es una estructura de datos que sigue la Filosofía FIFO (First In – First Out). Esto quiere decir que el elemento que entre primero a la Cola será el primero que salga y el último que entre será el último en salir.

**15. ¿Qué es un método estático?**

Un método estático pertenece a una clase; aun así, no está vinculado al objeto de esa clase. Por lo tanto, se puede llamar sin crear una instancia de la clase en la que reside. Dado que los métodos estáticos no están vinculados a un objeto, no conoce las propiedades de una clase, por lo que no puede acceder ni modificar las propiedades de la clase.

**16. ¿Hablando de C o C++, Sabe qué es un puntero?**

Un puntero es una variable que almacena la dirección de memoria de un objeto.

**17. ¿Cuál es la diferencia entre los módulos y los paquetes en Python?**

El módulo es un archivo que contiene funciones de Python, variables globales, etc. No es más que un archivo .py que tiene código mientras que un paquete no es más que un directorio donde se almacenan diferentes módulos de Python.

**18. ¿Cuáles son las palabras clave para cambiar el nombre de una columna durante una**

**consulta SQL?**

    ALTER TABLE table_name RENAME COLUMN old_name TO new_name;

**19. ¿Nombre una alternativa de software a Haproxy como balanceador de carga?**

Nginx

**20. ¿Explique cuál es el papel principal de un balanceador de carga?**

Esta herramienta permite que el sitio web que administremos esté siempre disponible, y sea capaz de servir todas las peticiones a la máxima velocidad posible balanceando la carga entre los servidores de los que dispongamos de acuerdo a la configuración que dispongamos.

**21. ¿Qué es Nginx?**

es un servidor web de código abierto que es usado como proxy inverso, cache de HTTP, y balanceador de carga

**22. ¿Cuál es la diferencia entre una cola y una pila?**

En una pila, el último elemento que ingresamos es el primero en salir. En una cola, el primer elemento que ingresamos es el primero en salir.

**23. Graphql en sus palabras qué ventajas tiene?, y si hablamos de Angular o React con**

**graphql que librerías a manejado, y si hablamos de backend que librerías ha manejado?**

GraphQL proporciona estándares y estructuras integrales para implementar funciones de API de manera escalable y fácil de mantener mejorando la comunicación con las APIs. No tengo preferencias particulares ya que actualmente no he tenido experiencia utilizando GRAPHQL

**24. Usted prefiere usar API REST o GRAPHQL y por qué?**

Mis preferencias están en API REST ya que tengo experiencia con su uso y no he encontrado mayores inconvenientes, sin embargo, creo que la diversidad da perspectiva por lo que aprendere GRAPHQL en los próximos meses

**25. Solo si ya tiene experiencia en Graphql conteste: como obligar la recarga de la cache de**

**graphql sin usar un refresh?**

Actualmente no he tenido experiencia utilizando GRAPHQL

**26. A trabajado con RJSX? ¿Y si lo a echo para qué es esta librería?**

Actualmente no he tenido experiencia utilizando RJSX

**27. Que es un observable?**

En RxJS el sujeto sería el observable y el consumidor, el observer. Los observables son los encargados de propagar la información y notificar sus cambios, para ello proporciona métodos a partir de los cuales los observers pueden suscribirse o cancelar la suscripción de sus flujos de datos.

**28. Que es un BehaviorSubject?**

BehaviorSubject es un tipo especial de observable que permite la transmisión múltiple de valores a muchos observadores simultáneos y donde siempre se almacena y permanece disponible el valor actual

**29. Nombre que Bases de Datos SQL y No-SQL ha manejado? Y su auto calificación para**

**cada una de ellas, como ejemplo: mariadb-Basico, Dynamo-Experto etc.**

    SQL: MySQL (8/10)
    
    PostgreSQL: (5/10)
    
    NoSQL: MondgoDB (5/10)
