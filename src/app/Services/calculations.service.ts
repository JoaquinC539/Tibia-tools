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
}
