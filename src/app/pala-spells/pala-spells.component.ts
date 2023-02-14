import { Component, OnInit } from '@angular/core';
import { PaladinSpells } from '../Services/paladin';
@Component({
  selector: 'app-pala-spells',
  templateUrl: './pala-spells.component.html',
  styleUrls: ['./pala-spells.component.scss']
})
export class PalaSpellsComponent implements OnInit {
  public option:String;
  public type:String;
  public pspells:any[]
  constructor(private Paladin:PaladinSpells) {
    this.option="Paladin";
    this.type="";
    this.pspells=Paladin.spells
   }

  ngOnInit(): void {
  }

}
