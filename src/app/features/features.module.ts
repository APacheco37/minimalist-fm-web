import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlayerModule,
    TeamModule,
  ]
})
export class FeaturesModule { }
