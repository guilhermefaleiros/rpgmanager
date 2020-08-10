import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/hasher'
import { HashComparer } from '../../data/protocols/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    return await bcrypt.hash(plaintext, this.salt)
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return await bcrypt.compare(plaintext, digest)
  }
}
