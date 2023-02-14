import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LootSplitComponent } from './loot-split/loot-split.component';
//import { NavigationComponent } from './navigation-component/navigation-component.component';
import { HomeComponent } from './home/home.component';
import { KnightRotComponent } from './knight-rot/knight-rot.component';
import { RotationDamageComponent } from './rotation-damage/rotation-damage.component';
import { PalaSpellsComponent } from './pala-spells/pala-spells.component';
import { KnightrotComponent } from './knightrot/knightrot.component';

const routes: Routes = [
  {path:"lsplit",component:LootSplitComponent},
  {path:"",component:HomeComponent},
  {path:"rotations",component:RotationDamageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[LootSplitComponent,HomeComponent,KnightRotComponent,RotationDamageComponent,PalaSpellsComponent,KnightrotComponent];
