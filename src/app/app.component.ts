import {Component, OnInit} from '@angular/core';
import {BackendHttpService} from './services/backend-http.service';
import {Word} from "./model/Word";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private backendService: BackendHttpService) {
  }

  title = 'vocabulary'

  searchedPrefix: string = ''

  wordsFound: Word[] = []

  ngOnInit() {
    // дернуть хелсчек для Initializing Spring DispatcherServlet 'dispatcherServlet'
    // this.result = this.words.filter(word => word.name === 'word')
  }

  findWordByPrefix(prefix: string) {
    this.searchedPrefix = prefix
    this.wordsFound = prefix.trim() ? this.backendService.getWordsFromServer(prefix) : [];
  }

  wordNotFound() {
    // return this.wordsFound.length > 0

    if (this.searchedPrefix) {
      const word = this.wordsFound.find(w => w.name == this.searchedPrefix);
      debugger
      return word === undefined
    } else
      return true
  }
}
