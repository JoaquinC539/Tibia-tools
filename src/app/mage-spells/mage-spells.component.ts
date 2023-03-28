import { Component, OnInit } from '@angular/core';
import { Mage } from '../Services/mage';

@Component({
  selector: 'app-mage-spells',
  templateUrl: './mage-spells.component.html',
  styleUrls: ['./mage-spells.component.scss']
})
export class MageSpellsComponent implements OnInit {
  public option:String;
  public type:String;
  public mageSpells:any[];
  panelOpenState = false;
  constructor(private MageSpell:Mage) {
    this.option="Mage"
    this.type="";
    this.mageSpells=MageSpell.mageSpells;
  }

  ngOnInit(): void {

  }

}
