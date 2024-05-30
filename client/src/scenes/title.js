import NetworkHandler from "../helpers/NetworkHandler";

export default class Title extends Phaser.Scene {
    constructor() {
        super({
            key: 'Title'
        });
    }

    preload() {

        console.log("Title created")

        this.load.image('luke', 'src/assets/13Luke.png');
    }

    create() {
        const width = this.scale.width
        const height = this.scale.height
        const j = this.add.text(width/2, height/2, "Join Game").setFontSize(36).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        j.on('pointerdown', () => {
            this.scene.stop("Title")
            this.scene.start("Lobby")
            
        });



        // this.buildGameText = () => {
        //     scene.dealCards = scene.add.text(width-130, height/2, "Deal Cards").setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        // }
    }

    update() {

    }
}