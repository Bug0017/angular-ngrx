import { BooksEffects } from './state/books.effects';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { collectionReducer } from './state/collection.reducer';
import { ScoreBoardModule } from './scoreboard/scoreboard.module';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducers';

import { booksReducers } from './state/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducers,
      collection: collectionReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true,
    }),
    EffectsModule.forRoot([BooksEffects]),
    ScoreBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
