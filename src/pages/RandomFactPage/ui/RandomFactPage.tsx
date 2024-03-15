import { ChangeEvent, FC, useRef, useState } from 'react'
import {
  Button,
  Div,
  FormStatus,
  Group,
  PanelHeader,
  PanelHeaderBack,
  Spacing,
  Textarea,
} from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { useGetRandomFact } from '../api/useGetRandomFact'
import { routes } from '@/shared/router'

const RandomFactPage: FC = () => {
  const routeNavigator = useRouteNavigator()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaValue, setTextareaValue] = useState('')

  const { mutate, isPending, isError } = useGetRandomFact({
    onMutate: () => {
      setTextareaValue('')
    },
    onSuccess: ({ data }) => {
      setTextareaValue(data.fact)

      // setTimeout, чтобы текст успел добавиться
      setTimeout(() => {
        // Не учитываются знаки препинания, напрмиер в "Привет!", фокус будет после "!"
        const firstSpace = data.fact.indexOf(' ')
        textareaRef.current?.focus()
        textareaRef.current?.setSelectionRange(firstSpace, firstSpace)
      }, 0)
    },
  })

  const buttonClickHandler = () => {
    mutate()
  }

  const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

  return (
    <>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => routeNavigator.push(routes.root.view.navigation)} />
        }
      >
        Случайный факт
      </PanelHeader>

      <Group>
        <Div>
          {isError && (
            <>
              <FormStatus header='Не удалось получить факт' mode='error'>
                Попробуйте ещё раз
              </FormStatus>
              <Spacing size={16} />
            </>
          )}

          <Button size='l' onClick={buttonClickHandler} loading={isPending}>
            Получить факт
          </Button>
          <Spacing size={16} />
          <Textarea
            getRef={textareaRef}
            placeholder='Здесь будет полученный факт'
            value={textareaValue}
            onChange={textareaChangeHandler}
          />
        </Div>
      </Group>
    </>
  )
}

export default RandomFactPage
