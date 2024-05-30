import Phaser from "phaser";
import Lobby from "./scenes/lobby.js";
import Game from "./scenes/game.js";
import Title from "./scenes/title.js";



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

    scene: [Title,Lobby, Game]
}

const game = new Phaser.Game(config)

