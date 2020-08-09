export class EmailInUse extends Error {
  constructor(paramName: string) {
    super(`Email in use: ${paramName}`)
    this.name = 'EmailInUse'
  }
}
