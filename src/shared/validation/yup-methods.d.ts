import { StringSchema } from 'yup'

declare module 'yup' {
  interface StringSchema {
    onlyLetters(message?: string): StringSchema
  }
}
