import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
