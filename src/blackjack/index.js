import _ from 'underscore';

import {crearDeck, pedirCarta, acumularpuntos, crearCarta, turnoComputadora} from './usecases';

//Funciones anonimas autoinvocadas, se crea un scop que no tiene referencia por nombre
const miModulo = (()=>{
    'use strict'



    let deck=[];
    const tipos = [ 'C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores=[];

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartas = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    //Esta Funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) =>{
        
        deck = crearDeck(tipos, especiales);
        puntosJugadores =[];
        for(let i =0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartas.forEach(elem => elem.innerHTML = '');
        
        btnDetener.disabled = false;
        btnPedir.disabled = false;
      
    }

   
   


    //Eventos
    btnPedir.addEventListener('click', () =>{
        const carta = pedirCarta(deck);
        const puntosJugador = acumularpuntos(puntosJugadores, puntosHTML,  carta, 0);
        crearCarta(divCartas, carta, 0);
   

        if(puntosJugador > 21 ){
            //console.warn('Losiento mucho perdiste'),
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora (divCartas, puntosHTML, puntosJugador, deck, puntosJugadores);
        }else if(puntosJugador === 21){
            //console.log('21 genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(divCartas, puntosHTML, puntosJugador, deck, puntosJugadores);
        }
    });

    btnDetener.addEventListener('click', () =>{
        btnPedir.disabled =true;
        btnDetener.disabled = true;
        turnoComputadora(divCartas, puntosHTML, puntosJugadores[0], deck, puntosJugadores);
    
    });

    btnNuevo.addEventListener( 'click', () =>{

   
        inicializarJuego();

   
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();


