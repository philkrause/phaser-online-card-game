import Card from "./Card.js";

export default class Ping extends Card {
    constructor(scene) {
        super(scene);
        this.name = "Emperor Palpatine";
        this.playerCardSprite = "luke";
        this.opponentCardSprite = "magentaPing";
    }
}