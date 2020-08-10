import { Game } from './game'
import { Class } from './class'
import { Item } from './item'
import { Attribute } from './attribute'
import { Skill } from './skill'

export interface Player {
  profile: Account
  game: Game
  class: Class
  items: Array<Item>
  attributes: Array<Attribute>
  skills: Array<Skill>
  observation: string
}
