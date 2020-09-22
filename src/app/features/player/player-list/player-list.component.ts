import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

import { PlayerService } from '../player.service';
import { Player } from '../player';
import { ConfimationDialogComponent } from 'src/app/shared/confimation-dialog/confimation-dialog.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  displayedColumns: string[] = ['Id', 'Last Name', 'First Name', 'Age', 'Position', 'Skill', 'Team', 'Details', 'Delete'];

  constructor(
    public dialog: MatDialog,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      players => this.players = players
    );
  }

  openDeleteDialog(player: Player): void {
    const dialogRef = this.dialog.open(ConfimationDialogComponent, {
      data: {
        title: 'Delete Player',
        message: `Are you sure you want to delete the player ${player.FirstName} ${player.LastName}?`,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playerService.deletePlayer(player.Id).pipe(
          tap(() => this.getPlayers()),
        ).subscribe();
      }
    });
  }

}
