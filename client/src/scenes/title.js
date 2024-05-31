import NetworkHandler from "../helpers/NetworkHandler";

export default class Title extends Phaser.Scene {
    constructor() {
        super({
            key: 'Title'
        });
    }

    preload() {

    }

    create() {
        const width = this.scale.width
        const height = this.scale.height
        const joinText = this.add.text(width/2, height/2, "Join Game").setFontSize(36).setFontFamily('Trebuchet MS').setColor('#00ffff').setOrigin(.5).setInteractive();
        joinText.on('pointerdown', () => {
            this.scene.stop("Title")
            this.scene.start("Lobby")
            
        });
    }

    update() {

    }
}