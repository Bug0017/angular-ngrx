import { loadBooks, retrievedBookList } from './books.actions';
import { BooksService } from './../book-list/books.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => {
            return retrievedBookList({ books });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
  constructor(private actions$: Actions, private booksService: BooksService) {}
}
