import NetworkHandler from "../helpers/NetworkHandler";

export default class Lobby extends Phaser.Scene {
    constructor() {
        super({
            key: 'Lobby'
        });
    }

    preload() {

        console.log("lobby created")

        this.load.image('luke', 'src/assets/13Luke.png');
    }

    create() {
        const width = this.scale.width
        const height = this.scale.height
        this.add.text(width/2, height/2, "Waiting for player 2..").setFontSize(36).setFontFamily('Trebuchet MS').setOrigin(.5).setColor('#00ffff')
        this.NetworkHandler = new NetworkHandler(this);

    }

    update() {

    }
}