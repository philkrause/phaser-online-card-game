import CardBack from './cards/CardBack';
import Luke from './cards/Luke';

export default class DeckHandler {
    constructor(scene) {
        this.dealCard = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                luke: new Luke(scene)
            }
            let newCard = cards[name];
            return(newCard.render(x, y, type));
        }
    }
}