import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-blessing',
  templateUrl: './blessing.component.html',
  styleUrls: ['./blessing.component.scss']
})
export class BlessingComponent implements OnInit,DoCheck {
public level:number
public blessingCost:string[]
  constructor() {
    this.level=250;
    this.blessingCost=[""];
   }

  ngOnInit(): void {
    this.calculateBlessingCost();
  }
  ngDoCheck(): void {
      this.calculateBlessingCost();
  }
  /**
   * Calculate blessing cost
   * @param level
   * @returns a string with the prices for all the blessings type
   */
  calculateBlessingCost(){
    let blessingCost:number=0;
    let enhBlessingCost:number=0;
    this.blessingCost=[];
    if(this.level<30){
      this.blessingCost.push("Regular blessing costs for each 2000gp and 10,000gp for every of them")
    }else if(this.level>30 && this.level<120){
      blessingCost=2000+(200*this.level);
      enhBlessingCost=2600+(260*this.level);
    }else{
      blessingCost=20000+(75*this.level);
      enhBlessingCost=26000+(100*this.level);
    }
    this.blessingCost.push(`Regular blessing costs for each ${blessingCost.toLocaleString()}gp`);
    this.blessingCost.push(` All regular blessing costs ${(blessingCost*5).toLocaleString()}gp and ${(Number((blessingCost*5*1.1).toFixed(0))).toLocaleString()}gp for the inquisition blessing`)
    this.blessingCost.push(`Each Enhanced blessing costs ${enhBlessingCost.toLocaleString()}`);

  }
}
