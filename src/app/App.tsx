import { ConfigProvider, AdaptivityProvider, AppRoot, SplitLayout, SplitCol } from '@vkontakte/vkui'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import { PanelsRouter } from './router'
import { ReactQueryProvider } from './react-query'
import { useVkConfig } from './vk-config/useVKConfig'
import { router } from '@/shared/router'

import '@vkontakte/vkui/dist/components.css'
import '@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css'
import '@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css'
import './styles/index.scss'

function App() {
  const { appearance } = useVkConfig()

  return (
    <ConfigProvider
      platform='vkcom'
      tokensClassNames={{
        dark: 'vkui--vkCom--dark',
        light: 'vkui--vkCom--light',
      }}
      appearance={appearance}
    >
      <AdaptivityProvider sizeY='regular' sizeX='regular'>
        <AppRoot>
          <RouterProvider router={router}>
            <ReactQueryProvider>
              <SplitLayout className='layout'>
                <SplitCol>
                  <PanelsRouter />
                </SplitCol>
              </SplitLayout>
            </ReactQueryProvider>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
