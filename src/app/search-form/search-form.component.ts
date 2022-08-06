import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class PostFormComponent implements OnInit {

  text!: string

  constructor() { }

  @Output() searchFieldUpdated = new EventEmitter<string>();


  ngOnInit(): void {
  }

  passChangesToParent() {
      this.searchFieldUpdated.emit(this.text)
  }
}
