import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  displayedColumns: string[] = ['Id', 'Last Name', 'First Name', 'Age', 'Position', 'Skill', 'Details'];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      players => this.players = players
    );
  }

}
