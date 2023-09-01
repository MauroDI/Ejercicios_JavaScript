// Function to generate HTML content
// function generateHTML() {

// }

// // Call the generateHTML function to generate HTML content
// generateHTML();
function changeCenterDiv() {
    const ejercicioWindow = document.querySelector('.ejercicio-window');
    const centeredDiv = ejercicioWindow.querySelector('#centered-div');
    
    
    centeredDiv.innerHTML =
        `<h3>Como está el día de hoy?</h3>
        <div>
            <form id="respuestaForm">
                <input type="text" placeholder="(soleado, nublado, lloviendo, etc...)" name="respuesta" id="respuesta">
                <row>
                <input type="submit" value="Enviar">
                <input id="cancel-button" type="button" action="<script>ejercicioWindowVisible = false</script>" value="Salir">
                </row>
            </form>
        </div>
    `;

    // Add a submit event listener to the form
    const respuestaForm = document.getElementById('respuestaForm');
    respuestaForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting as a traditional HTML form
        const respuestaInput = document.getElementById('respuesta').value;
        respuesta(respuestaInput);
    });
    function respuesta(respuesta) {
        const ejercicioWindow = document.querySelector('.ejercicio-window');
        const centeredDiv = ejercicioWindow.querySelector('#centered-div');
        centeredDiv.innerHTML = `El día de hoy está ... ${respuesta}`;
    }
}
changeCenterDiv();
