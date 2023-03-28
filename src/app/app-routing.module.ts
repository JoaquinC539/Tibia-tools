import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LootSplitComponent } from './loot-split/loot-split.component';
//import { NavigationComponent } from './navigation-component/navigation-component.component';
import { HomeComponent } from './home/home.component';
import { KnightRotComponent } from './knight-rot/knight-rot.component';
import { RotationDamageComponent } from './rotation-damage/rotation-damage.component';
import { PalaSpellsComponent } from './pala-spells/pala-spells.component';
import { KnightrotComponent } from './knightrot/knightrot.component';
import { SkillsComponent } from './skills/skills.component';
import { ImbumentsComponent } from './imbuments/imbuments.component';
import { MeleeDamageComponent } from './melee-damage/melee-damage.component';
import { DistanceDamageComponent } from './distance-damage/distance-damage.component';
import { MagicDamageComponent } from './magic-damage/magic-damage.component';
import { PaladinrotComponent } from './paladinrot/paladinrot.component';
import { BlessingComponent } from './blessing/blessing.component';
import { MageRoationComponent } from './mage-roation/mage-roation.component';
import { MageSpellsComponent } from './mage-spells/mage-spells.component';



const routes: Routes = [
  {path:"lsplit",component:LootSplitComponent},
  {path:"",component:HomeComponent},
  {path:"rotations",component:RotationDamageComponent},
  {path:"skills",component:SkillsComponent},
  {path:"imbuments",component:ImbumentsComponent},
  {path:"blessings",component:BlessingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[LootSplitComponent,HomeComponent,KnightRotComponent,
  RotationDamageComponent,PalaSpellsComponent,KnightrotComponent,SkillsComponent,ImbumentsComponent,
  MagicDamageComponent,MeleeDamageComponent,DistanceDamageComponent,PaladinrotComponent,
  BlessingComponent,MageRoationComponent,MageSpellsComponent];
