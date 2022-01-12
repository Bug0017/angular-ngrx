import { createReducer, on } from '@ngrx/store';
import * as ScoreBoardPageActions from './scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}

export interface Game extends State {}

export const initialState: State = {
  home: 0,
  away: 0,
};

export const scoreboardFeatureKey = 'game';

export const scoreBoardReducers = createReducer(
  initialState,
  on(ScoreBoardPageActions.homeScore, (state) => ({
    ...state,
    home: state.home + 1,
  })),
  on(ScoreBoardPageActions.awayScore, (state) => ({
    ...state,
    away: state.away + 1,
  })),
  on(ScoreBoardPageActions.resetScore, (state) => ({ home: 0, away: 0 })),
  on(ScoreBoardPageActions.setScores, (state, { game }) => ({
    home: game.home,
    away: game.away,
  }))
);
