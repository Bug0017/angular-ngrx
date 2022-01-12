import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngrx-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: any = [];
  @Output() add = new EventEmitter<string>();
}
