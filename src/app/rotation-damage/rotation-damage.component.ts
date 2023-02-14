import { Component, OnInit, DoCheck } from '@angular/core';
import { KnightCalculations } from '../Services/knight';
import { PaladinSpells } from '../Services/paladin';


@Component({
  selector: 'app-rotation-damage',
  templateUrl: './rotation-damage.component.html',
  styleUrls: ['./rotation-damage.component.scss']
})
export class RotationDamageComponent implements OnInit {
  public vocation:String;

  constructor(private Kspells:KnightCalculations, private Pspells:PaladinSpells) {
    this.vocation="Knight"

  }
  ngOnInit(): void {

  }
  ngDoCheck(): void {



  }






}
