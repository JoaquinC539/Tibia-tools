import { Component, OnInit } from '@angular/core';
import { Mage } from '../Services/mage';

@Component({
  selector: 'app-mage-roation',
  templateUrl: './mage-roation.component.html',
  styleUrls: ['./mage-roation.component.scss']
})
export class MageRoationComponent implements OnInit {
  public type:String;
  public selectedAttacks:any[]=[];

  public error:boolean=false;
  public ModifierSum:number=0;
  public AvgMod:number=0;
  public targets:number=5;
  public selectedAttack:string="Rune";
  public optionsName:string[]=[];
  public optionsCooldown:number[]=[];
  public optionsModifer:number[]=[];
  public finalModifiers:any[]=[];
  public optionsTargets:number[]=[];
  public UEused:number=0;
  constructor(private mageSpells:Mage) {
    this.type="";
   }

  ngOnInit(): void {
    this.fillOptions(this.mageSpells.mageSpells);
  }
  fillOptions(spells:any){
  this.optionsName=[];
      this.optionsCooldown=[];
      this.optionsModifer=[];
  for(let i=0;i<spells.length;i++){
    if(spells[i].type=="damage"   ){
      this.optionsName.push(spells[i].name);
      this.optionsCooldown.push(spells[i].cooldown);
      this.optionsModifer.push(spells[i].modifier);
    }
  }
  }
  addOptiontoArray(){
    this.error=false;
    let index=this.optionsName.indexOf(this.selectedAttack);
    let turnCooldown=this.optionsCooldown[index]/2;
    let exist=this.selectedAttacks.indexOf(this.selectedAttack);
     if(exist===-1){
      if ((this.selectedAttack === "Ultimate Explosion" || this.selectedAttack === "Lesser Ultimate Explosion") && this.UEused === 0) {
        this.selectedAttacks.push(this.selectedAttack);
        this.UEused = 19;
        this.selectedAttacks.push("Avalanche Rune");
        this.calculateModifiers();
      } else if (this.selectedAttack !== "Ultimate Explosion" && this.selectedAttack !== "Lesser Ultimate Explosion") {
        this.selectedAttacks.push(this.selectedAttack);
        this.calculateModifiers();
        this.UEused -= (this.UEused >= 1) ? 1 : 0;
      } else {
        this.error = true;
      }


      //If it has been pushed do the next checks
    }else {
      //first get the last index
      let lastUseIndex=this.selectedAttacks.lastIndexOf(this.selectedAttack)
      //Then calculate the distance
      let spaceBetween=this.selectedAttacks.length-lastUseIndex;
      //if the spacing minus the turns needed is greater or equal to 0 push it
      if(spaceBetween-turnCooldown>=0){
        if ((this.selectedAttack === "Ultimate Explosion" || this.selectedAttack === "Lesser Ultimate Explosion") && this.UEused === 0) {
          this.selectedAttacks.push(this.selectedAttack);
          this.UEused = 19;
          this.selectedAttacks.push("Avalanche Rune");
          this.calculateModifiers();
        }else {
          this.selectedAttacks.push(this.selectedAttack);

          this.calculateModifiers();
          this.UEused -= (this.UEused >= 1) ? 1 : 0;
        }
      }else{
        this.error=true;
      }
    }
  }
  popLastOptionArray(){
    this.selectedAttacks.pop();
    this.optionsTargets.pop();
    this.error=false;
    this.calculateModifiers();
  }
  resetAll(){
    this.finalModifiers=[];
    this.selectedAttacks=[];
    this.optionsTargets=[];
    this.ModifierSum=0;
    this.AvgMod=0;
    this.UEused=0;
  }
  calculateModifiers(){
    this.finalModifiers=[];
    this.ModifierSum=0;
    this.AvgMod=0;
    let finalModifier:number=0;

    for(let i=0;i<this.selectedAttacks.length;i++){
      let index:number=this.optionsName.indexOf(this.selectedAttacks[i]);
      let baseModifier=this.optionsModifer[index];
      if(this.selectedAttacks[i]=="SD Rune" && this.targets>1){
        this.optionsTargets.push(1);
     } else{
        this.optionsTargets.push(this.targets);
     }


      finalModifier=Math.ceil(baseModifier*this.optionsTargets[i]*10)/10;
    this.finalModifiers.push(finalModifier);
    }
    this.ModifierSum=Math.ceil(this.finalModifiers.reduce((acc,current)=>acc+current,0)*10)/10
    this.AvgMod=Math.ceil((this.ModifierSum/this.finalModifiers.length)*10)/10;
  }

}
