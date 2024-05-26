export default class Card {
    constructor(scene) {
        this.render = (x, y, type) => {
            let sprite;
            if (type === 'playerCard') {
                sprite = this.playerCardSprite;
            } else {
                sprite = this.opponentCardSprite;
            }
            let card = scene.add.image(x, y, sprite).setScale(0.12, 0.12).setInteractive().setData({
                "name": this.name,
                "type": type,
                "sprite": sprite
            });
            if (type === 'playerCard') {
                scene.input.setDraggable(card);
            }
            return card;
        }
    }
}