import { Component, OnInit,DoCheck } from '@angular/core';

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
  }

  ngOnInit(): void {
    console.log(this.determineGoldTokenCritical(3))
  }
  ngDoCheck(): void {

  }
  DetermineGoldTokenLifeOld(stage:number):[string,number]{
    let result:[string,number]=["",0]
    let stagePrices:number[] = [];
    if (stage === 1) {
      // Basic imbuement
      stagePrices = [this.vampireTeeth * 25, this.goldToken * 2];
    } else if (stage === 2) {
      // Intricate imbuement
      stagePrices = [this.vampireTeeth * 25, this.bloodyPincer * 15, this.goldToken * 4];
    } else if (stage === 3) {
      // Powerful imbuement
      stagePrices = [this.vampireTeeth * 25 , this.bloodyPincer * 15 , this.pieceOfDeadbrain * 5, this.goldToken * 6];
    }

    switch(stage){
      case 1:{
        result=(stagePrices[0]<stagePrices[1])?["Buy the vampire teeth at market",stagePrices[0]]:["Exchange gold tokens for vampire teeths",stagePrices[1]];
        break;
      }
      case 2:{
        if(stagePrices[2]<stagePrices[0]+stagePrices[1]){
          result=["Buy gold tokens and exchange them for vampire teeth and bloody pincers",stagePrices[2]];
        }else if(stagePrices[2]>stagePrices[0]+stagePrices[1]){
          if(stagePrices[1]+(stagePrices[2]/2)<stagePrices[0]+stagePrices[1]){
          result=["Exchange gold tokens for vampire teeth and buy bloody pincers in the market",stagePrices[1]+(stagePrices[2]/2)];
        }else{result=["Buy the vampire teeth and bloody pincers at the market",stagePrices[0]+stagePrices[1]]}
        }
        break;
      }
      case 3:{
        console.log(stagePrices[2])
        if(stagePrices[3]<stagePrices[0]+stagePrices[1]+stagePrices[2]){
          result=["Exchange all materials from gold tokens",stagePrices[3]];
        }else if(stagePrices[3]>stagePrices[0]+stagePrices[1]+stagePrices[2]){
          if(stagePrices[2]+(stagePrices[3]*2/3)<stagePrices[0]+stagePrices[1]+stagePrices[2]){
            result=["Buy the pieces of dead brain at market and exchange gold token for vampire teeth and bloody pincers",stagePrices[2]+(stagePrices[3]*2/3)]
          } else if(stagePrices[2]+stagePrices[1]+(stagePrices[3]*1/3)<stagePrices[2]+(stagePrices[3]*2/3)){
            result=["Buy the pieces of dead brain and bloody pincers at market and exchange gold token for vampire teeth",stagePrices[2]+stagePrices[1]+(stagePrices[3]*1/3)]
          }else{
          result=["Buy all material from market",stagePrices[0]+stagePrices[1]+stagePrices[2]];
          }
        }
        break;
      }
      }
      return result
    }
  determineGoldTokenLife(stage: number): [string, number] {
      let result: [string, number] = ["", 0];
      const vampireTeethPrice = this.vampireTeeth * 25;
      const bloodyPincerPrice = this.bloodyPincer * 15;
      const goldTokenPrice = this.goldToken * 2;

      switch (stage) {
        case 1: {
          const cheapestOption = Math.min(vampireTeethPrice, goldTokenPrice);
          result = cheapestOption === vampireTeethPrice
            ? ["Buy the vampire teeth at market", vampireTeethPrice]
            : ["Exchange gold tokens for vampire teeth", goldTokenPrice];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(bloodyPincerPrice + vampireTeethPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for vampire teeth and bloody pincers", cheapestOption];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the vampire teeth and bloody pincers at the market", cheapestOption];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + bloodyPincerPrice;
            result = ["Exchange gold tokens for vampire teeth and buy bloody pincers in the market", exchangeOption];
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
            result = ["Exchange all materials from gold tokens", cheapestOption];
          }  else if (pieceOfDeadbrainPrice + ( this.goldToken* 4) < vampireTeethPrice + bloodyPincerPrice + pieceOfDeadbrainPrice) {
            result = ["Buy the pieces of dead brain at market and exchange gold token for vampire teeth and bloody pincers", pieceOfDeadbrainPrice + (this.goldToken*4)];
          } else if (bloodyPincerPrice + pieceOfDeadbrainPrice + (this.goldToken*2) < pieceOfDeadbrainPrice + (this.goldToken*4)) {
            result = ["Buy the pieces of dead brain and bloody pincers at market and exchange gold token for vampire teeth", bloodyPincerPrice + pieceOfDeadbrainPrice + (this.goldToken*2)];
          } else {
            result = ["Buy all material from market", vampireTeethPrice + bloodyPincerPrice + pieceOfDeadbrainPrice];
          }
          break;
        }
      }
      return result;
    }
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
            ? ["Buy the rope belts at market", ropeBeltPrice]
            : ["Exchange gold tokens for rope belts", goldTokenPrice];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(silencerClawPrice + ropeBeltPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for rope belts and silencer claw", cheapestOption];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the rope belt and silencer claws at the market", cheapestOption];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + silencerClawPrice;
            result = ["Exchange gold tokens for rope belts and buy silencer claws in the market", exchangeOption];
          }
          break;
        }
        case 3: {
          const cheapestOption = Math.min(
            grimLeechWingsPrice + silencerClawPrice + ropeBeltPrice,
            this.goldToken * 6
          );

          if (cheapestOption === this.goldToken * 6) {
            result = ["Exchange all materials from gold tokens", cheapestOption];
          } else if (grimLeechWingsPrice + (this.goldToken*4) < ropeBeltPrice + silencerClawPrice + grimLeechWingsPrice) {
            result = ["Buy the grimleech wings at market and exchange gold token for rope belt and silencer claws", grimLeechWingsPrice + (this.goldToken*4)];
          } else if (silencerClawPrice + grimLeechWingsPrice + (this.goldToken*2) < grimLeechWingsPrice + (this.goldToken*4)) {
            result = ["Buy the grimleed wings and silencer claws at market and exchange gold token for rope belt", silencerClawPrice + grimLeechWingsPrice + (this.goldToken*2)];
          } else {
            result = ["Buy all material from market", ropeBeltPrice + silencerClawPrice + grimLeechWingsPrice];
          }
          break;
        }
      }
      return result;
    }
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
            ? ["Buy the protective charms at market", protectiveCharmPrice]
            : ["Exchange gold tokens for protective charms", goldTokenPrice];
          break;
        }
        case 2: {
          const goldTokenExchangePrice = goldTokenPrice * 2;
          const cheapestOption = Math.min(sabertoothPrice + protectiveCharmPrice, goldTokenExchangePrice);

          if (cheapestOption === goldTokenExchangePrice) {
            result = ["Buy gold tokens and exchange them for protective charms and saberteeth", cheapestOption];
          } else if (cheapestOption < goldTokenExchangePrice) {
            result = ["Buy the protective charms and saberteeth at the market", cheapestOption];
          } else {
            const exchangeOption = (goldTokenExchangePrice / 2) + sabertoothPrice;
            result = ["Exchange gold tokens for protective charms and buy saberteeth in the market", exchangeOption];
          }
          break;
        }
        case 3: {
          const cheapestOption = Math.min(
            vexclawTalonPrice + sabertoothPrice + protectiveCharmPrice,
            this.goldToken * 6
          );

          if (cheapestOption === this.goldToken * 6) {
            result = ["Exchange all materials from gold tokens", cheapestOption];
          } else if (vexclawTalonPrice + (this.goldToken*4) < sabertoothPrice + protectiveCharmPrice + vexclawTalonPrice) {
            result = ["Buy the vexclaw talons at market and exchange gold token for protective charms and saberteeth", vexclawTalonPrice + (this.goldToken*4)];
          } else if (sabertoothPrice + vexclawTalonPrice + (this.goldToken*2) < vexclawTalonPrice + (this.goldToken*4)) {
            result = ["Buy the vexclaw talons and saberteeth at market and exchange gold token for protective charms", sabertoothPrice + vexclawTalonPrice + (this.goldToken*2)];
          } else {
            result = ["Buy all material from market", protectiveCharmPrice + sabertoothPrice + vexclawTalonPrice];
          }
          break;
        }
      }
      return result;
    }


test(){
  console.log(this.vampireTeeth ,this.bloodyPincer,this.pieceOfDeadbrain)
  console.log(this.determineGoldTokenLife(Number(this.lifeImbueStage)));
}




}
