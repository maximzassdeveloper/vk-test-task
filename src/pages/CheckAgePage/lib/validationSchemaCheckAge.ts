import { object, string } from 'yup'
import '@/shared/validation'

export const checkAgeSchema = object({
  name: string().onlyLetters().required(),
})
