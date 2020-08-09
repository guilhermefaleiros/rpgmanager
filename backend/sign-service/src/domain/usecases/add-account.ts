import { Role } from '../models/account'

export interface AddAccountDTO {
  name: string
  email: string
  password: string
  display: string
  imageUrl?: string
  role?: Array<Role>
}

export interface AddAccount {
  add(account: AddAccountDTO)
}
