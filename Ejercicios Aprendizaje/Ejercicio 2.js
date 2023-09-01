calculosCirculo();

function calculosCirculo(){
    function changeCenterDiv() {
        const centeredDiv = document.getElementById('centered-div');
        centeredDiv.style.backgroundColor = "#d4d4be";
        centeredDiv.innerHTML =
            `<h3>Calcular el área y perímetro de un círculo</h3>
            <div>
                <form id="respuestaForm">
                    <label for="radio">Radio del círculo:</label>
                    <input type="number" placeholder="Ingrese el radio" name="radio" id="radio" required>
                    <input type="submit" value="Calcular">
                </form>
                <div id="resultados"></div>
            </div>
        `;
    
        // Add a submit event listener to the form
        const respuestaForm = document.getElementById('respuestaForm');
        respuestaForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting as a traditional HTML form
            const radio = parseFloat(document.getElementById('radio').value);
            if (!isNaN(radio)) {
                calcularAreaYPerimetro(radio);
            } else {
                mostrarMensajeError("Ingrese un valor válido para el radio.");
            }
        });

        function calcularAreaYPerimetro(radio) {
            const area = Math.PI * Math.pow(radio, 2);
            const perimetro = 2 * Math.PI * radio;
            
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = `
                <p>Área del círculo: ${area.toFixed(2)}</p>
                <p>Perímetro del círculo: ${perimetro.toFixed(2)}</p>
            `;
        }

        function mostrarMensajeError(mensaje) {
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = `<p style="color: red;">${mensaje}</p>`;
        }
    }
    changeCenterDiv();
}
