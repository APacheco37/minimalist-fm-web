import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerService } from './player.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { PlayerCreateComponent } from './player-create/player-create.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailsComponent,
    PlayerCreateComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule,
  ],
  providers: [
    PlayerService,
  ]
})
export class PlayerModule { }
