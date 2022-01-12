import { createAction, props } from '@ngrx/store';
import { Game } from './scoreboard.reducers';

export const homeScore = createAction('[ScoreBoard Page] Home Score');
export const awayScore = createAction('[ScoreBoard Page] Away Score');
export const resetScore = createAction('[ScoreBoard Page] Score Reset');
export const setScores = createAction(
  '[ScoreBoard Page] Set Scores',
  props<{ game: Game }>()
);
