import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Team } from '../team';
import { TeamService } from '../team.service';
import { ConfimationDialogComponent } from 'src/app/shared/confimation-dialog/confimation-dialog.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[];
  displayedColumns: string[] = ['Id', 'Name', 'Players', 'Details', 'Delete'];
  snackBarConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams
    );
  }

  openDeleteDialog(team: Team): void {
    const dialogRef = this.dialog.open(ConfimationDialogComponent, {
      data: {
        title: 'Delete Team',
        message: `Are you sure you want to delete the team ${team.Name}?`,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teamService.deleteTeam(team.Id).pipe(
          tap(() => this.snackBar.open('The team has been deleted successfully', 'Dismiss', this.snackBarConfig)),
          tap(() => this.getTeams()),
          catchError(() => {
            return of(this.snackBar.open('There was an error deleting the team', 'Dismiss', this.snackBarConfig));
          })
        ).subscribe();
      }
    });
  }

}
