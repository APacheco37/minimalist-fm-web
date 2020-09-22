import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfimationDialogComponent } from './confimation-dialog/confimation-dialog.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ConfimationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
