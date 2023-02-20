import { Component, DoCheck, OnInit } from '@angular/core';
import { prependOnceListener } from 'process';

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
    //Interface to create an object to store the data from the analyzer

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
        let AmountToSpare
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
        //if balance is higher than the profit tag them as player and how much they have to pay or recieve otherwise
        if(balance>profitPerPerson){
          Payer=true;
          AmountToSpare=balance-profitPerPerson;
          const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
          persons.push(newPerson);
        }else{
          Payer=false;
          if(balance<0){
            AmountToSpare=(Math.abs(balance)+profitPerPerson)*-1
            console.log(name,AmountToSpare);
            const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
            persons.push(newPerson);
          }else{
            AmountToSpare=(profitPerPerson-balance)*-1
            console.log(name,AmountToSpare);
            const newPerson:Person={name,loot,supplies,balance,Payer,AmountToSpare}
            persons.push(newPerson);
          }
        }
       }
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


  LootSplitterOld(loot:string,toSaveMethod?:any):string{
    let output="";
    //Catch exeptions to avoid crashing
    try{
      //Create an array to store important data
      const persons=[];
      //Split each line
      const lines=loot.split("\n");
      for(let i=6; i<lines.length;i+=6){
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
        const balance=loot-supplies;
        //Store them in the array of every participant
        persons.push({name,loot,supplies,balance})
      }
      //Loop to get the party statistics
      let PartyBalance=0;
      let PartyLoot=0;
      for (const person of persons){
        PartyBalance +=person.balance;
        PartyLoot+=person.loot;
      }
      const PartySupplies=PartyLoot-PartyBalance;
      //Calculate the profit per person or waste
      const profitPerPerson=Math.floor(PartyBalance/persons.length);
      //Save the profit per person as the first line
      output+="Profit per person: "+profitPerPerson+"\n";
      //if it is profit
      if(PartyBalance>0){
        //Loop trough every person in the persons array
        for(let i=0;i<persons.length;i++){
          //Calculate the final mone state after the payment of each party member
          let finalAmountExpected=persons[i].supplies+profitPerPerson;
          //To check who has to pay, their balance has to be higher than their final state
          if(finalAmountExpected<persons[i].balance){
            //Loop trough every other member of the party to calculate how mnuch to pay or if it has to be paid
            for(let j=0;j<persons.length;j++){
              if(i===j)continue;
              //Calculate how much to pay, positive means it has to pay negative it has to be paid from that member
              let amountToPay=Math.floor(persons[j].supplies+profitPerPerson-persons[j].loot);
              if(amountToPay<0){
                output+=persons[j].name+" has to pay "+(-1)*amountToPay+"gp to "+persons[i].name+"\n"
              }else{output+=persons[i].name+" has to pay "+amountToPay+"gp to "+persons[j].name+"\n"}
            }
        }
  }
  //If it is waste for the party
}else{
  //To avoid double payments it is needed to check who has zero balance to be paid and pay
  let highesBalance=persons[0].balance;
  //Loop to check which member has the higher balance
  for(let i=0;i<persons.length;i++){
    let finalAmountExpected=persons[i].supplies+profitPerPerson;
    if(persons[i].balance>highesBalance){
      highesBalance=i;
    }
  }
  //Loop to iterate to every party member to check if iit need to pay or to be paid
  for(let i=0;i<persons.length;i++){
    if(highesBalance===i)continue;
    //Calculate how much needed to be paid, if positive, pay, has to paid otherwise
    let toPaid=persons[i].supplies+profitPerPerson-persons[i].loot;
    if(toPaid>0){
      output+=persons[highesBalance].name+" has to pay "+toPaid+"gp to "+persons[i].name+"\n";
    }else{
      output+=persons[i].name+" has to pay "+(-1)*toPaid+"gp to "+persons[highesBalance].name+"\n"
    }
  }
}
    }catch(e){
      console.log(e)
    }
    //Return the String builded with the payments according to the calculations

    return output;
  }


}


