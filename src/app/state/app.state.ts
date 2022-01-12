import { Book } from '../book-list/books.model';
import { Game } from '../scoreboard/scoreboard.reducers';

export interface AppState {
  count: number;
  books: ReadonlyArray<Book[]>;
  collection: ReadonlyArray<string>;
  game: Game;
}
