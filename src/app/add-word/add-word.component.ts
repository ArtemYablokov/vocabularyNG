import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Definition, Part, Word, SynonymAntonym} from "../model/Word";
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
  @Input() modifyWord: boolean = true
  @Output() resetBoolean = new EventEmitter<string>();

  definition?: string

  @Input()
  word: Word = {
    name: '',
    parts: [
      {
        name: '',
        synonyms: [this.getEmptySynAnt()],
        antonyms: [this.getEmptySynAnt()],
        definitions: [this.emptyDefinition()]
      }
    ]
  }

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
      componentPart.definitions.push(this.emptyDefinition())
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

  addPart() {
    this.word.parts.push(this.getEmptyPart())
  }

  getEmptyPart(): Part {
    return {
      name: '',
      definitions: [this.emptyDefinition()],
      synonyms: [],
      antonyms: []
    }
  }

  getEmptySynAnt(): SynonymAntonym {
    return {
      name: '',
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
}
