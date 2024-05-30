export default class GameHandler {
    constructor(scene) {

        this.playerCards = [];
        this.opponentCards = [];
        const width = scene.scale.width

        const cardposX = (width/2) - 230
        const cardposY = scene.scale.height-100

        this.draw = (type) => {
            if (type === "playerCards") {
                for (let i = 0; i < 4; i++) {
                    let card = this.playerCards.push(scene.DeckHandler.dealCard(cardposX + (i * 155), cardposY, "luke", "playerCard"));
                }
            } else if (type === "opponentCards") {
                for (let i = 0; i < 4; i++) {
                    let card = this.opponentCards.push(scene.DeckHandler.dealCard((cardposX) + (i * 155), 100, "cardBack", "opponentCard"));
                }
            }
        }

        this.drop = (card) => {
            this.opponentCards.shift().destroy();
            scene.DeckHandler.dealCard((scene.dropZone.x - 350) + (scene.dropZone.data.values.cards * 50), scene.dropZone.y, "luke", "opponentCard");
            scene.dropZone.data.values.cards++;
        }
    }
}