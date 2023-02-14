import { Injectable } from '@angular/core';
import { Spell } from '../interfaces/spell.interface';


@Injectable({
  providedIn:'root'
})
export class KnightCalculations{
  public kspells:Spell[];

  constructor(){
    this.kspells=[{
      name:"exura ico",
      mana:40,
      cooldown:1,
      modifier:1,
      type: "heal"
    },{
      name:"exori",
      mana:115,
      cooldown:4,
      modifier:1.5,
      type: "damage",
      targets: 8
    },{
      name:"exori mas",
      mana:160,
      cooldown:8,
      modifier:1.2,
      type: "damage",
      targets:10,
    },{
      name:"utamo tempo",
      mana:200,
      cooldown:2,
      type: "support",
      duration:10
    },
    {
      name:"utito tempo",
      mana:290,
      cooldown:2,
      type: "support",
      duration:10
    },
    {
      name:"exori min",
      mana:200,
      cooldown:6,
      modifier:2.3,
      targets:3,
      type: "damage"
    },
    {
      name:"exura gran ico",
      mana:200,
      cooldown:600,
      modifier:8,
      type: "heal"
    },
    {
      name:"exori gran",
      mana:340,
      cooldown:6,
      modifier:3,
      targets:8,
      type: "damage"
    },
    {
      name:"exura med ico",
      mana:90,
      cooldown:1,
      modifier:2,
      type: "heal"
    },

    ]
  }
}
