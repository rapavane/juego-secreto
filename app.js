let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`Intentos ${intentos}`);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' } !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}


function limpiarCampo(){
    document.querySelector('#valorUsuario').value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si numeroGenerado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar campo
    limpiarCampo();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();


////////////////////////// Ejercicios ////////////////////////
/*
//1
function indiceMasaCorporal(altura, peso) {
    return peso/Math.sqrt(altura);
}
//2
function factorial(num) {
    let fact = num;
    while(num >= 2){
        fact *= --num;
    }
    console.log(fact);
    return fact;
}
//3
function dolarAReales(dolares) {
    return dolares*4.80;
}
//4
function areaSuperficie(largo, ancho) {
    console.log(`Área: ${largo*ancho} Perímetro: ${2*(largo+ancho)}`);
    return;
}
//5
function areaCiruclar(radio) {
    console.log(`Área: ${3.14*radio*radio} Perímetro: ${2*3.14*radio}`);
    return;
}
//6
function tablaDeMultiplicar(num) {
    let i=1
    while(i <= 10){
        console.log(`${num} X ${i} = ${num*i}.`);
        i++;
    }
    return;
}*/