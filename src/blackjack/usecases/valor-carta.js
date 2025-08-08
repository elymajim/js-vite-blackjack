
/**
 * Obtener el valor de la carta
 * @param {String} carta String que contiene la carta para poder obtener el valor de dicha carta
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) =>{
        const valor = carta.substring(0, carta.length-1); //extraer el string hasta que llegue al ultimo elemento (letra, num etc)
        return ( isNaN(valor)) ?  (valor === 'A') ? 11 : 10 : valor * 1 ; //isNaN es una funcion de JS que verifica si no es un numero

    }