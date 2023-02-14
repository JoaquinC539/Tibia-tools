export interface Spell{
  name:string,
    mana:number,
    cooldown:number,
    modifier?:number,
    type:string,
    targets?:number,
    duration?:number
}
