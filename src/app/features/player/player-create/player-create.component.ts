import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Team } from '../../team/team';
import { TeamService } from '../../team/team.service';

import { Position, Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  positionOptions: Position[] = [];
  teamOptions: Team[];
  playerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    skill: [''],
    position: [''],
    team: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerService: PlayerService,
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.initializePositionOptions();
    this.initializeTeamsOptions();
  }

  private initializePositionOptions(): void {
    for (const position of Object.keys(Position)) {
      this.positionOptions.push(Position[position]);
    }
  }

  private initializeTeamsOptions(): void {
    this.teamService.getTeams().pipe(
      map((teams) => this.teamOptions = teams)
    ).subscribe();
  }

  onSubmit(): void {
    const player: Player = {
      FirstName: this.playerForm.controls.firstName.value,
      LastName: this.playerForm.controls.lastName.value,
      Age: this.playerForm.controls.age.value,
      Skill: this.playerForm.controls.skill.value,
      Position: this.playerForm.controls.position.value,
      Team: this.playerForm.controls.team.value === '' ? null : this.playerForm.controls.team.value,
    };
    this.playerService.addPlayer(player).pipe(
      tap(() => this.router.navigate(['/players/list'])),
    ).subscribe();
  }

}
