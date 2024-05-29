export default class GameHandler {
    constructor(scene) {

        this.playerCards = [];
        this.opponentCards = [];

        this.draw = (type) => {
            if (type === "playerCards") {
                const midScreen = scene.scale.width
                for (let i = 0; i < 4; i++) {
                    let card = this.playerCards.push(scene.DeckHandler.dealCard(((midScreen/2) - 250) + (i * 155), scene.scale.height-100, "luke", "playerCard"));
                }
            } else if (type === "opponentCards") {

                for (let i = 0; i < 4; i++) {
                    let card = this.opponentCards.push(scene.DeckHandler.dealCard(155 + (i * 155), 135, "cardBack", "opponentCard"));
                }
            }
        }

        this.drop = () => {
            this.opponentCards.shift().destroy();
            scene.DeckHandler.dealCard((scene.dropZone.x - 350) + (scene.dropZone.data.values.cards * 50), scene.dropZone.y, "luke", "opponentCard");
            scene.dropZone.data.values.cards++;
        }
    }
}