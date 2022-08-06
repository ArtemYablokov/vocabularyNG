import { Component, OnInit } from '@angular/core';
import { BackendHttpService } from './services/backend-http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private backendService: BackendHttpService) { }

  title = 'vocabulary'

  searchedWord?: string

  representedResult: Word[] = []

  ngOnInit() {
    // this.result = this.words.filter(word => word.name === 'word')
  }

  findWordByPrefix(prefix: string) {
    
    this.searchedWord = prefix // for passing current argument to childs

    if (prefix.trim()) {
      this.representedResult = this.backendService.getWordsfromServer(prefix)
    } else {
      this.representedResult = []
    }

  }
}

export interface Word {
  name: string,
  definition: string,
  searches?: number
}