// Add this variable at the top to keep track of whether the ejercicio-window is visible
let ejercicioWindowVisible = false;

const elementsWithClass = document.querySelectorAll('.your-class-name');
document.addEventListener('click', closeEjercicioWindow);
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // Loop through the selected elements and add the event listener
    const botonesMenu = document.querySelectorAll('.menu-button');
botonesMenu.forEach(function (element) {
    element.addEventListener('click', function () {
        // Your event handling code here...
            toggleEjercicioWindow(); // Call the function to toggle the ejercicio-window
    });
});
});
// Function to initialize hover effect
function hoverEffect() {
    // Wait for the document to be ready
    $(document).ready(function () {
        // Initial content in the main area
        $('#dynamic-content').html('<p>Select a button to load content.</p>');

        // Switch: define text for each button
        const buttonTexts = {
            button1: `Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.`,
            button2: `Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas: área = PI * radio^2, perímetro = 2 * PI * radio.`,
            button3: `Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de edad se debe mostrar un mensaje indicándolo.`,
            button4: `Realiza un programa que sólo permita introducir los caracteres "S" y "N". Si el usuario ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.`,
            button5: `Construir un programa que simule un menú de opciones para realizar las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores numéricos enteros. El usuario, además, debe especificar la operación con el primer carácter de la operación que desea realizar: "S' o "s" para la suma, "R" o "r" para la resta, "M" o "m" para la multiplicación y "D" o "d" para la división.`,
            button6: `Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.`,
            button7: `Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación solicite números al usuario hasta que la suma de los números introducidos supere el límite inicial.`,
            button8: `Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos.`,
            button9: `Realizar un programa que pida una frase y el programa deberá mostrar la frase con un espacio entre cada letra. La frase se mostrará así: H o l a. Nota: recordar el funcionamiento de la función Substring().`,
            button10: `Escribir una función flecha que reciba una palabra y la devuelva al revés.`,
            button11: `Escribir una función que reciba un String y devuelva la palabra más larga. String Ejemplo: “Guia de JavaScript”. Resultado esperado: “JavaScript”.`,
            button12: `Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato.`,
            button13: `Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.`,
            button14: `Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.`,
            button15: `Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El radio del círculo lo proporcionará el usuario.`,
            button16: `Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios y los muestre por pantalla.`,
            button17: `Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el resultado.`,
            button18: `A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]: a) Determinar cual de los dos elementos de texto es mayor. b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false. c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos.`,
            button19: `Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20.`,
            button20: `Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y muestra el siguiente array [6, 9, 12, 15, 18].`,
            button21: `Escribir un programa para obtener un array de las propiedades de un objeto Persona. Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.`,
            button22: `Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a elección.`,
            button23: `Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo amarillo, por ejemplo)
            <img src="EjerciciosMedia/Ejercicio24.jpg" alt="Ejercicio 24" style="max-width: 100%;">`,
            button24: `Escribir un programa de JavaScript que a través de un formulario calcule el radio de un círculo y lo muestre en el HTML.`,
            button25: `Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario:
            <!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Obtener nombre y apellido de form </title>
</head><body>
<form id="form1" onsubmit="getFormValores()">
Nombre: <input type="text" name="nombre" value="David"><br>
Apellido: <input type="text" name="apellido" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>`,
        };
        

        // Button hover events to show specific text
        for (let i = 1; i <= 25; i++) {
            $(`#button${i}`).hover(function (e) {
                showDynamicContent(buttonTexts[`button${i}`], e);
            }, function () {
                $('#dynamic-content').css('display', 'flex');
            });
        }

    });
}
// Function to show dynamic content with adjusted position
function showDynamicContent(content, e) {
    const dynamicContent = $('#dynamic-content');
    dynamicContent.html('<p>' + content + '</p>');

    // Get the window dimensions
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();

    // Calculate the position based on the mouse coordinates
    const contentWidth = dynamicContent.outerWidth();
    const contentHeight = dynamicContent.outerHeight();

    // Set the initial position at the mouse coordinates
    let top = e.pageY;
    let left = e.pageX;

    // Check if the content would go beyond the right edge of the window
    if (left + contentWidth > windowWidth) {
        left = windowWidth - contentWidth;
    }

    // Check if the content would go beyond the bottom edge of the window
    if (top + contentHeight > windowHeight) {
        top = windowHeight - contentHeight;
    }

    dynamicContent.css({
        top: top + 'px',
        left: 120 + 'px',
        display: 'absolute'
    });
}
// Dinamically generate the buttons
function buttonGenerator() {
    for (let i = 1; i <= 25; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-warning with-border menu-button';
        button.id = `button${i}`;
        button.textContent = `Ejercicio ${i}`;
        button.onclick = () => {
            generateEjercicioContent();
            loadScript(`Ejercicios Aprendizaje/Ejercicio ${i}.js`);
            // toggleEjercicioWindow(); // Call the function to toggle the ejercicio-window
        };

        // Append the button to the button container
        document.querySelector('.menu .btn-group-vertical').appendChild(button);
    }
}
// Dinamically generate the JS link
function loadScript(fileName) {
    var script = document.createElement('script');
    script.src = fileName;
    script.type = 'text/javascript';
    document.getElementById('dynamic-content').innerHTML = '';
    document.getElementById('dynamic-content').appendChild(script);
}
// Function to toggle dark mode
function toggleDarkMode() {
    // Get a reference to the <body> element
    const body = document.body;

    // Toggle a CSS class to apply or remove dark mode styles
    body.classList.toggle("dark-mode");
    // Update button styles based on the current mode
    updateButtonStyles();
}
function updateButtonStyles() {
    const isDarkMode = document.body.classList.contains('dark-mode'); // Check if dark mode is active
    const buttonContainer = document.querySelector('.menu .btn-group-vertical');

    for (let i = 1; i <= 25; i++) {
        const button = document.getElementById(`button${i}`);

        // Set button class based on dark mode
        button.className = isDarkMode ? 'btn btn-outline-warning menu-button' : 'btn btn-warning with-border menu-button';
    }
}
// Function to toggle the visibility and centering of the ejercicio-window
function toggleEjercicioWindow() {
    const ejercicioWindow = document.querySelector('.ejercicio-window');

    if (!ejercicioWindowVisible) {
        ejercicioWindow.style.display = 'flex';
        ejercicioWindow.style.alignItems = 'center';
        ejercicioWindow.style.justifyContent = 'center';
        ejercicioWindowVisible = true;
    }
}
// Function to close the ejercicio window when clicking outside of it
function closeEjercicioWindow(event) {
    const ejercicioWindow = document.querySelector('.ejercicio-window');
    const dinamicContent = ejercicioWindow.querySelector('.centered-div');
    
    // Check if the click target is not a button or the ejercicio window itself
    if (!event.target.classList.contains('menu-button') 
    && !dinamicContent.contains(event.target)) {
        ejercicioWindow.style.display = 'none';
        ejercicioWindowVisible = false;
    }
}
function generateEjercicioContent() {
    const ejercicioWindow = document.querySelector('.ejercicio-window');
    const centeredDiv = ejercicioWindow.querySelector('#centered-div');
    centeredDiv.style.backgroundColor = "rgba(212, 212, 190, 1)";
}