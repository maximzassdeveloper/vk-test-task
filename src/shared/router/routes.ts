import {
  createHashParamRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
  RouteLeaf,
} from '@vkontakte/vk-mini-apps-router'

export const DEFAULT_ROOT = 'root'
export const DEFAULT_VIEW = 'view'

export enum DEFAULT_VIEW_PANELS {
  NAVIGATION = 'navigation',
  RANDOM_FACT = 'random-fact',
  CHECK_AGE = 'check-age',
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.NAVIGATION, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.RANDOM_FACT, `/${DEFAULT_VIEW_PANELS.RANDOM_FACT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CHECK_AGE, `/${DEFAULT_VIEW_PANELS.CHECK_AGE}`, []),
    ]),
  ]),
])

export const hierarchy: RouteLeaf[] = [
  {
    path: '/',
    children: [
      {
        path: `/${DEFAULT_VIEW_PANELS.RANDOM_FACT}`,
        children: [],
      },
      {
        path: `/${DEFAULT_VIEW_PANELS.CHECK_AGE}`,
        children: [],
      },
    ],
  },
]

export const router = createHashParamRouter(routes.getRoutes())
