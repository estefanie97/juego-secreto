
let numeroSecreto = 0;
let intentos = 1;

condicionesIniciales();


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //Es un objeto
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   console.log(numeroSecreto === numeroUsuario);// === es para comparar en tipo y en valor coincidan
   if(numeroUsuario === numeroSecreto){
     asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1? "vez":"veces"}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    //EL usuario no acertó
    if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p',"El número secreto es menor");
    }else{
        asignarTextoElemento('p',"El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
   }
   
}

function generarNumeroSecreto(params) {
    return Math.floor(Math.random() * 10) + 1;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('h1',"Juego del número secreto!");
    asignarTextoElemento('p','Indica un número del 1 al 100');
}
