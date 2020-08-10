import { Skill } from './skill'

export interface Class {
  name: string
  description: string
  skills?: Array<Skill>
}
