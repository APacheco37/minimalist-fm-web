import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamRoutingModule } from './team-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { TeamService } from './team.service';


@NgModule({
  declarations: [
    TeamListComponent,
    TeamDetailsComponent,
    TeamCreateComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    TeamService,
  ]
})
export class TeamModule { }
