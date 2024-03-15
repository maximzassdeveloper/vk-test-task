import { ReactNode } from 'react'
import { CheckAgePage } from '@/pages/CheckAgePage'
import { NavigationPage } from '@/pages/NavigationPage'
import { RandomFactPage } from '@/pages/RandomFactPage'
import { DEFAULT_VIEW_PANELS } from '@/shared/router'

interface PanelItem {
  name: DEFAULT_VIEW_PANELS
  component: ReactNode
}

export const panels: PanelItem[] = [
  {
    name: DEFAULT_VIEW_PANELS.NAVIGATION,
    component: <NavigationPage />,
  },
  {
    name: DEFAULT_VIEW_PANELS.RANDOM_FACT,
    component: <RandomFactPage />,
  },
  {
    name: DEFAULT_VIEW_PANELS.CHECK_AGE,
    component: <CheckAgePage />,
  },
]
