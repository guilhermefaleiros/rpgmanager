import { AuthenticationModel } from '../models/authentication'

export interface AuthenticationDTO {
  email: string
  password: string
}

export interface Authentication {
  auth(authDTO: AuthenticationDTO): Promise<AuthenticationModel>
}
