import { FC } from 'react'
import { Panel, Root, View } from '@vkontakte/vkui'
import { panels } from './panels'
import { DEFAULT_ROOT, DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from '@/shared/router'
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router'

export const PanelsRouter: FC = () => {
  const { view: activeView } = useActiveVkuiLocation()
  const activePanel = useGetPanelForView(DEFAULT_VIEW)

  return (
    <Root nav={DEFAULT_ROOT} activeView={activeView ?? DEFAULT_VIEW}>
      <View nav={DEFAULT_VIEW} activePanel={activePanel ?? DEFAULT_VIEW_PANELS.NAVIGATION}>
        {panels.map((panelItem) => (
          <Panel key={panelItem.name} id={panelItem.name}>
            {panelItem.component}
          </Panel>
        ))}
      </View>
    </Root>
  )
}
