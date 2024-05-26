import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import { Game } from "./rooms/Game.js";
import basicAuth from "express-basic-auth";


export default Arena.default({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('game', Game)
            .enableRealtimeListing();
    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.get("/", (req, res) => {
            res.send("A long time ago in a galaxy far, far away....");
        });

        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        const basicAuthMiddleware = basicAuth({
            // list of users and passwords
            users: {
                "admin": "admin",
            },
            // sends WWW-Authenticate header, which will prompt the user to fill
            // credentials in
            challenge: true
        });
        app.use("/colyseus",basicAuthMiddleware, monitor());
    },

    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }

});
