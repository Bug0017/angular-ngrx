import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { counterReducer } from './counter/counter.reducers';
import { BooksEffects } from './state/books.effects';
import { booksReducers } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducers,
      collection: collectionReducer,
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true,
    }),
    EffectsModule.forRoot([BooksEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class AppStateModule {}
