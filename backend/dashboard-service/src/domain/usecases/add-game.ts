import { Attribute } from '../models/attribute'
import { Item } from '../models/item'
import { Class } from '../models/class'
import { Player } from '../models/player'
import { Master } from '../models/master'

export interface GameDTO {
  name: string
  lore: string
  master: Master
  attributes: Array<Attribute>
  items: Array<Item>
  classes: Array<Class>
  players: Array<Player>
}

export interface AddGame {
  add(gameDTO: GameDTO)
}
