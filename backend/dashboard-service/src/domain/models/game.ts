import { Item } from './item'
import { Class } from './class'
import { Player } from './player'
import { Attribute } from './attribute'
import { Master } from './master'

export interface Game {
  id: string
  name: string
  lore: string
  master: Master
  attributes: Array<Attribute>
  items: Array<Item>
  classes: Array<Class>
  players: Array<Player>
}
