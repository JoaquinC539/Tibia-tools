import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox'
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
//service
import { RequestService } from './Requestservice.service';
import { KnightCalculations } from './Services/knight';
import { PaladinSpells } from './Services/paladin';


import { ChartService } from './Services/chart.service';
import { CalculationsService } from './Services/calculations.service';



//


@NgModule({
  declarations: [
    AppComponent,
    routeComponents,







  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule

  ],
  providers: [RequestService,KnightCalculations,PaladinSpells,ChartService, CalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
