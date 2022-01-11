import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromScoreBoard from './scoreboard.reducers';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromScoreBoard.scoreboardFeatureKey,
      fromScoreBoard.scoreBoardReducers
    ),
  ],
  declarations: [],
})
export class ScoreBoardModule {}
