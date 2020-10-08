import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
  ]
})
export class DashboardModule { }
