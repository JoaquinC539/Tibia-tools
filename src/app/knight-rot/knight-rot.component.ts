import { Component, OnInit, DoCheck,ViewChild } from '@angular/core';
import { KnightCalculations } from '../Services/knight';


@Component({
  selector: 'app-knight-rot',
  templateUrl: './knight-rot.component.html',
  styleUrls: ['./knight-rot.component.scss']
})
export class KnightRotComponent implements OnInit {
  public option:String;
  public type:String;
  public kspells:any[]
  panelOpenState = false;
  constructor(private Knight:KnightCalculations) {
    this.option="Knight"
    this.type="";
    this.kspells=Knight.kspells
    };

  ngOnInit(): void {

  }



}
