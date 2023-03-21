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
  @Input() level:any
  @Input() skill:any
  @Input() weaponAttack:any
  @Input() armor:any
  @Input() resistance:any
  @Input() stance:any
  public levelChart:any
  public data:any
  constructor( private chartService:ChartService, private calculation:CalculationsService) {
   }

  ngOnInit(): void {
    this.calculateAndChart();
  }
  ngOnDestroy(): void {
      if(this.levelChart){
        this.levelChart.destroy();
      }
  }


  calculateAndChart(){
    let data:any;
    data=this.calculation.calculateLevelPhysicalDamage(this.level,this.stance,this.weaponAttack,this.skill,this.armor,this.resistance);
    if(this.levelChart){
      this.levelChart.destroy();
    }
    this.levelChart=this.chartService.createLevelChart(data.levels,data.damage);
   }
   updateChart(){
    this.calculateAndChart();
   }

}
