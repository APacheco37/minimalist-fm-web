import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface SnackbarAlertData {
  message: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-snackbar-alert',
  templateUrl: './snackbar-alert.component.html',
  styleUrls: ['./snackbar-alert.component.css']
})
export class SnackbarAlertComponent implements OnInit {

  constructor(
    public sbRef: MatSnackBarRef<SnackbarAlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarAlertData,
  ) { }

  ngOnInit(): void {
  }

}
