export enum Role {
  ADMIN = 'ADMIN',
  PLAYER = 'PLAYER',
}

export interface Account {
  id: string
  name: string
  display: string
  email: string
  password: string
  role?: Array<Role>
  imageUrl?: string
}
