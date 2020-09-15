import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Position, Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  positionOptions: Position[] = [];
  playerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    skill: [''],
    position: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.initializePositionOptions();
  }

  private initializePositionOptions(): void {
    for (const position of Object.keys(Position)) {
      this.positionOptions.push(Position[position]);
    }
  }

  onSubmit(): void {
    const player: Player = {
      FirstName: this.playerForm.controls.firstName.value,
      LastName: this.playerForm.controls.lastName.value,
      Age: this.playerForm.controls.age.value,
      Skill: this.playerForm.controls.skill.value,
      Position: this.playerForm.controls.position.value,
    };
    this.playerService.addPlayer(player).pipe(
      tap(() => this.router.navigate(['/players/list'])),
    ).subscribe();
  }

}
