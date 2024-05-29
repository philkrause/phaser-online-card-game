import Phaser from "phaser";
import Game from "./scenes/game.js";

const config = {
    type: Phaser.AUTO,
    scale: {
        // Fit to window
        width: window.innerWidth,
        height: window.innerHeight,
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [Game]
}

const game = new Phaser.Game(config)

