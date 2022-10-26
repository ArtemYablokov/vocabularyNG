import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.scss']
})
export class SearchLineComponent implements OnInit {

  prefix: string = ''

  constructor() {
  }

  @Output() prefixUpdated = new EventEmitter<string>();


  ngOnInit(): void {
  }

  passPrefixToAppComponent() {
    this.prefixUpdated.emit(this.prefix)
  }
}
