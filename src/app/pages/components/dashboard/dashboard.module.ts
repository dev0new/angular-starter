import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';

import { DashboardComponent } from './dashboard.component';

import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbMenuModule,
  NbContextMenuModule, NbActionsModule,NbPopoverModule,NbTooltipModule,
  NbUserModule,
  NbAlertModule,
  NbSpinnerModule,
  NbTabsetModule,
  
} from '@nebular/theme';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
	NbButtonModule,
	NbCardModule,
	NbProgressBarModule,
	NbIconModule,
	NbSelectModule,
	NbListModule,
	NbMenuModule, 
	NbContextMenuModule, 
	NbActionsModule,
	NbPopoverModule,
	NbTooltipModule,
	NbUserModule,
	NbAlertModule,
	NbSpinnerModule,
	NbTabsetModule,
  ]
})
export class DashboardModule { }
