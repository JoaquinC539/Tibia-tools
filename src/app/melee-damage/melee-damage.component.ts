import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';
import { ChartService } from '../Services/chart.service';
import { CalculationsService } from '../Services/calculations.service';
import { Console } from 'console';

@Component({
  selector: 'app-melee-damage',
  templateUrl: './melee-damage.component.html',
  styleUrls: ['./melee-damage.component.scss']
})
export class MeleeDamageComponent implements OnInit,OnDestroy {
  @Input() level:any;
  @Input() skill:any;
  @Input() weaponAttack:any;
  @Input() armor:any;
  @Input() resistance:any;
  @Input() stance:any;
  public levelChart:any;
  public data:any;
  public skillChart:any;
  constructor( private chartService:ChartService, private calculation:CalculationsService) {
   }

  ngOnInit(): void {
    console.log(this.calculation.calculateSkillPhysicalDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance));
    this.calculateAndChart();
  }
  ngOnDestroy(): void {
      if(this.levelChart){
        this.levelChart.destroy();
      }
  }


  calculateAndChart(){
    let levelData:any;
    let skillData:any;
    levelData=this.calculation.calculateLevelPhysicalDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance);
    skillData=this.calculation.calculateSkillPhysicalDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance);
    if(this.levelChart){
      this.levelChart.destroy();
    }
    if(this.skillChart){
      this.skillChart.destroy();
    }
    this.levelChart=this.chartService.createLevelChart(levelData.levels,levelData.damage,"Damage of whirlwind throw (mod x1) by level");
    this.skillChart=this.chartService.createSkillChart(skillData.skills,skillData.damage,"Damage of whirlwind throw (mod x1) by skill");
   }
   updateChart(){
    this.calculateAndChart();
   }

}
