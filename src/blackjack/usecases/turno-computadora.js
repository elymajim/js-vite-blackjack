import { pedirCarta } from "./";
import { acumularpuntos } from "./";
import { determinarGanador } from "./";
import { crearCarta } from "./";
/**
 * Simula el turno de la computadora
 * @param {HTMLDListElement} divCartas Elemento del DOM en donde se van a ir creando las cartas
 * @param {HTMLDListElement} puntosHTML Elemento del DOM en donde se va ir mostrando el score
 * @param {Number} puntosMinimos  Los puntos minimos que tiene que tener la computadora para poder ganar 
 * @param {Array<String>} deck Array que contiene la baraja con la que se va a jugar
 * @param {Array<Number>} puntosJugadores Array del puntaje cada jugador 
 */
//Turno de la computadora
   export  const turnoComputadora = (divCartas, puntosHTML, puntosMinimos, deck = [], puntosJugadores) =>{

        if(!puntosMinimos || !deck) throw  new Error ('Los puntos minimos o deck son necesarios')

        let puntosComputadora =0;
        do{
            const carta = pedirCarta(deck);
            puntosComputadora = acumularpuntos (puntosJugadores, puntosHTML, carta, puntosJugadores.length-1);
            crearCarta(divCartas, carta, puntosJugadores.length-1);

        }while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

        determinarGanador(puntosJugadores);
    }