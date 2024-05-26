import Phaser from "phaser";
import Game from "./scenes/game.js";

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        width: 1200,
        height: 1000
    },
    scene: [
        Game
    ]
    
};

const game = new Phaser.Game(config);
