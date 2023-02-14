import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion'
//Other Modules
import { NgChartsModule } from 'ng2-charts';
//service
import { RequestService } from './Requestservice.service';
import { KnightCalculations } from './Services/knight';
import { PaladinSpells } from './Services/paladin';
import { PaladinrotComponent } from './paladinrot/paladinrot.component';





//


@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    PaladinrotComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    NgChartsModule,
    MatExpansionModule
  ],
  providers: [RequestService,KnightCalculations,PaladinSpells],
  bootstrap: [AppComponent]
})
export class AppModule { }
