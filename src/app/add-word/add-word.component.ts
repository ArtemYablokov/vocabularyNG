import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Definition, Part, Word} from "../model/Word";
import {BackendHttpService} from "../services/backend-http.service";

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {

  constructor(private backendService: BackendHttpService) {
  }

  @Input() wordToSave!: string
  @Output() resetBoolean = new EventEmitter<string>();

  definition?: string

  ngOnInit(): void {
  }

  addNewWord() {
    // this.resetBoolean.emit()
    this.word.name = this.wordToSave
    this.backendService.addNewWord(this.word)
  }

  addAntonym(index: number) {
    const part = this.word.parts[index];
    part.antonyms.push(this.getEmptyPart())
  }

  addSynonym(part: Part) {
    const parts = this.word.parts;
    const componentPart = parts.find(p => p.name === part.name);
    if (componentPart) {
      componentPart.synonyms.push(this.getEmptyPart())
    }
  }

  addDefinition(part: Part) {
    const parts = this.word.parts;
    const componentPart = parts.find(p => p.name === part.name);
    if (componentPart) {
      componentPart.definitions.push({
        name: '',
        phrases: [
          {name: ''}
        ]
      })
    }
  }

  addPhrase(part: Part, idx: number) {
    const parts = this.word.parts;
    const componentPart = parts?.find(p => p.name === part.name);
    if (componentPart) {
      const definitions: Definition[] = componentPart.definitions;
      definitions[idx].phrases.push({name: ''})

    }
  }

  getEmptyPart(): Part {
    return {
      name: '',
      definitions: [this.emptyDefinition()],
      synonyms: [],
      antonyms: []
    }
  }

  // todo move to static class

  emptyDefinition(): Definition {
    return {
      name: '',
      phrases: [
        {name: ''}
      ]
    }
  }

  word: Word = {
    name: '',
    parts: [
      {
        name: '',
        synonyms: [this.getEmptyPart()],
        antonyms: [this.getEmptyPart()],
        definitions: [this.emptyDefinition()]
      }
    ]
  }

  addPart() {
    this.word.parts.push(this.getEmptyPart())
  }
}
