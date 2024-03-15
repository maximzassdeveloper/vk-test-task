import { addMethod, string } from 'yup'
import { validationMessages } from './validationMessages'

addMethod(string, 'onlyLetters', function (message = validationMessages.onlyLetters) {
  return this.test(`onlyLetters`, message, function (value) {
    const { path, createError } = this
    const onlyLettersRegexp = /^[a-zа-я]*$/gi

    return onlyLettersRegexp.test(value ?? '') || createError({ path, message })
  })
})
