let numeroMaximo=10;
let intentos= 1;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
// traigo un valor desde el HTML
let elementoHTML = document.querySelector(elemento);
// CAMBIO EL VALOR DE HTML
elementoHTML.innerHTML =texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
     if(numeroDeUsuario == numeroSecreto)
            {
                asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos == 1)? "vez" : "veces"}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else if(numeroDeUsuario<numeroSecreto){
                asignarTextoElemento('p', 'El número es incorrecto, el numero secreto es mayor');
                intentos++;
                limpiarCaja();
            }else{
                asignarTextoElemento('p', 'El número es incorrecto, el numero secreto es menor');
                intentos++; 
                limpiarCaja();
            }
        
}
function condicionesInciales(){
    asignarTextoElemento('h1','Juego del número secreto' );
    asignarTextoElemento('p','Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje del numero en el intervalo
    //Generar el numero aleatorio
    //Inicializar intentos
    condicionesInciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto(){
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 //si ya sorteamos todos los numeros
 if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
 }else{
    // si el numero ya esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
 
}

condicionesInciales();
