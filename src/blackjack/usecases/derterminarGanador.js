/**
 * Determina al ganador segun el puntaje final 
 * @param {Array<Number>} puntosJugadores Array que contiene el puntaje final de cada jugador
 */
 export const determinarGanador = (puntosJugadores) =>{

            const [puntosMinimos, puntosComputadora] = puntosJugadores;
           setTimeout(()=>{ //Se evaluara enseguida de terminar
        
            if (puntosMinimos > 21 && puntosComputadora > 21) {
                alert('Ambos perdieron :(');
            } else if (puntosMinimos === puntosComputadora) {
                alert('Empate!');
            } else if (puntosMinimos > 21) {
                alert('La Computadora Gana!');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana! :)');
            } else if (puntosMinimos > puntosComputadora) {
                alert('Jugador Gana! :)');
            } else {
                alert('La Computadora Gana!');
        }
        }, 100);
    }
   