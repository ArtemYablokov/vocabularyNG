import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  text: string = 'word'

  constructor() { }

  @Output() searchFieldUpdated = new EventEmitter<string>();


  ngOnInit(): void {
  }

  passChangesToParent() {

    if (this.text.trim()) {
      console.log('from child = ' + this.text)
      this.searchFieldUpdated.emit(this.text)
    }
  }

}
