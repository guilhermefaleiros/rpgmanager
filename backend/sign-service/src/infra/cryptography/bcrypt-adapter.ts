import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/hasher'

export class BcryptAdapter implements Hasher {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    const digest = await bcrypt.hash(plaintext, this.salt)
    return digest
  }
}
