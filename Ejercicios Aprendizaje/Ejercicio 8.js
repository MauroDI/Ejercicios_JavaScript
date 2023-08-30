// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.
ejercicio8();
function ejercicio8(){
    let arr = [];
    let sum = 0;
    let input1;

    while (true) {
        input1 = prompt("Ingrese un número. 0 para salir");

        // Handle cancel button
        if (input1 === null) {
            alert("Ventana cerrada");
            break;
        }

        input1 = parseFloat(input1);

        if (!isNaN(input1)) {
            if (input1 === 0) {
                // User entered 0, exit the loop
                break;
            }

            arr.push(input1);
            sum += input1;
        } else {
            // Invalid input, prompt again
            alert("Entrada inválida. Ingrese un número válido.");
        }
    }

    if (arr.length > 0) {
        arr.sort(compare);
        alert(`El numero menor es ${arr[0]}`);
        alert(`El mayor es ${arr[(arr.length - 1)]}`);
        alert(`El promedio ${sum / arr.length}`);
    }

    function compare(a, b) {
        if (a > b) return 1; // si el primer valor es mayor que el segundo
        if (a == b) return 0; // si ambos valores son iguales
        if (a < b) return -1; // si el primer valor es menor que el segundo
    }
}
    // let arr = [];
    // let sum = 0;
    // do {
    //     do {
    //         input1 = parseFloat(prompt("Ingrese un número. 0 para salir"));
    //     }
    //     while (isNaN(input1))
        
    //     if (input1 != 0) {
    //         arr.push(input1);
    //         sum = sum + input1;
    //     }

    // } while (input1 !== 0)

    // arr.sort(compare)
    // alert(`El numero menor es ${arr[0]}`);
    // alert(`El mayor es ${arr[(arr.length - 1)]}`);
    // alert(`El promedio ${sum / arr.length}`)

    // function compare(a, b) {
    //     if (a > b) return 1; // si el primer valor es mayor que el segundo
    //     if (a == b) return 0; // si ambos valores son iguales
    //     if (a < b) return -1; // si el primer valor es menor que el segundo
    // }

// var sum=new Number();
// sum=0;
// var i=0;
// var max=new Number();
// max=0;
// var min=10000000;
// var n=parseFloat(prompt("Ingrese un numero entero o 0 (cero) para finalizar"));
// alert (typeof(n));
// while(n!=0){
//     i++;
//     sum=+sum + +n;
//     if(n>max){
//         max=n;
//     }
//     if(n<min){
//         min=n;
//     }
//     var n=parseFloat=prompt("Ingrese un numero entero o 0 (cero) para finalizar");

// }

// alert(`Maximo numero ${max}
//         Minimo numero ${min}
//         Promedio ${sum/i}`);