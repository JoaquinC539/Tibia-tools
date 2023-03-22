import { Component, OnInit,DoCheck } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  implements OnInit,DoCheck{
  public damageType:string;
  public chart:any;
  public currentLevel:number;
  public currentSkill:number
  public weaponAttack:number;
  public armor:number;
  public resistance:number;
  public stance:string;
  constructor() {
    this.damageType="Melee";
    this.currentLevel=185;
    this.currentSkill=88;
    this.weaponAttack=47;
    this.armor=30;
    this.resistance=95;
    this.stance="offensive"
  }

  ngOnInit(): void {

  }
  ngDoCheck(): void {

  }

}
