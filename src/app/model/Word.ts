
export interface Word {
  name: string
  definition: string
  searches?: number
  parts: Part[]
}

export interface Part {
  name: string;
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

export interface Definition {
  name: string
  phrases: Phrase[]
}


interface Phrase {
  name: string
}
