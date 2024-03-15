import { FC, useCallback, useState } from 'react'
import { ContentCard, Div, FormStatus, Group, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { routes } from '@/shared/router'
import { useCheckAgeByName } from '../api/useCheckAgeByName'
import { CheckAgeFields, CheckAgeForm } from './CheckAgeForm'

const CheckAgePage: FC = () => {
  const routeNavigator = useRouteNavigator()
  const [name, setName] = useState('')

  const { data, isLoading, isError } = useCheckAgeByName(name, {
    enabled: name.trim() !== '',
  })

  const submitHandler = useCallback((values: CheckAgeFields) => {
    setName(values.name)
  }, [])

  return (
    <>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => routeNavigator.push(routes.root.view.navigation)} />
        }
      >
        Узнать возраст по имени
      </PanelHeader>

      <Group>
        {isError && (
          <Div>
            <FormStatus header='Не удалось получить возраст' mode='error'>
              Попробуйте ещё раз
            </FormStatus>
          </Div>
        )}

        <CheckAgeForm onSubmit={submitHandler} isLoading={isLoading} />

        {!!data?.data && (
          <Div>
            <ContentCard
              mode='tint'
              header={
                data.data.age === null
                  ? `Возраста для имени ${data.data.name} нет`
                  : `Возраст для имени ${data.data.name}: ${data.data.age}`
              }
            />
          </Div>
        )}
      </Group>
    </>
  )
}

export default CheckAgePage
