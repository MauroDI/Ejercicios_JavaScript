document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.querySelectorAll('#item-list li');
    const customModal = document.getElementById('custom-modal');
    const scriptResultContainer = document.getElementById('scriptResult');
    // const closeButton = document.getElementById('close-button');

    itemList.forEach(function (item) {
        item.addEventListener('click', function () {
            const itemName = this.textContent;
            // Replace this with your script logic
            const scriptOutput = `You clicked on ${itemName}. Script output: Some result`;
            scriptResultContainer.innerHTML = scriptOutput;
            customModal.style.display = 'block'; // Show the custom modal
        });
    });

    // closeButton.addEventListener('click', function () {
    //     customModal.style.display = "none"; // Hide the custom modal
    // });
});

// function ejercicio8() {
//     let arr = [];
//     let sum = 0;
//     do {
//         do {
//             var input1 = parseFloat(prompt("Ingrese un número. 0 para salir"));
//         }
//         while (isNaN(input1))
//         if (input1 != 0) {
//             arr.push(input1);
//             sum = sum + input1;
//         }

//     } while (input1 !== 0 && input !== undefined)
//     if (input1 !== undefined){
//     arr.sort(compare)
//     alert(`El numero menor es ${arr[0]}`);
//     alert(`El mayor es ${arr[(arr.length - 1)]}`);
//     alert(`El promedio ${sum / arr.length}`)
//     }
//     function compare(a, b) {
//         if (a > b) return 1; // si el primer valor es mayor que el segundo
//         if (a == b) return 0; // si ambos valores son iguales
//         if (a < b) return -1; // si el primer valor es menor que el segundo
//     }
// }
// function ejercicio9() {
//     let frase = prompt("Ingrese una frase");

//     let arr = frase.split("");
//     frase = arr.join(" ");

//     alert(frase)
// }


    function loadScript(scriptFileName) {
        var script = document.createElement('script');
        script.src = scriptFileName;
        document.body.appendChild(script);
    }

   