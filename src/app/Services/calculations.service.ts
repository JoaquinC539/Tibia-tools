import { Injectable } from '@angular/core';
import { Mage } from './mage';
import { PaladinSpells } from './paladin';
import { Spell } from '../interfaces/spell.interface';
@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor(private mageSpells:Mage, private paladinSpells:PaladinSpells) { }

  calculateLevelMeleeDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
    let data:{};
    let levels:number[]=[]
    let damage:number[]=[]
    resistance=resistance/100
    try{
      for(let i=level;i<=1300;i+=10){
        levels.push(i);
      }
      for(let i=0;i<levels.length;i++){
        let S:number=((Math.sqrt(2*levels[i]+2025)+5)/10);
        let baseDamage:number=(((levels[i]+1000)/S)-50*S)+(100*S)-450;
        let stanceModifier:number=0;
        if(stance==="offensive"){
          stanceModifier=6/5;
        } else if(stance==="balance"){
          stanceModifier=1;
        } else if(stance==="defensive"){
          stanceModifier=3/5;
        }
        let attackValue:number=baseDamage+((stanceModifier*weaponAttack)*(skill+4)/28);
        let maxDamage:number=(attackValue*resistance)-armor;
        let minDamage:number=maxDamage*0.6;
        let avgDamage:number=Math.ceil((maxDamage+minDamage)/2);
        damage.push(avgDamage);
      }
    }catch(e){console.log(e)}
    data={levels:levels,
          damage:damage
    }
    return data;
  }
  calculateSkillMeleeDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
    let data:{};
    let skills:number[]=[]
    let damage:number[]=[]
    try{
    resistance=resistance/100
    let S:number=((Math.sqrt(2*level+2025)+5)/10);
    let baseDamage:number=(((level+1000)/S)-50*S)+(100*S)-450;

      for(let i=skill;i<=180;i+=2){
        skills.push(i);
      }
      for(let i=0;i<skills.length;i++){
        let stanceModifier:number=0;
        if(stance==="offensive"){
          stanceModifier=6/5;
        } else if(stance==="balance"){
          stanceModifier=1;
        } else if(stance==="defensive"){
          stanceModifier=3/5;
        }
        let attackValue:number=baseDamage+((stanceModifier*weaponAttack)*(skills[i]+4)/28);
        let maxDamage:number=(attackValue*resistance)-armor;
        let minDamage:number=maxDamage*0.6;
        let avgDamage:number=Math.ceil((maxDamage+minDamage)/2);
        damage.push(avgDamage);
      }



    }catch(e){console.log(e)}
    data={skills:skills,
      damage:damage}
    return data;
  }
  calculateLevelDistanceDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
    let data:{};
    let levels:number[]=[]
    let damage:number[]=[]
    resistance=resistance/100
    try{
      for(let i=level;i<=1100;i+=10){
        levels.push(i);
      }
      for(let i=0;i<levels.length;i++){
        let S:number=((Math.sqrt(2*levels[i]+2025)+5)/10);
        let baseDamage:number=(((levels[i]+1000)/S)-50*S)+(100*S)-450;
        let stanceModifier:number=0;
        if(stance==="offensive"){
          stanceModifier=6/5;
        } else if(stance==="balance"){
          stanceModifier=1;
        } else if(stance==="defensive"){
          stanceModifier=3/5;
        }
        let attackValue:number=baseDamage+((stanceModifier*weaponAttack)*(skill+4)/28);
        let maxDamage:number=((attackValue*1.44)*resistance)-armor;
        let minDamage:number=(attackValue*0.66*resistance)-armor;
        let avgDamage:number=Math.ceil((maxDamage+minDamage)/2);
        damage.push(avgDamage);
      }
    }catch(e){console.log(e)}
    data={levels:levels,
          damage:damage
    }
    return data;
  }
  calculateSkillDistanceDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
    let data:{};
    let skills:number[]=[]
    let damage:number[]=[]
    try{
    resistance=resistance/100
    let S:number=((Math.sqrt(2*level+2025)+5)/10);
    let baseDamage:number=(((level+1000)/S)-50*S)+(100*S)-450;

      for(let i=skill;i<=180;i+=2){
        skills.push(i);
      }
      for(let i=0;i<skills.length;i++){
        let stanceModifier:number=0;
        if(stance==="offensive"){
          stanceModifier=6/5;
        } else if(stance==="balance"){
          stanceModifier=1;
        } else if(stance==="defensive"){
          stanceModifier=3/5;
        }
        let attackValue:number=baseDamage+((stanceModifier*weaponAttack)*(skills[i]+4)/28);
        let maxDamage:number=((attackValue*1.44)*resistance)-armor;
        let minDamage:number=(attackValue*0.66*resistance)-armor;
        let avgDamage:number=Math.ceil((maxDamage+minDamage)/2);
        damage.push(avgDamage);
      }



    }catch(e){console.log(e)}
    data={skills:skills,
      damage:damage}
    return data;
  }
  calculateLevelMagicDamage(level:number,skill:number,resistance:number):{}{
    let data:{};
    let levels:number[]=[]
    let greatRuneDamage:number[]=[];
    let suddenDeathDamage:number[]=[];
    let exevoMasSanDamage:number[]=[];
    let lesserWaveDamage:number[]=[];
    let strongWaveDamage:number[]=[];
    let greatRuneModifier=this.mageSpells.mageSpells.find((spell)=>spell.name=="Rune")?.modifier;
    let SDRuneModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="SD Rune")?.modifier;
    let masSanModifier=this.paladinSpells.spells.find((spell)=>spell.name==="exevo mas san")?.modifier;
    let lesserWaveModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="Lesser wave (terra wave/great fire wave)")?.modifier;
    let strongWaveModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="Strong wave (strong ice wave/energy wave)")?.modifier
    resistance=resistance/100
    try{
      for(let i=level;i<=1500;i+=10){
        levels.push(i);
      }
      for(let i=0;i<levels.length;i++){
        let S:number=((Math.sqrt(2*levels[i]+2025)+5)/10);
        let baseDamage:number=(((levels[i]+1000)/S)-50*S)+(100*S)-450;

        greatRuneDamage.push((skill*greatRuneModifier!)+baseDamage);
        suddenDeathDamage.push((skill*SDRuneModifier!)+baseDamage);
        exevoMasSanDamage.push((skill*masSanModifier!)+baseDamage);
        lesserWaveDamage.push((skill*lesserWaveModifier!)+baseDamage);
        strongWaveDamage.push((skill*strongWaveModifier!)+baseDamage);
      }
    }catch(e){console.log(e)}
    data={levels:levels,
          damage:{
            runeDamage:greatRuneDamage,
            SDdamage:suddenDeathDamage,
            San:exevoMasSanDamage,
            lWave:lesserWaveDamage,
            sWave:strongWaveDamage
          }
    }
    return data;
  }
  calculateSkillMagicDamage(level:number,skill:number,resistance:number,maxSkill:number):{}{
    let data:{};
    let skills:number[]=[]
    let greatRuneDamage:number[]=[];
    let suddenDeathDamage:number[]=[];
    let exevoMasSanDamage:number[]=[];
    let lesserWaveDamage:number[]=[];
    let strongWaveDamage:number[]=[];
    let greatRuneModifier=this.mageSpells.mageSpells.find((spell)=>spell.name=="Rune")?.modifier;
    let SDRuneModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="SD Rune")?.modifier;
    let masSanModifier=this.paladinSpells.spells.find((spell)=>spell.name==="exevo mas san")?.modifier;
    let lesserWaveModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="Lesser wave (terra wave/great fire wave)")?.modifier;
    let strongWaveModifier=this.mageSpells.mageSpells.find((spell)=>spell.name==="Strong wave (strong ice wave/energy wave)")?.modifier
    try{
    resistance=resistance/100
    let S:number=((Math.sqrt(2*level+2025)+5)/10);
    let baseDamage:number=(((level+1000)/S)-50*S)+(100*S)-450;

      for(let i=skill;i<=maxSkill;i+=1){
        skills.push(i);
      }
      for(let i=0;i<skills.length;i++){

        greatRuneDamage.push((skills[i]*greatRuneModifier!)+baseDamage);
        suddenDeathDamage.push((skills[i]*SDRuneModifier!)+baseDamage);
        exevoMasSanDamage.push((skills[i]*masSanModifier!)+baseDamage);
        lesserWaveDamage.push((skills[i]*lesserWaveModifier!)+baseDamage);
        strongWaveDamage.push((skills[i]*strongWaveModifier!)+baseDamage);
      }


    }catch(e){console.log(e)}
    data={skills:skills,
      damage:{
        runeDamage:greatRuneDamage,
        SDdamage:suddenDeathDamage,
        San:exevoMasSanDamage,
        lWave:lesserWaveDamage,
        sWave:strongWaveDamage
      }}
    return data;
  }
  calculateSkillPoints(skill:number,vocation:string){
    let skills:number[]=[];
    let skillPoints:number[]=[];
    let results:{skills:number[],skillPoints:number[]}={skills:skills,skillPoints:skillPoints}
    let A:number=0;
    let b:number=0;
    let c:number=0;
    if(vocation==="knight"){
      A=50;
      b=1.1;
      c=10;
    }
    if(vocation==="paladinDist"){
      A=25;
      b=1.1;
      c=10;
    }
    if(vocation==="mage"){
      A=1600;
      b=1.1;
      c=0;
    }
    if(vocation==="paladinMag"){
      A=1600;
      b=1.4;
      c=0;
    }

    for(let i=skill;i<=135;i++){
       skills.push(i);
      let P=Math.ceil(A*b**(i-c));
      skillPoints.push(P);
    }
    return results;
  }
  calculateMagicSkillPoints(skill:number,vocation:string,maxSkill:number){
    let skills:number[]=[];
    let skillPoints:number[]=[];
    let results:{skills:number[],skillPoints:number[]}={skills:skills,skillPoints:skillPoints}
    let A:number=0;
    let b:number=0;
    let c:number=0;
    if(vocation==="mage"){
      A=1600;
      b=1.1;
      c=0;
    }
    if(vocation==="paladinMag"){
      A=1600;
      b=1.4;
      c=0;
    }

    for(let i=skill;i<=maxSkill;i++){
       skills.push(i);
      let P=Math.ceil(A*b**(i-c));
      skillPoints.push(P);
    }
    return results;
  }
  calculateTrainCost(skillPoints:number[],bonus:number=1,toNextSkill:number,type:string){
  let exercise:number[]=[];
  let durable:number[]=[];
  let lasting:number[]=[];
  let goldPerSkillLevel:{exercise:number[],durable:number[],lasting:number[]};
  let Exratio:number=0;
  let Durratio:number=0;
  let Lastratio:number=0;
  //Cost expressed in kk or Millions
  let exerciseWeaponsCost=0.2625;
  let durableWeaponsCost=0.9455;
  let lastingWeaponsCost=7.560;
  //Weapons Charges
  let exerciseMeleeCharges=3600;
  let durableMeleeCharges=12960;
  let lastingMeleeCharges=103680;
  let exerciseDistanceCharges=1800;
  let durableDistanceCharges=6480;
  let lastingDistanceCharges=51480;
  let exerciseMagicCharges=30000;
  let durableMagicCharges=1080000;
  let lastingMagicCharges=8640000;
   if(type=="melee"){
    Exratio=exerciseWeaponsCost/(exerciseMeleeCharges*bonus);
    Durratio=durableWeaponsCost/(durableMeleeCharges*bonus);
    Lastratio=lastingWeaponsCost/(lastingMeleeCharges*bonus);
  }
  if(type=="distance"){

    Exratio=exerciseWeaponsCost/(exerciseDistanceCharges*bonus);
    Durratio=durableWeaponsCost/(durableDistanceCharges*bonus);
    Lastratio=lastingWeaponsCost/(lastingDistanceCharges*bonus);
  }
  if(type=="magic"){
    Exratio=exerciseWeaponsCost/(exerciseMagicCharges*bonus);
    Durratio=durableWeaponsCost/(durableMagicCharges*bonus);
    Lastratio=lastingWeaponsCost/(lastingMagicCharges*bonus);
  }
  for(let i=0;i<skillPoints.length;i++){
    if(i==0){
      toNextSkill=(toNextSkill)/100;
      let nextSkillExerciseCost=skillPoints[i]*toNextSkill*Exratio;
      let nextSkillDurableCost=skillPoints[i]*toNextSkill*Durratio;
      let nextSkillLastingCost=skillPoints[i]*toNextSkill*Lastratio;
      exercise.push(Number(nextSkillExerciseCost.toFixed(1)));
      durable.push(Number(nextSkillDurableCost.toFixed(1)));
      lasting.push(Number(nextSkillLastingCost.toFixed(1)));
    }else{
      let nextSkillExerciseCost=skillPoints[i]*Exratio;
      let nextSkillDurableCost=skillPoints[i]*Durratio;
      let nextSkillLastingCost=skillPoints[i]*Lastratio;
      exercise.push(Number(nextSkillExerciseCost.toFixed(1)));
      durable.push(Number(nextSkillDurableCost.toFixed(1)));
      lasting.push(Number(nextSkillLastingCost.toFixed(1)));
    }

  }
  goldPerSkillLevel={exercise:exercise,durable:durable,lasting:lasting};
  return goldPerSkillLevel;
}
}
