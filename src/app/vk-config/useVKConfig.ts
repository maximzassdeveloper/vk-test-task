import { useLayoutEffect, useState } from 'react'
import bridge, { ReceiveDataMap, VKBridgeEvent } from '@vkontakte/vk-bridge'
import { Appearance, AppearanceType } from '@vkontakte/vkui/dist/lib/appearance'

export const useVkConfig = () => {
  const [appearance, setAppearance] = useState<AppearanceType>(Appearance.DARK)

  useLayoutEffect(() => {
    const subsctibeHandler = (e: VKBridgeEvent<keyof ReceiveDataMap>) => {
      const { data, type } = e.detail

      switch (type) {
        case 'VKWebAppUpdateConfig':
          setAppearance(data.appearance)
          break
      }
    }

    bridge.subscribe(subsctibeHandler)

    return () => {
      bridge.unsubscribe(subsctibeHandler)
    }
  })

  return { appearance }
}
