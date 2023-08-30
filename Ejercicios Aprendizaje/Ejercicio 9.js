// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().
ejercicio9()
function ejercicio9(){
let frase = prompt("Ingrese una frase");

let arr = frase.split("");
frase = arr.join(" ");

alert(frase)
}