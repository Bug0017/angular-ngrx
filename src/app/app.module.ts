import { AppStateModule } from './app-state.module';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { ScoreBoardModule } from './scoreboard/scoreboard.module';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
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
    AppStateModule,
    ScoreBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
