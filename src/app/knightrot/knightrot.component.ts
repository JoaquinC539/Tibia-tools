import { Component, OnInit } from '@angular/core';
import { KnightCalculations } from '../Services/knight';
import { Console } from 'console';

@Component({
  selector: 'app-knightrot',
  templateUrl: './knightrot.component.html',
  styleUrls: ['./knightrot.component.scss']
})
export class KnightrotComponent implements OnInit {
  public type:String;
  public selectedAttacks:string[]=[]
  public optionsName:string[]=[];
  public optionsCooldown:number[]=[];
  public optionsMana:number[]=[];
  public optionsModifer:number[]=[];
  public optionsTargets:number[]=[];
  public selectedAttack:string="exori";
  public selectedSupport:string="utito tempo";
  public optionSName:any[]=[];
  public optionSMana:any[]=[];
  public optionSDuration:any[]=[];
  public error:boolean=false;
  public supportActive:any[]=[];
  public finalModifiers:any[]=[];
  public ModifierSum:number=0;
  public AvgMod:number=0;
  public targets:number=3;
  constructor(private Kspells:KnightCalculations) {
    this.type="";
   }

   ngOnInit(): void {
    this.Filloptions(this.Kspells.kspells);

  }

  addOptiontoArray(){
    this.error=false;
    //Find the index to check the cooldown of that spell and later all their attributes
    let index=this.optionsName.indexOf(this.selectedAttack);
    let turnCooldown=this.optionsCooldown[index]/2;
    //Check if the spell was previosuly pushed
    let exist=this.selectedAttacks.indexOf(this.selectedAttack)
    //If not push it
    if(exist===-1){
      this.selectedAttacks.push(this.selectedAttack);
      this.calculateModifiers();

      //If it has been pushed do the next checks
    }else {
      //To check if cooldown is ready is needed to obtain the spacing between the last apparition and where it would be pushed
      //first get the last index
      let lastUseIndex=this.selectedAttacks.lastIndexOf(this.selectedAttack)
      //Then calculate the distance
      let spaceBetween=this.selectedAttacks.length-lastUseIndex;
      //if the spacing minus the turns needed is greater or equal to 0 push it
      if(spaceBetween-turnCooldown>=0){
        this.selectedAttacks.push(this.selectedAttack);
        this.calculateModifiers();
        //if it is a minus value turn on the error
      }else{
        this.error=true;
      }
    }
  }
  addSupportArray(){
    let duration = 0;
    // Find the index of the selected support in the options array
    let index = this.optionSName.indexOf(this.selectedSupport);
    // Get the duration of the selected support from the options duration array
    duration = this.optionSDuration[index] / 2 - 1;
    // If the supportActive array is empty, add an empty string for each attack
    if (this.supportActive.length == 0) {
      for (let i = 1; i < this.selectedAttacks.length; i++) {
        this.supportActive.push("");

      }

    }else if(this.supportActive.length<this.selectedAttack.length){
      for( let i=0;i<this.selectedAttack.length-this.supportActive.length;i++){
        this.supportActive.push("");

      }
    }{
     // Add the selected support to the supportActive array
    this.supportActive.push(this.selectedSupport);
    // Add empty strings to the supportActive array for each duration turn
    for (let i = 1; i <= duration; i++) {
      this.supportActive.push(this.selectedSupport);

    }
    }
    this.calculateModifiers();
  }
  popLastOptionArray(){
    this.selectedAttacks.pop()
    this.error=false;
    this.calculateModifiers();
  }
  Filloptions(spells:any[]){
    this.optionSDuration=[];
      this.optionSName=[];
      this.optionSMana=[];
    this.optionsName=[]
        this.optionsCooldown=[]
        this.optionsMana=[]
        this.optionsModifer=[]
        // this.optionsTargets=[]
    for(let i=0;i<spells.length;i++){
      if(spells[i].type=="damage"   ){
        this.optionsName.push(spells[i].name);
        this.optionsCooldown.push(spells[i].cooldown);
        this.optionsMana.push(spells[i].mana);
        this.optionsModifer.push(spells[i].modifier);
        // this.optionsTargets.push(spells[i].targets)
      }else if(spells[i].type=="support"){
        this.optionSName.push(spells[i].name);
        this.optionSMana.push(spells[i].mana);
        this.optionSDuration.push(spells[i].duration);
      }
    }
  }

  calculateModifiers(){
    this.finalModifiers=[];
    this.ModifierSum=0;
    this.AvgMod=0;
    let finalModifier:number=0;
    this.optionsTargets=[];
    for(let i=0;i<this.selectedAttacks.length;i++){
      let index:number=this.optionsName.indexOf(this.selectedAttacks[i]);
      let baseModifier=this.optionsModifer[index];
      if(this.selectedAttacks[i]=="exori min" && this.targets>3){
        this.optionsTargets.push(3);
     } else if(this.selectedAttacks[i]!="exori mas" && this.targets>8){
        this.optionsTargets.push(8);
     }else{
        this.optionsTargets.push(this.targets);
     }
     let target:number=this.optionsTargets[i];
     if(this.supportActive[i]=="utito tempo"){
      finalModifier=Math.ceil(baseModifier*1.35*10*target)/10;
      this.finalModifiers.push(finalModifier);
    }else if(this.supportActive[i]=="utamo tempo"){
      finalModifier=Math.ceil(baseModifier*0.65*10*target)/10;
      this.finalModifiers.push(finalModifier);
    }else{
      finalModifier=Math.ceil(baseModifier*target*10)/10;
    this.finalModifiers.push(finalModifier);
    }
    }



    // let currentTarget:number=this.optionsTargets.length-1;
    // let targetHit:number=this.optionsTargets[currentTarget];

    this.ModifierSum=Math.ceil(this.finalModifiers.reduce((acc,current)=>acc+current,0)*10)/10
    this.AvgMod=Math.ceil((this.ModifierSum/this.finalModifiers.length)*10)/10;
  }
  resetAll(){
    this.finalModifiers=[];
    this.selectedAttacks=[];
    this.optionsTargets=[];
    this.supportActive=[];
    this.ModifierSum=0;
    this.AvgMod=0;

  }
}
