import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { TeamService } from '../team.service';
import { Team } from '../team';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamForm = this.fb.group({
    name: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const team: Team = {
      Name: this.teamForm.controls.name.value,
      Players: null,
    };
    this.teamService.addTeam(team).pipe(
      tap(() => this.router.navigate(['/teams/list'])),
    ).subscribe();
  }

}
