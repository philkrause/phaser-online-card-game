import Card from "./Card.js";

export default class CardBack extends Card {
    constructor(scene) {
        super(scene);
        this.name = "cardBack";
        this.playerCardSprite = "lightback";
        this.opponentCardSprite = "darkback";
    }
}