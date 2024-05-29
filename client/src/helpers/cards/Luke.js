import Card from "./Card.js";

export default class Luke extends Card {
    constructor(scene) {
        super(scene);
        this.name = "Luke Skywalker";
        this.playerCardSprite = "luke";
        this.opponentCardSprite = "luke";
    }
}