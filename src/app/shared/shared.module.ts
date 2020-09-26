import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { ConfimationDialogComponent } from './confimation-dialog/confimation-dialog.component';

@NgModule({
  declarations: [
    ConfimationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
