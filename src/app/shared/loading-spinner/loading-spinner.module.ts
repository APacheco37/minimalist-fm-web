import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingSpinnerComponent } from './loading-spinner.component';
import { LoadingSpinnerService } from './loading-spinner.service';
import { LoadingSpinnerInterceptor } from './loading-spinner.interceptor';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    LoadingSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingSpinnerInterceptor, multi: true }
  ],
  exports: [
    LoadingSpinnerComponent,
  ]
})
export class LoadingSpinnerModule { }
