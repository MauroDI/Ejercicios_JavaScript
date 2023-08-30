// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

ejercicio11();

function ejercicio11() {
    let frase = prompt("Ingrese una frase")

    let arr = frase.split(" ");

    let palabraMasLargas = [];
    let max = 0;

    for (const palabraActual of arr) {
        let largoPalabraActual = palabraActual.length;

        if (largoPalabraActual > max) {
            palabraMasLargas = [palabraActual];
            max = largoPalabraActual;
        } else if (largoPalabraActual === max) {
            palabraMasLargas.push(palabraActual);
        }
    }


    if (palabraMasLargas.length === 1) {
        alert("La palabra más larga es: " + palabraMasLargas[0]);
    } else {
        alert("Las palabras más largas son: " + palabraMasLargas.join(", "));
    }

}


