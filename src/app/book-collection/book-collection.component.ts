import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'ngrx-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: any = [];
  @Output() remove = new EventEmitter<string>();
}
