 import { valorCarta } from "./valor-carta";

 /**
  * Acumula los puntos de las cartas que va recibiendo, guardandolos en un array, segun el turno del jugador
  * @param {Array} puntosJugadores Es una array con el puntaje cada jugador 
  * @param {element} puntosHTML Es un elemento del DOM  en donde se colocara el score de cada jugador
  * @param {String} carta Es un string que hace referencia a la carta que se sumara a los puntos
  * @param {Number} turno Es el numero del turno del jugador
  * @returns 
  */
 //Turno en posicion 0 = primer Jugador y el ultimo sera la computadora
  export  const acumularpuntos= (puntosJugadores, puntosHTML, carta, turno) =>{
            puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
            puntosHTML[turno].innerText = puntosJugadores[turno];
            return puntosJugadores[turno];
    }