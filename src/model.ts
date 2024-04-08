export type ID = string
export type Image = string
export type Icon = string
export type Color = string

export type Veracity = 'fact' | 'heresay' | 'fake'


export interface Investigation {
  characters: Character[]
  locations: Location[]
  activities: Activity[]
  events: Event[]
}

export interface Character {
  id: ID
  name: string
  age?: number
  image: Image
  color: Color
}

export interface Location {
  id: ID
  name: string
  icon?: Icon
}

export interface Situation {
  id: ID
  description: string
  location?: Location
  characters: Character[]
  veracity: Veracity
}

export interface Activity extends Situation {
  from: Date
  to: Date
}

export interface Event extends Situation {
  date: Date
  icon?: Icon
}