
export interface Word {
  name: string
  numberOfSearches?: number
  parts: Part[]
}

export interface Part {
  name: string;
  definitions: Definition[]
  synonyms: SynonymAntonym[]
  antonyms: SynonymAntonym[]
}

export interface Definition {
  name: string
  phrases: Phrase[]
}


interface Phrase {
  name: string
}

export interface SynonymAntonym {
  name: string
}

