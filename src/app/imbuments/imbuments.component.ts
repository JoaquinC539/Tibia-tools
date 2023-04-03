import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-imbuments',
  templateUrl: './imbuments.component.html',
  styleUrls: ['./imbuments.component.scss']
})
export class ImbumentsComponent implements OnInit{
  public goldToken: number
  public ropeBelt: number
  public silencerClaw: number
  public grimleechWings: number
  public vampireTeeth: number
  public bloodyPincer: number
  public pieceOfDeadbrain: number
  public protectiveCharm: number
  public sabertooth: number
  public vexclawTalon: number
  public lifeLeech:boolean;
  public manaLeech:boolean;
  public criticalStrike:boolean;
  public extraImbue:boolean
  public lifeLeechNumber:number
  public manaLeechNumber:number;
  public lifeImbueStage:string="2";
  public manaImbueStage:string="2";
  public criticalImbueStage:string="2";
  public extraImbueCost:number;
  public imbueResults:string[];
  public hourCost:number;
  public totalDamage:number;
  public savings:number[];
  constructor() {
    this.goldToken = 36547;
    this.ropeBelt = 3291;
    this.silencerClaw = 2237;
    this.grimleechWings = 1467;
    this.vampireTeeth = 2174;
    this.bloodyPincer = 7123;
    this.pieceOfDeadbrain = 15881;
    this.protectiveCharm = 1840;
    this.sabertooth = 4875;
    this.vexclawTalon = 1622;
    this.lifeLeech=true;
    this.manaLeech=true;
    this.criticalStrike=true;
    this.extraImbue=false;
    this.lifeLeechNumber=2;
    this.manaLeechNumber=2;
    this.extraImbueCost=0;
    this.imbueResults=[];
    this.hourCost=0;
    this.totalDamage=100000;
    this.savings=[0,0,0];
  }

  ngOnInit(): void {
    this.calculateHourCost();
  }



     /**
    * Calculates the most efficient way to buy imbue Life materials.
     * @param stage  of imbue.
     * @Returns an array with a string of the most effcient way to buy and the cost of the imbue using the calculations.
     */
  determineGoldTokenLife(stage: number): [string, number] {
      let result: [string, number] = ["", 0];
      const vampireTeethPrice = this.vampireTeeth * 25;
      const bloodyPincerPrice = this.bloodyPincer * 15;
      const goldTokenPrice = this.goldToken * 2;

      switch (stage) {
        case 1: {
          const cheapestOption = Math.min(vampireTeethPrice, goldTokenPrice);
          result = cheapestOption === vampireTeethPrice
            ? ["Buy the vampire teeth at market", vampireTeethPrice+15000]
            : ["Exchange gold tokens for vampire teeth", goldTokenPrice+15000];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(bloodyPincerPrice + vampireTeethPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for vampire teeth and bloody pincers", cheapestOption+55000];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the vampire teeth and bloody pincers at the market", cheapestOption+55000];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + bloodyPincerPrice;
            result = ["Exchange gold tokens for vampire teeth and buy bloody pincers in the market", exchangeOption+55000];
          }
          break;
        }
        case 3: {
          const pieceOfDeadbrainPrice = this.pieceOfDeadbrain * 5;
          const cheapestOption = Math.min(
            pieceOfDeadbrainPrice + bloodyPincerPrice + vampireTeethPrice,
            this.goldToken * 6
          );

          if (cheapestOption === this.goldToken * 6) {
            result = ["Exchange all materials from gold tokens", cheapestOption+150000];
          }  else if (pieceOfDeadbrainPrice + ( this.goldToken* 4) < vampireTeethPrice + bloodyPincerPrice + pieceOfDeadbrainPrice+150000) {
            result = ["Buy the pieces of dead brain at market and exchange gold token for vampire teeth and bloody pincers", pieceOfDeadbrainPrice + (this.goldToken*4)+150000];
          } else if (bloodyPincerPrice + pieceOfDeadbrainPrice + (this.goldToken*2) < pieceOfDeadbrainPrice + (this.goldToken*4)) {
            result = ["Buy the pieces of dead brain and bloody pincers at market and exchange gold token for vampire teeth", bloodyPincerPrice + pieceOfDeadbrainPrice + (this.goldToken*2)+150000];
          } else {
            result = ["Buy all material from market", vampireTeethPrice + bloodyPincerPrice + pieceOfDeadbrainPrice+150000];
          }
          break;
        }
      }
      return result;
    }
     /**
    * Calculates the most efficient way to buy imbue Mana materials.
     * @param stage  of imbue.
     * @Returns an array with a string of the most effcient way to buy and the cost of the imbue using the calculations.
     */
  determineGoldTokenMana(stage: number): [string, number] {
      let result: [string, number] = ["", 0];
      const ropeBeltPrice = this.ropeBelt * 25;
      const silencerClawPrice = this.silencerClaw * 25;
      const grimLeechWingsPrice = this.grimleechWings * 5;
      const goldTokenPrice = this.goldToken * 2;

      switch (stage) {
        case 1: {
          const cheapestOption = Math.min(ropeBeltPrice, goldTokenPrice);
          result = cheapestOption === ropeBeltPrice
            ? ["Buy the rope belts at market", ropeBeltPrice+15000]
            : ["Exchange gold tokens for rope belts", goldTokenPrice+15000];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(silencerClawPrice + ropeBeltPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for rope belts and silencer claw", cheapestOption+55000];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the rope belt and silencer claws at the market", cheapestOption+55000];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + silencerClawPrice;
            result = ["Exchange gold tokens for rope belts and buy silencer claws in the market", exchangeOption+55000];
          }
          break;
        }
        case 3: {
          const cheapestOption = Math.min(
            grimLeechWingsPrice + silencerClawPrice + ropeBeltPrice,
            this.goldToken * 6
          );

          if (cheapestOption === this.goldToken * 6) {
            result = ["Exchange all materials from gold tokens", cheapestOption+150000];
          } else if (grimLeechWingsPrice + (this.goldToken*4) < ropeBeltPrice + silencerClawPrice + grimLeechWingsPrice) {
            result = ["Buy the grimleech wings at market and exchange gold token for rope belt and silencer claws", grimLeechWingsPrice + (this.goldToken*4)+150000];
          } else if (silencerClawPrice + grimLeechWingsPrice + (this.goldToken*2) < grimLeechWingsPrice + (this.goldToken*4)) {
            result = ["Buy the grimleech wings and silencer claws at market and exchange gold token for rope belt", silencerClawPrice + grimLeechWingsPrice + (this.goldToken*2)+150000];
          } else {
            result = ["Buy all material from market", ropeBeltPrice + silencerClawPrice + grimLeechWingsPrice+150000];
          }
          break;
        }
      }
      return result;
    }
     /**
    * Calculates the most efficient way to buy imbue Critical materials.
     * @param stage  of imbue.
     * @Returns an array with a string of the most effcient way to buy and the cost of the imbue using the calculations.
     */
    determineGoldTokenCritical(stage: number): [string, number] {
      let result: [string, number] = ["", 0];
      const protectiveCharmPrice = this.protectiveCharm * 20;
      const sabertoothPrice = this.sabertooth * 25;
      const vexclawTalonPrice = this.vexclawTalon * 5;
      const goldTokenPrice = this.goldToken * 2;

      switch (stage) {
        case 1: {
          const cheapestOption = Math.min(protectiveCharmPrice, goldTokenPrice);
          result = cheapestOption === protectiveCharmPrice
            ? ["Buy the protective charms at market", protectiveCharmPrice+15000]
            : ["Exchange gold tokens for protective charms", goldTokenPrice+15000];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(sabertoothPrice + protectiveCharmPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for protective charms and saberteeth", cheapestOption+55000];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the protective charms and saberteeth at the market", cheapestOption+55000];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + sabertoothPrice;
            result = ["Exchange gold tokens for protective charms and buy saberteeth in the market", exchangeOption+55000];
          }
          break;
        }
        case 3: {
          const cheapestOption = Math.min(
            vexclawTalonPrice + sabertoothPrice + protectiveCharmPrice,
            this.goldToken * 6
          );

          if (cheapestOption === this.goldToken * 6) {
            result = ["Exchange all materials from gold tokens", cheapestOption+150000];
          } else if (vexclawTalonPrice + (this.goldToken*4) < sabertoothPrice + protectiveCharmPrice + vexclawTalonPrice+150000) {
            result = ["Buy the vexclaw talons at market and exchange gold token for protective charms and saberteeth", vexclawTalonPrice + (this.goldToken*4)+150000];
          } else if (sabertoothPrice + vexclawTalonPrice + (this.goldToken*2) < vexclawTalonPrice + (this.goldToken*4)) {
            result = ["Buy the vexclaw talons and saberteeth at market and exchange gold token for protective charms", sabertoothPrice + vexclawTalonPrice + (this.goldToken*2)+150000];
          } else {
            result = ["Buy all material from market", protectiveCharmPrice + sabertoothPrice + vexclawTalonPrice+150000];
          }
          break;
        }
      }
      return result;
    }



/**
 * @description Calculates the hour cost taking in parameter in the component the stage, numbers and if active mana, life and critical imbue.
 * @returns The total hour cost of all imbues in use in one hour and calls the savings method.
 */
calculateHourCost(){
  this.hourCost=0;
  let outputs:any=[this.determineGoldTokenLife(Number(this.lifeImbueStage)),this.determineGoldTokenMana(Number(this.manaImbueStage)),
  this.determineGoldTokenCritical(Number(this.criticalImbueStage))];
  this.imbueResults=[outputs[0][0],outputs[1][0],outputs[2][0]];
  let lifeCost:number;
  let manaCost:number;
  let criticalCost:number;
  let extraImbueCost:number;

  lifeCost=outputs[0][1]*this.lifeLeechNumber;
  manaCost=outputs[1][1]*this.manaLeechNumber;
  criticalCost=outputs[2][1]*1;

  extraImbueCost=this.extraImbueCost;
  if(this.lifeLeech){
    this.hourCost+=lifeCost/20;
  }
  if(this.manaLeech){
    this.hourCost+=manaCost/20;
  }
  if(this.criticalStrike){
    this.hourCost+=criticalCost/20;
  }
  if(this.extraImbue){
    this.hourCost+=extraImbueCost/20;
  }
this.calculateImbueSavings();
}
/**
 *@description Calculates how much is saved in potions and extra damage done depending on imbues numbers and stage.
 @param - Total damage, imbue stage. imbue active.
 @returns Saving array with the number of potions in 0 index for life, 1 index for mana and 2 index for extra damage.
 */
calculateImbueSavings(){
  this.savings=[0,0,0];
  let damageWithCrit=this.totalDamage
  if(this.criticalStrike){
    let criticalExtraDamage:number=0;
    switch(Number(this.criticalImbueStage)){
      case 1:criticalExtraDamage=this.totalDamage*0.1*1.15;break;
      case 2:criticalExtraDamage=this.totalDamage*0.1*1.25;break;
      case 3:criticalExtraDamage=this.totalDamage*0.1*1.5;break;
    }
   damageWithCrit+=criticalExtraDamage;
   this.savings[2]=Number(criticalExtraDamage.toFixed(0));
  }
  if(this.lifeLeech){
    let lifeLeeched:number=0;
    switch(Number(this.lifeImbueStage)){
      case 1: lifeLeeched=this.lifeLeechNumber*damageWithCrit*0.05; break;
      case 2: lifeLeeched=this.lifeLeechNumber*damageWithCrit*0.1; break;
      case 3: lifeLeeched=this.lifeLeechNumber*damageWithCrit*0.25; break;
    }
    this.savings[0]=Number((lifeLeeched/500).toFixed(0));
  }
  if(this.manaLeech){
    let manaLeeched=0;
    switch(Number(this.manaImbueStage)){
      case 1:manaLeeched=this.manaLeechNumber*damageWithCrit*0.03*(1.1125); break;
      case 2:manaLeeched=this.manaLeechNumber*damageWithCrit*0.05*(1.1125); break;
      case 3:manaLeeched=this.manaLeechNumber*damageWithCrit*0.08*(1.1125); break;
    }

    this.savings[1]=Number((manaLeeched/200).toFixed(0));
  }

}


}
