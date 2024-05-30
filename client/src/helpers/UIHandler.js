import ZoneHandler from './ZoneHandler';

export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);


        //Location Zones
        const width = scene.scale.width
        const height = scene.scale.height
        const zonePad = 600

        console.log(`WIDTH : ${width}, HEIGHT: ${height}`)

        const zone1 = scene.dropZone = this.zoneHandler.renderZone(zonePad, height/2)
        const zone2 = scene.dropZone = this.zoneHandler.renderZone(width/2, height/2)
        const zone3 = scene.dropZone = this.zoneHandler.renderZone(width-zonePad, height/2)

        
        const dropZones = [zone1, zone2, zone3]

         this.buildZones = () => {
            dropZones.forEach(zone => {
                this.zoneHandler.renderOutline(zone);
            });
        }

        //Player Zones

        this.buildPlayerAreas = () => {

            const zonePad = 100
            const zoneHeight = 200
            const zoneWidth = 600

            
            //OPP HAND
            scene.opponentHandArea = scene.add.rectangle(width/2,zonePad, zoneWidth, zoneHeight);
            scene.opponentHandArea.setStrokeStyle(4, 0xff69b4);
            
            //OPP DECK
            scene.opponentDeckArea = scene.add.rectangle(width-100, 135, 155, 215);
            scene.opponentDeckArea.setStrokeStyle(3, 0x00ffff);
            
            //PLAYER HAND
            scene.playerHandArea = scene.add.rectangle(width/2,height-zonePad, zoneWidth, zoneHeight);
            scene.playerHandArea.setStrokeStyle(4, 0xff69b4);

            //PLAYER DECK
            scene.playerDeckArea = scene.add.rectangle(width-100, height-135, 155, 215);
            scene.playerDeckArea.setStrokeStyle(3, 0x00ffff);
        }

        this.buildGameText = () => {
            scene.dealCards = scene.add.text(width-130, height/2, "Deal Cards").setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        }

        this.buildUI = () => {
            this.buildZones();
            this.buildPlayerAreas();
            this.buildGameText();
        }

    }
}