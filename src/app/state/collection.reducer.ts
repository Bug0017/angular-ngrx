import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './books.actions';

export const collectionInitialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  collectionInitialState,
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
    return [...state, bookId];
  }),
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId))
);
