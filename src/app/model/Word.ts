
export interface Word {
  name: string
  searches?: number
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

interface SynonymAntonym {
  name: string
}

