import Phaser from "phaser";
import Lobby from "./scenes/lobby.js";
import Game from "./scenes/game.js";
import Title from "./scenes/title.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1600,
    zoom: 1,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [Game,Title, Lobby ]

}

const game = new Phaser.Game(config)