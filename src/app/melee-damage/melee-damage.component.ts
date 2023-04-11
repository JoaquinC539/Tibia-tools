import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';
import { ChartService } from '../Services/chart.service';
import { CalculationsService } from '../Services/calculations.service';


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
  public trainChart:any;
  public doubleSkill:boolean=false;
  public privateDummy:boolean=false;
  public toNextSkill:number=99.9;
  constructor( private chartService:ChartService, private calculation:CalculationsService) {
   }

  ngOnInit(): void {
    this.destroyCharts();
    this.calculateAndChart();
  }
  ngOnDestroy(): void {
      this.destroyCharts();
  }

  calculateAndChart(){
    let levelData:any;
    let skillData:any;
    let trainData:any;
    levelData=this.calculation.calculateLevelMeleeDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance);
    skillData=this.calculation.calculateSkillMeleeDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance);
    let bonus:number=1;
    bonus+= (this.privateDummy)?0.1:0;
    bonus+=(this.doubleSkill)?1:0;
    let skillPoints=this.calculation.calculateSkillPoints(this.skill,"knight")
    trainData={skills:skillPoints.skills,gold:this.calculation.calculateTrainCost(skillPoints.skillPoints,bonus,this.toNextSkill,"melee")}


    this.destroyCharts();
    this.levelChart=this.chartService.createLevelChart(levelData.levels,levelData.damage,"Damage of whirlwind throw (mod x1) by level");
    this.skillChart=this.chartService.createSkillChart(skillData.skills,skillData.damage,"Damage of whirlwind throw (mod x1) by skill");
    this.trainChart=this.chartService.createTrainingChart(trainData.skills,trainData.gold.exercise,"Cost to next skill level using training weapons");
   }
   updateChart(){
    this.calculateAndChart();
   }
   destroyCharts(){
    if(this.levelChart){
      this.levelChart.destroy();
    }
    if(this.skillChart){
      this.skillChart.destroy();
    }
    if(this.trainChart){
      this.trainChart.destroy();
    }
   }
}
