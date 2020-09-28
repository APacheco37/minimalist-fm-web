import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

import { PlayerService } from '../player.service';
import { Player } from '../player';
import { ConfimationDialogComponent } from 'src/app/shared/confimation-dialog/confimation-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  dataSource: MatTableDataSource<Player>;
  playerCount: number;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  displayedColumns: string[] = ['Id', 'Last Name', 'First Name', 'Age', 'Position', 'Skill', 'Team', 'Details', 'Delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      players => this.dataSource = new MatTableDataSource(players)
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
