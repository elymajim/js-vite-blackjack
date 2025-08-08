/**
 * 
 * Crea un nuevo elemento (carta) en el DOM, segun la carta que se haya enviado como argumento 
 * @param {HTMLDListElement} divCartas Elemento del DOM en donde creara nuevos elementos 
 * @param {String} carta String que contiene la carta 
 * @param {Number} turno Numero del turno del jugador 
 */
    //Creacion de Cartas
    export const crearCarta = (divCartas,carta, turno) =>{
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartas[turno].append(imgCarta);

    }
