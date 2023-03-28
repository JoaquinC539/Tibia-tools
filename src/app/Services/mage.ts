import { Injectable } from "@angular/core";
import { Spell } from "../interfaces/spell.interface";
@Injectable({
  providedIn:'root'
})
export class Mage{
  public mageSpells:Spell[]
  constructor(){
    this.mageSpells=[{
      name:"exura ",
      mana:40,
      cooldown:1,
      modifier:1,
      type: "heal"
    },
    {
      name:"exura gran",
      mana:70,
      cooldown:1,
      modifier:2.3,
      type: "heal"
    },
    {
      name:"exura vita",
      mana:160,
      cooldown:1,
      modifier:3,
      type: "heal"
    },
    {
      name:"Strong wave (strong ice wave/energy wave)",
      mana:170,
      cooldown:8,
      modifier:6.4,
      type: "damage",
      targets: 8
    },{
      name:"Lesser wave (terra wave/great fire wave)",
      mana:120,
      cooldown:4,
      modifier:4.55,
      type: "damage",
      targets:8,
    },
    {
      name:"Rune",
    mana:0,
    cooldown:2,
    modifier:2.2,
    type: "damage",
    targets:10
    },
    {
      name:"SD Rune",
    mana:0,
    cooldown:2,
    modifier:7.45,
    type: "damage",
    targets:1
    },
    {
      name:"Lesser Ultimate Explosion",
    mana:600,
    cooldown:40,
    modifier:7.0,
    type: "damage",
    targets:10
    },
    {
      name:"Ultimate Explosion",
    mana:1100,
    cooldown:40,
    modifier:7.2,
    type: "damage",
    targets:10
    }
  ]
    }

}
