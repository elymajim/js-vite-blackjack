    import _ from 'underscore';
    //Esta funcion crea una nueva baraja, con orden aleatorio
    /**
     * Esta funcion crea un nuevo deck (una baraja nueva)
     * @param {Array<string>} tiposDeCarta Ejemplo: [ 'C', 'D', 'H', 'S']
     * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
     * @returns {Array} retorna una braja nueva de cartas
     */
     export const crearDeck = (tiposDeCarta, tiposEspeciales)=>{

        if(!tiposDeCarta) throw new Error ('Tipos de Carta es obligatorio');

        let deck = [];
        for(let i = 2; i<=10; i++){

            for(let tipo of tiposDeCarta){
                deck.push (i + tipo);
            }
        }

        for(let tipo of tiposDeCarta){
            for(let esp of tiposEspeciales){
                deck.push(esp  + tipo);
            }
        }
        return _.shuffle (deck);
    }
