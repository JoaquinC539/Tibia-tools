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
      name:"lesser wave (terra wave/great fire wave)",
      mana:160,
      cooldown:4,
      modifier:6.55,
      type: "damage",
      targets:8,
    },
    {
      name:"Rune",
    mana:0,
    cooldown:4,
    modifier:2.2,
    type: "damage",
    targets:10
    }
  ]
    }

}
