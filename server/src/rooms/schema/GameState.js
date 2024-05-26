import * as schema from "@colyseus/schema";

//define custom state schema
export class GameState extends schema.Schema {
  constructor() {
    super();
    this.mySynchronizedProperty = "LET THE GAMES BEGIN";
  }
}

schema.defineTypes(GameState, {
  mySynchronizedProperty: "string",
});
