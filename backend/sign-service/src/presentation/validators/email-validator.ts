import validator from 'validator'
import { Validation } from '../protocols/validation'

export class EmailValidator implements Validation {
  validate(value: string) {
    return validator.isEmail(value)
  }
}
