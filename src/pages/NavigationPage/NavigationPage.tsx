import { FC } from 'react'
import { Cell, Div, Group, PanelHeader } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { DEFAULT_VIEW_PANELS, routes } from '@/shared/router'

const menuItems = [
  {
    panel: DEFAULT_VIEW_PANELS.RANDOM_FACT,
    label: 'Случайный факт',
  },
  {
    panel: DEFAULT_VIEW_PANELS.CHECK_AGE,
    label: 'Проверка возраста',
  },
]

export const NavigationPage: FC = () => {
  const routeNavigator = useRouteNavigator()

  return (
    <>
      <PanelHeader>Навигация</PanelHeader>
      <Group>
        <Div>
          {menuItems.map((item) => (
            <Cell
              key={item.panel}
              onClick={() => routeNavigator.push(routes.root.view[item.panel])}
            >
              {item.label}
            </Cell>
          ))}
        </Div>
      </Group>
    </>
  )
}
