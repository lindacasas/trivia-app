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

## TECNOLOGÍAS UTILIZADAS

- **HTML**: Estructura el contenido de la aplicación web.
- **CSS**: Estiliza la interfaz de usuario para una experiencia visual atractiva.
- **JavaScript**: Agrega interactividad y maneja la lógica del juego.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de Open Trivia Database.
- **SweetAlert2**: Biblioteca para mostrar mensajes emergentes personalizados.

## INSTALACIÓN

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

Una vez que hayas instalado las dependencias necesarias, sigue estos pasos para disfrutar de Trivia App:

1. **Inicio de la Trivia**:
   - Abre el archivo `index.html` en tu navegador web.
   - Haz clic en el botón "Start Trivia" para comenzar.

2. **Selecciona el Modo de Juego**:
   - Elige el modo de juego que prefieras: Juego Rápido, Juego Medio o Juego Largo.

3. **Responde las Preguntas**:
   - Lee cada pregunta cuidadosamente.
   - Selecciona la respuesta correcta haciendo clic en la opción correspondiente.

4. **Observa los Resultados**:
   - Después de seleccionar una respuesta, observa el mensaje de éxito o error que aparece.
   
5. **Visualiza tu Puntaje Final**:
   - Al finalizar todas las preguntas, se mostrará tu puntaje final en la pantalla.

## DESPLIEGUE

El proyecto "Trivia App" está desplegado en GitHub Pages y se puede acceder a él en la siguiente URL:

```
https://lindacasas.github.io/trivia-app/
```

## AUTOR

Linda Melissa Casas Huanca
