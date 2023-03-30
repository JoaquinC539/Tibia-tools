import { Component, OnInit,Input,OnDestroy,DoCheck } from '@angular/core';
import { ChartService } from '../Services/chart.service';
import { CalculationsService } from '../Services/calculations.service';

@Component({
  selector: 'app-magic-damage',
  templateUrl: './magic-damage.component.html',
  styleUrls: ['./magic-damage.component.scss']
})
export class MagicDamageComponent implements OnInit,OnDestroy {
  @Input() level:any;
  @Input() skill:any;
  @Input() resistance:any;
  public levelChart:any;
  public skillChart:any;
  public trainChart:any;
  public doubleSkill:boolean=false;
  public privateDummy:boolean=false;
  public toNextSkill:number=99.9;
  public vocationMage:boolean=true;
  public vocationPaladin:boolean=false;
  constructor(private chartService:ChartService, private calculation:CalculationsService) { }
  ngOnDestroy(): void {
    this.destroyCharts();
  }

  ngOnInit(): void {
    this.destroyCharts();
    this.calculateAndChart();
  }


  calculateAndChart(){
    let levelData:any;
    let skillData:any;
    let bonus:number=1;
    bonus+= (this.privateDummy)?0.1:0;
    bonus+=(this.doubleSkill)?1:0;
    if(this.vocationMage){
      this.destroyCharts();
      let maxSkill:number=130
      let mageTrainData:any;
      levelData=this.calculation.calculateLevelMagicDamage(this.level,this.skill,this.resistance);
      skillData=this.calculation.calculateSkillMagicDamage(this.level,this.skill,this.resistance,maxSkill);
      this.levelChart=this.chartService.createMageMagicLevelChart(levelData.levels,levelData.damage.runeDamage,levelData.damage.SDdamage,levelData.damage.lWave,levelData.damage.sWave,"GFB Damage","SD Damage","Lesser Wave","Strong Wave");
      this.skillChart=this.chartService.createMageMagicSkillChart(skillData.skills,skillData.damage.runeDamage,skillData.damage.SDdamage,skillData.damage.lWave,skillData.damage.sWave,"GFB Damage","SD Damage","Lesser Wave","Strong Wave");

      let mageMagicSkillPoints=this.calculation.calculateMagicSkillPoints(this.skill,"mage",maxSkill);
      mageTrainData={skills:mageMagicSkillPoints.skills,gold:this.calculation.calculateTrainCost(mageMagicSkillPoints.skillPoints,bonus,this.toNextSkill,"magic")};
      this.trainChart=this.chartService.createTrainingChart(mageTrainData.skills,mageTrainData.gold.exercise,"Cost to next skill level using training weapons");
    }
    if(this.vocationPaladin){
      this.destroyCharts();
      let maxSkill:number=40
      let paladinTrainData:any;

      levelData=this.calculation.calculateLevelMagicDamage(this.level,this.skill,this.resistance);
      skillData=this.calculation.calculateSkillMagicDamage(this.level,this.skill,this.resistance,maxSkill);
      this.levelChart=this.chartService.createPaladinMagicLevelChart(levelData.levels,levelData.damage.runeDamage,levelData.damage.San,"GFB Damage","Exevo Mas San Damage");
      this.skillChart=this.chartService.createPaladinMagicSkillChart(skillData.skills,skillData.damage.runeDamage,skillData.damage.San,"GFB Damage","Exevo Mas San Damage");

      let mageMagicSkillPoints=this.calculation.calculateMagicSkillPoints(this.skill,"paladinMag",maxSkill);
      paladinTrainData={skills:mageMagicSkillPoints.skills,gold:this.calculation.calculateTrainCost(mageMagicSkillPoints.skillPoints,bonus,this.toNextSkill,"magic")};
      this.trainChart=this.chartService.createTrainingChart(paladinTrainData.skills,paladinTrainData.gold.exercise,"Cost to next skill level using training weapons");
    }

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
   updateChart(){
    this.calculateAndChart();
   }
}
