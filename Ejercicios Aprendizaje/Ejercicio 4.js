
do{
    input1 = parseFloat(prompt("Ingrese el primer número"));
    alert("pasó por aca")
}
while(isNaN(input1))
let num1 = input1

do{
    input2 = parseFloat(prompt("Ingrese el segundo número"));
    alert("pasó por aca")
}
while(isNaN(input2))
let num2 = input2

alert(num1 / num2)

switch(operacion){
    case "S":
        alert(`la suma es ${num1 + num2}`);
        break;
    case "R":
        alert(`la resta es ${num1 - num2}`);
        break;
    case "M":
        alert(`la multiplicacion es ${num1 * num2}`);
        break;
    case "D":
        alert(`la division es ${num1 / num2}`);
        break;
    default:
        break;
}
while(operacion != 0);