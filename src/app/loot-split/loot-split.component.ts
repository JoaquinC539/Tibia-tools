import { Component, DoCheck, OnInit } from '@angular/core';


interface Person{
  name:string,
  balance:number,
  loot:number,
  supplies:number,
  Payer:boolean,
  AmountToSpare:number,
}
@Component({
  selector: 'loot-split',
  templateUrl: './loot-split.component.html',
  styleUrls: ['./loot-split.component.scss']
})
export class LootSplitComponent implements OnInit, DoCheck {
  PartyLoot:string
  empty:boolean;
  LootSplit:string;
  items:any;
  constructor(  ) {
    this.PartyLoot="";
    this.empty=true;
    this.LootSplit=""
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    if(this.PartyLoot==""){
      this.empty=false;
    }else{
      this.empty=true;
      if(this.Linechecker(this.PartyLoot)){
        this.LootSplit=this.LootSplitter(this.PartyLoot);
        this.items = this.LootSplit.split("\n").join("<br>");
      }
    }
  }
  Linechecker(loot:string):boolean{
    const lines=loot.split("\n");
    const firstLine=lines[0];
    const firstLineWords=firstLine.split(" ");
    if(firstLineWords[0]=="Session" && firstLineWords[1]=="data:" && firstLineWords[2]=="From"){
      return true;
    } else{ return false}
}
  LootSplitter(loot:string):string{
    let output="";
     //Catch exeptions to avoid crashing
    try{
       //Create an array to store important data
       let persons:Person[]=[];
       //Split each line
       let lines=loot.split("\n");
       //Get the Party Balance
       let PartyBalance:any=lines[5].trim().split(":");
       PartyBalance=parseInt(PartyBalance[1].replace(",",""));
       //Calculate the profit per person or waste
       //Get the number of persons
       let numberOfPersons:number=0;
       for(let i=6;i<lines.length;i+=6){
        numberOfPersons++;
       }
       const profitPerPerson=Math.floor(PartyBalance/numberOfPersons);
        //Save the profit per person as the first line
      output+="Profit per person: "+profitPerPerson+"\n";
       //Iterate to store in a json type object all the data and push it into an array
       for(let i=6; i<lines.length;i+=6){
        let Payer;
        let AmountToSpare;
        //Remove blank spaces
        const name=lines[i].trim();
        //Split as separator :
        const lootA=lines[i+1].split(":")
        //Take the number of the splitted loot
        const loot=parseInt(lootA[1].trim().replace(",",""));
        //Makes the same steps with supplies
        const suppliesA=lines[i+2].split(":");
        const supplies=parseInt(suppliesA[1].trim().replace(",",""));
        //Calculate the balance using loot and supplies
        const balanceA=lines[i+3].split(":");
       const balance=parseInt(balanceA[1].trim().replace(",",""));
       // const balance=loot-supplies;
        //if balance is higher than the profit tag them as payer and how much they have to pay or recieve otherwise
        if(balance>profitPerPerson){
          Payer=true;
          AmountToSpare=balance-profitPerPerson;
          const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
          persons.push(newPerson);
        }else{
          Payer=false;
          if(balance<0){
            AmountToSpare=(Math.abs(balance)+profitPerPerson)*-1
            const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
            persons.push(newPerson);
          }else{
            AmountToSpare=(profitPerPerson-balance)*-1
            const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
            persons.push(newPerson);
          }
        }
       }
       const originalPersons = persons.slice();
      //Call another method to make the output
    output+=this.OutputLootSplitter(persons);
    }catch(e){console.log(e)}
  return output;
}

OutputLootSplitter(players:Person[]):string{
    let output=""
    //Loop trough everybody and check if it's marked with payer tag
    //Doing the negative condition to avoid if hell
    for(let i=0;i<players.length;i++){
    //First check if it's a payer and has money
    if(players[i].Payer===false ){
      continue;
    }
    //Then loop for every person
    for(let j=0;j<players.length;j++){
      //If are the same person continue
      if(i===j){
          continue
        }
        //At this point only payers will be here so it has now to pay to need to be paid and check if the balance of the payer is more than 0
        if(players[j].Payer===false && players[i].AmountToSpare>0){
          //Then it has to pay to the paid person
          let payment=players[j].AmountToSpare;
          //If payer can pay completely then paid what it can
          if(Math.abs(players[j].AmountToSpare)>players[i].AmountToSpare){

            let payment=players[i].AmountToSpare;
            //Pay and then modify the values of the amount of the paid and set the payer to 0 to spare
            output+=players[i].name +" has to pay " +players[i].AmountToSpare+" gp to "+players[j].name+"\n";
            players[j].AmountToSpare+=players[i].AmountToSpare;
            players[i].AmountToSpare=0;

          }else{

            //If it has complete to pay then set the paid to 0 and reduce the payer
            //Adding an if to avoid put in the output a payment of 0
            if(Math.abs(players[j].AmountToSpare)===0){
              continue;
            }
            output+=players[i].name +" has to pay " +Math.abs(players[j].AmountToSpare)+" gp to "+players[j].name+"\n";
            players[i].AmountToSpare+=players[j].AmountToSpare;
            players[j].AmountToSpare=0;
          }
        }
      }
    }
      return output;
    }



}


