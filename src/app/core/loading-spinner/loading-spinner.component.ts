import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingSpinnerService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loadingSpinnerService.isLoading;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
  ) { }

  ngOnInit(): void {
  }

}
