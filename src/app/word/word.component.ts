import { Component, Input, OnInit } from '@angular/core';
import {Word} from "../model/Word";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() word!: Word

  showDefinition: boolean = false

  revealOrHideWord() {
    this.showDefinition = !this.showDefinition
  }
}
