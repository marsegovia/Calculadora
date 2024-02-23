var primerNumero = null;
var operacionActual = null;

function boton(numero) {
    var pantalla = document.getElementById("resultado");
    if (pantalla.innerText === "0") {
        pantalla.innerText = numero;
    } else {
        pantalla.innerText += numero;
    }
}

function operacion(op) {
    var pantalla = document.getElementById("resultado");
    primerNumero = parseFloat(pantalla.innerText);
    operacionActual = op;
    pantalla.innerText = "0";
}

function calcular() {
    var pantalla = document.getElementById("resultado");
    var segundoNumero = parseFloat(pantalla.innerText);
    var resultado = 0;
    
    switch (operacionActual) {
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            break;
        case '/':
            resultado = primerNumero / segundoNumero;
            break;
        default:
            break;
    }
    
    pantalla.innerText = resultado.toFixed(2);
    primerNumero = null;
    operacionActual = null;
}

function limpiar() {
    var pantalla = document.getElementById("resultado");
    pantalla.innerText = "0";
    primerNumero = null;
    operacionActual = null;
}