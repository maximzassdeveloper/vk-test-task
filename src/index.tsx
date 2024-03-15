import React from 'react'
import ReactDOM from 'react-dom/client'
import bridge from '@vkontakte/vk-bridge'
import App from './app/App'

bridge.send('VKWebAppInit')

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
