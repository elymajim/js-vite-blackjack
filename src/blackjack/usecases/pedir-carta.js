    /**
     * Esta funcion retorna una sola carta tomada aleatoriamente del deck
     * @param {Array<String>} deck es un arrglo de string
     * @returns {String} retorna la carta del deck
     */
    //Esta funcion me permite tomar una carta 
    export const pedirCarta = (deck)=>{

        if( !deck || deck.length === 0){
            throw new Error ('No hay Cartas en el deck');
        }
        return deck.pop();
    }