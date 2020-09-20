import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[];
  displayedColumns: string[] = ['Id', 'Name', 'Players', 'Details', 'Delete'];

  constructor(
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

  deleteTeam(team: Team): void {
    this.teamService.deleteTeam(team.Id).pipe(
      tap(() => this.getTeams()),
    ).subscribe();
  }

}
