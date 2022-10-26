import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  @Input() wordToSave!: string

  @Output() resetBoolean = new EventEmitter<string>();


  definition?: string

  ngOnInit(): void {
  }

  addNewWord() {

    this.resetBoolean.emit()

    this.http.put('http://localhost:8080/add',
      {'name': this.wordToSave, 'definition': this.definition})

      .subscribe(
        response => {
          console.log(response)
        })
  }
}
