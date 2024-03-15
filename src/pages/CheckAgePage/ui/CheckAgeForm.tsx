import { FC, FormEvent, memo, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button, FormItem, Input } from '@vkontakte/vkui'
import { yupResolver } from '@hookform/resolvers/yup'
import { vkUiRegister } from '@/shared/forms'
import { useDebounceCallback } from '@/shared/hooks'
import { checkAgeSchema } from '../lib/validationSchemaCheckAge'

const SEARCH_DEBOUNCE_INTERVAL = 3_000

export interface CheckAgeFields {
  name: string
}

interface CheckAgeFormProps {
  onSubmit: (values: CheckAgeFields) => void
  isLoading?: boolean
}

export const CheckAgeForm: FC<CheckAgeFormProps> = memo((props) => {
  const { onSubmit, isLoading } = props
  const isSubmittedByButton = useRef(false)

  const { register, watch, handleSubmit, formState } = useForm<CheckAgeFields>({
    resolver: yupResolver(checkAgeSchema),
    mode: 'onChange',
    defaultValues: { name: '' },
  })
  const { errors } = formState

  const submitHandler = handleSubmit(onSubmit)

  const submitHandlerByButton = (e: FormEvent) => {
    isSubmittedByButton.current = true
    submitHandler(e)
  }

  // isSubmittedByButton, чтобы не срабатывала отправка после ввода, если уже отправлено
  const submitHandlerByChange = useDebounceCallback((e?: FormEvent) => {
    if (isSubmittedByButton.current) {
      return
    }

    submitHandler(e)
  }, SEARCH_DEBOUNCE_INTERVAL)

  useEffect(() => {
    const subscription = watch(() => {
      isSubmittedByButton.current = false
      submitHandlerByChange()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch, handleSubmit, onSubmit, submitHandlerByChange])

  return (
    <form onSubmit={submitHandlerByButton}>
      <FormItem
        top='Имя'
        htmlFor='name'
        status={errors.name && 'error'}
        bottom={errors.name?.message}
      >
        <Input {...vkUiRegister(register('name'))} id='name' placeholder='Введите имя' autoFocus />
      </FormItem>

      <FormItem>
        <Button size='m' type='submit' loading={isLoading}>
          Узнать
        </Button>
      </FormItem>
    </form>
  )
})
