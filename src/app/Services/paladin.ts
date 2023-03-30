import {Injectable } from "@angular/core";
import { Spell } from "../interfaces/spell.interface";

@Injectable({
  providedIn:"root"
})
export class PaladinSpells{
  public spells:Spell[]
    constructor(){
      this.spells=[{
        name:"exura",
      mana:40,
      cooldown:1,
      modifier:1,
      type: "heal"
      },
      {
        name:"exevo mas san",
      mana:160,
      cooldown:4,
      modifier:6.75,
      type: "damage",
      targets:9
      },
      {
        name:"exura gran san",
      mana:210,
      cooldown:1,
      modifier:4.5,
      type: "heal"
      },
      {
        name:"Diamond Arrow",
      mana:0,
      cooldown:2,
      modifier:1,
      type: "auto-attack",
      targets:8
      },
      {
        name:"Avalanche Rune",
      mana:0,
      cooldown:2,
      modifier:2.2,
      type: "damage",
      targets:10
      },
      {
        name:"utito tempo san",
      mana:40,
      cooldown:10,
      duration:10,
      type: "support"
      },
        ]
    }
}
