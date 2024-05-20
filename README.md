# TRIVIA APP

## DESCRIPCIÓN

Este proyecto es una aplicación de Trivia construida usando HTML, CSS y JavaScript. Obtiene preguntas de trivia de la [API de Open Trivia Database](https://opentdb.com/) y permite a los usuarios jugar juegos de trivia con diferentes números de preguntas.

## CARACTERÍSTICAS

1. **Inicio de Juego**:
   - Los usuarios pueden iniciar el juego haciendo clic en el botón "Start Trivia".
   - Se proporcionan opciones de juego rápido (10 preguntas), medio (25 preguntas) y largo (50 preguntas).

2. **Obtención de Preguntas**:
   - La aplicación realiza una solicitud a la API de Open Trivia Database para obtener las preguntas de trivia según el número seleccionado por el usuario.
   - Maneja errores en caso de no poder obtener las preguntas correctamente.

3. **Visualización de Preguntas**:
   - Muestra las preguntas una por una en un contenedor.
   - Permite a los usuarios seleccionar una respuesta haciendo clic en una de las opciones.

4. **Validación de Respuestas**:
   - Comprueba si la respuesta seleccionada por el usuario es correcta o incorrecta.
   - Muestra un mensaje de éxito o error utilizando SweetAlert2 según la respuesta del usuario.

5. **Interacción de Usuario**:
   - La aplicación proporciona botones para continuar al siguiente conjunto de preguntas o volver al menú principal.

## Tecnologías Utilizadas

- **HTML**: Estructura el contenido de la aplicación web.
- **CSS**: Estiliza la interfaz de usuario para una experiencia visual atractiva.
- **JavaScript**: Agrega interactividad y maneja la lógica del juego.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de Open Trivia Database.
- **SweetAlert2**: Biblioteca para mostrar mensajes emergentes personalizados.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lindacasas/trivia-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd trivia-app
   ```

3. Para ejecutar este proyecto localmente, necesitas tener Node.js y npm instalados en tu máquina. Después de clonar el repositorio, navega hasta el directorio del proyecto en tu terminal y ejecuta el siguiente comando para instalar las dependencias necesarias:

    ```bash
    npm install axios sweetalert2
    ```
4. Abre el archivo `index.html` en tu navegador web preferido.

## USO

Una vez que las dependencias estén instaladas, puedes abrir el archivo `index.html` en tu navegador web para comenzar a jugar con la Trivia App. Haz clic en el botón "Start Trivia" para comenzar, luego selecciona el modo de juego deseado (Juego Rápido, Juego Medio o Juego Largo) para comenzar a jugar, lee cada pregunta cuidadosamente y elige la respuesta correcta haciendo clic en la opción correspondiente, observa el mensaje de éxito o error después de seleccionar una respuesta.

## DESPLIEGUE

El proyecto "Clon de Netflix" está desplegado en GitHub Pages y se puede acceder a él en la siguiente URL:

```
https://lindacasas.github.io/trivia-app/
```

## AUTOR

Linda Melissa Casas Huanca
