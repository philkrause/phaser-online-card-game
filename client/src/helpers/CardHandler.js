export default class CardHandler {
    constructor() {
        this.flipCard = (card) => {
            if (card.data.values.type === "playerCard") {
                if (card.texture.key === "lightback") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("lightback");
                }
            } else if (card.data.values.type === "opponentCard") {
                if (card.texture.key === "darkback") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("darkback");
                }
            }
        }
    }
}