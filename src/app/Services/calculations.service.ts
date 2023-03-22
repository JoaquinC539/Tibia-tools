import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() { }

  calculateLevelPhysicalDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
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
  calculateSkillPhysicalDamage(level:number,stance:string,weaponAttack:number,skill:number,armor:number,resistance:number):{}{
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
  if(bonus>1){
    skillPoints=skillPoints.map(x=>x/bonus);
  }
  if(type=="melee"){
    Exratio=exerciseWeaponsCost/exerciseMeleeCharges;
    Durratio=durableWeaponsCost/durableMeleeCharges;
    Lastratio=lastingWeaponsCost/lastingMeleeCharges;
  }
  if(type=="distance"){
    Exratio=exerciseWeaponsCost/exerciseDistanceCharges;
    Durratio=durableWeaponsCost/durableDistanceCharges;
    Lastratio=lastingWeaponsCost/lastingDistanceCharges;
  }
  if(type=="magic"){
    Exratio=exerciseWeaponsCost/exerciseMagicCharges;
    Durratio=durableWeaponsCost/durableMagicCharges;
    Lastratio=lastingWeaponsCost/lastingMagicCharges;
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
