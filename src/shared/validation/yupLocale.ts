import { setLocale } from 'yup'
import { validationMessages } from './validationMessages'

setLocale({
  mixed: {
    required: validationMessages.required,
  },
})
