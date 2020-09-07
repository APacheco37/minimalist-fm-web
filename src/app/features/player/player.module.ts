import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
  ],
  providers: [
    PlayerService,
  ]
})
export class PlayerModule { }
