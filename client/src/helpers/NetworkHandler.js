import * as Colyseus from 'colyseus.js';

export default class NetworkHandler {
    constructor(scene) {

        scene.client = new Colyseus.Client('ws://localhost:2567');
        this.room;
        this.scene = scene;

        scene.client.joinOrCreate("game").then(room => {
            console.log("JOIN SUCCESSFUL");

            this.room = room;
            
            this.room.onMessage("start-game", () => {
                console.log("Start game message received.");
                scene.start("game"); // Transition to the game scene
            });

            //Starting Deck
            //scene.DeckHandler.dealCard(scene.scale.width-100, 135, "cardBack", "opponentCard");
            //scene.DeckHandler.dealCard(scene.scale.width-100, scene.scale.height-135, "cardBack", "playerCard");

            this.room.onMessage("server-message", (message) => {
                console.log("Server message: " + message)
            });

            this.room.onMessage("game-message", (message) => {
                console.log("Game message: " + message)
                if (message === "draw") {
                    scene.GameHandler.draw("opponentCards");
                }
                else if (message === "drop") {
                    scene.GameHandler.drop();
                }
            });
        }).catch(e => {
            console.log("JOIN ERROR", e);
        });

        this.sendMessage = (message) => {
            this.room.send("game-message", message)
        };

    }
}