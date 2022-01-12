import { createReducer, on } from '@ngrx/store';
import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

export const bookInitialState: ReadonlyArray<Book> = [];

export const booksReducers = createReducer(
  bookInitialState,
  on(retrievedBookList, (state, { books }) => books)
);
